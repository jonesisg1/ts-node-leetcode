import { packetSimulation } from "./packetSim";

test('One', () => {
  expect(packetSimulation([['D',10],['A',0.15],['B',0.15],['C',0.17]])).toBe(0.6878245193);
});

test('Two', () => {
  expect(packetSimulation([['D',10],['A',0.15],['B',0.15],['C',0.17],['D',20],['T',21],['A',0.15],['B',0.16]])).toBe(1.4881613236);
});

test('Three', () => {
  expect(packetSimulation([['D',10],['A',0.15],['B',0.15],['C',0.17],
                           ['D',20],['T',21],['A',0.15],['B',0.16],
                           ['D',30],['A',0.16],['B',0.18],['C',0.15],
                          ])).toBe(2.3215816014);
});