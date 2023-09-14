export function carFleet(target: number, position: number[], speed: number[]): number {
  const roadArr: Array<number> = [];
  
  for(let i = 0; i < position.length; i++) {
    roadArr[position[i]] = (target - position[i]) / speed[i];
  }

  let fleetCount: number = 1;

  function countFleets(road: number[], current: number): void {
    if(road.length === 0){
      return;
    }
    // console.log(road);
    while(road.length > 0) {
      const next = road.pop() || 0;
      if(next > current){
        fleetCount ++;
        current = next;
      }
      // console.log(`${current} - ${next} - ${fleetCount}`);
    }
  }

  const first = roadArr.pop() || 0;
  countFleets(roadArr, first)

  return fleetCount;
}