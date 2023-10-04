export function dailyTemperatures(temperatures: number[]): number[] {
  let temp:number;
  const tempMap = new Map<number,number[]>();
  const result: number[] = Array(temperatures.length).fill(0);
  for(let i = 0; i < temperatures.length; i++) {
    temp = temperatures[i];
    tempMap.forEach((valArr, key) => {
      if(temp > key) {
        for(const val of valArr) {
          result[val] = i - val;
        }
        tempMap.delete(key);
      }
    })
    if(tempMap.has(temp)){
      tempMap.get(temp)?.push(i);
    } else {
      tempMap.set(temp, [i]);
    }
  }
  return result;
}