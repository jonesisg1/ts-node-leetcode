export function numberToWords(num: number): string {
  // 2,147,483,648
  const unitMap = new Map<number, string>([
    [0, "Zero"], [1, "One"], [2, "Two"], [3, "Three"], [4, "Four"], [5, "Five"], [6, "Six"], [7, "Seven"],
    [8, "Eight"], [9, "Nine"], [10, "Ten"], [11, "Eleven"], [12, "Twelve"], [13, "Thirteen"], [14, "Fourteen"],
    [15, "Fifteen"], [16, "Sixteen"], [17, "Seventeen"], [18, "Eighteen"], [19, "Nineteen"]
  ]);
  const tensMap = new Map<number, string>([
    [2, "Twenty"], [3, "Thirty"], [4, "Forty"], [5, "Fifty"], [6, "Sixty"], [7, "Seventy"], [8, "Eighty"], [9, "Ninety"]
  ])

  function tensUnitsText(num: number): string {
    const numStr = num.toString() || '';
    if(num < 20) {
      return unitMap.get(num) || '';
    }
    return tensMap.get(Number(numStr.substring(0,1))) + ((numStr.substring(1,2) === '0') ? '' : (' ' + unitMap.get(Number(numStr.substring(1,2)))));
  } 

  function hundredsText(num: number): string {
    if(num < 100) {
      return tensUnitsText(num);
    }
    const numStr = num.toString() || '';
    return unitMap.get(Number(numStr.substring(0,1))) + ' Hundred' + ((numStr.substring(1,3) === '00') ? '' : (' ' + tensUnitsText(Number(numStr.substring(numStr.length -2)))));
  }

  // function thousandsText(num: number): string {
  //   if(num < 1000) {
  //     return hundredsText(num);
  //   }
  //   const numStr = num.toString() || '';
  //   // 1001
  //   return hundredsText(Number(numStr.substring(0, numStr.length -3))) + ' Thousand' + ((Number(numStr.substring(numStr.length -3)) === 0) ? '' : (' ' + hundredsText(Number(numStr.substring(numStr.length -3)))));
  // }

  // function millionsText(num: number): string {
  //   if(num < 1000000) {
  //     return thousandsText(num);
  //   }
  //   const numStr = num.toString() || '';
  //   // 7,483,648
  //   return thousandsText(Number(numStr.substring(0, numStr.length -6))) + ' Million' + ((Number(numStr.substring(numStr.length -6)) === 0) ? '' : (' ' + thousandsText(Number(numStr.substring(numStr.length -6)))));
  // }

  // if(num < 1000000000) {
  //   return millionsText(num);
  // }
  // const numStr = num.toString() || '';
  // // //1,234,567,891
  // return millionsText(Number(numStr.substring(0, numStr.length -9))) + ' Billion' + ((Number(numStr.substring(numStr.length -9)) === 0) ? '' : (' ' + millionsText(Number(numStr.substring(numStr.length -9)))));

  // const bigNums = new Map<number, string>([[3, "Thousand"],[6, "Million"],[9, "Billion"]]);

  function bigNumsText(num: number, offset: number): string {
    // const limit: number = Number('1'.padEnd(offset +1, '0'));
    const unitText: string = (offset === 9) ? ' Billion' : (offset === 6) ? ' Million' : (offset === 3) ? ' Thousand' : '';
    // switch(offset) {
    //   case 3: unitText = " Thousand";
    //     break;
    //   case 6: unitText = " Million";
    //     break;
    //   case 9: unitText = " Billion";
    // }
    // console.log(`limit ${limit} offset ${offset}`)
    if(num < 1000) {
      return hundredsText(num);
    }
    if(num < Number('1'.padEnd(offset +1, '0'))) {
      return bigNumsText(num, offset -3);
    }
    const numStr = num.toString() || '';
    // 1001
    const unitStart: number = numStr.length - offset;
    const newOffset: number = offset - 3;
    return bigNumsText(Number(numStr.substring(0, unitStart)), newOffset) + unitText + ((Number(numStr.substring(unitStart)) === 0) ? '' : (' ' + bigNumsText(Number(numStr.substring(unitStart)), newOffset)));
  }
  return bigNumsText(num, 9);
}