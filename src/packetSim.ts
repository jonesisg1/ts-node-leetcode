import {round, evaluate} from 'mathjs'

let packet: [string, number];

// Defaults from spec. Should be in ini / config file.
const defaultTemp: number = 20;
const defaultTempCompensationMap: Map<string, number> = new Map([
  ['A', 0.0495],
  ['B', 0.0486],
  ['C', 0.044]
]);

export function packetSimulation(dataStream: Array<typeof packet>): number {
  console.log(dataStream);
  /* Assume 
   * One sensor, one data value. ['SensorType', Value]
   * Order of data is fixed but packets may be dropped.
   * Sensor Types: (D)epth, (T)emp, Callipers: (A), (B), (C)
   */
  const anEngine = new analysisEngine(defaultTempCompensationMap);

  for (const packet of dataStream) {
    anEngine.processPacket(packet);
  }
  return Number(anEngine.volume);
}


class analysisEngine {
  #temperatureCompensationMap: Map<string, number>;
  #volume: number;
  #prevDepth: number;
  #depth: number;
  #temperature: number;
  #calliperReadings: number[];
  constructor(temperatureCompensation: Map<string, number>) {
    this.#temperatureCompensationMap = temperatureCompensation
    this.#volume = 0; /// For testing
    this.#prevDepth = 0;
    this.#depth = 0;
    this.#calliperReadings = [];
    this.#temperature = defaultTemp;
  }

  get volume() {
    if(this.#calliperReadings.length > 0){
      this.#calculateVolume();
    }
    // After searching the docs for hours I couldn't find a simple way to convert a math.js number to a js number :/
    let strNum = round(this.#volume,10).toString();
    strNum = strNum.substring(2,strNum.length-2);
    console.log(strNum);
    return Number(strNum);
  }

  processPacket(packet: [string, number]) {
    let calc: string;
    console.log(packet);
    const [sensor, value] = packet;
    switch(sensor) {
      case 'D':
        this.#calculateVolume();
        this.#prevDepth = this.#depth;
        this.#depth = value;
        break;
      case 'T':
        this.#temperature = value;
        break;
      case 'A':
      case 'B':
      case 'C':
        calc = `
          bignumber(${this.#temperature}) * 
          bignumber(${(this.#temperatureCompensationMap.get(sensor) || 1)}) * 
          bignumber(${value})`;
        // console.log(calc);
        this.#calliperReadings.push(evaluate(calc));
    }
  }

  #calculateVolume() {
    const depthDelta: number = this.#depth - this.#prevDepth;
    if(depthDelta === 0) {
      return;
    }
    const sumOfReadings = this.#calliperReadings.reduce((prev, curr) => {
      return evaluate(`bignumber(${prev || 0}) + bignumber(${curr})`)
    })
    const avgRadious = evaluate(`
      bignumber(${sumOfReadings}) / bignumber(${this.#calliperReadings.length})
    `);
    this.#volume = evaluate(`${this.#volume} + (${depthDelta} * pi * ${avgRadious}^2)`)
    this.#calliperReadings = [];
  }
}