export function carFleet(target: number, position: number[], speed: number[]): number {
  const roadArr: Array<number> = [];
  
  for(let i = 0; i < position.length; i++) {
    roadArr[position[i]] = (target - position[i]) / speed[i];
  }

  let fleetCount: number = 1;

  let currentTime: number|null = null;
  // roadArr.reverse();
  // for(const nextTime of roadArr){
  //   if(currentTime === null) {
  //     currentTime = nextTime;
  //   } else {
  //     if(nextTime > currentTime) {
  //       fleetCount++;
  //       currentTime = nextTime;
  //     }
  //   }
  // }
  // const found = roadArr.findLast((element) => element);
  // console.log(found);

  roadArr.findLast((nextTime) => {
    if(currentTime === null) {
      currentTime = nextTime;
    } else {
      if(nextTime > currentTime) {
        fleetCount++;
        currentTime = nextTime;
      }
    }
  });

  return fleetCount;
}