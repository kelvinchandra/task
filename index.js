const axios = require("axios");

async function main(){
    const response = axios
    .get(
      "https://gist.githubusercontent.com/Jekiwijaya/c72c2de532203965bf818e5a4e5e43e3/raw/2631344d08b044a4b833caeab8a42486b87cc19a/gistfile1.txt"
    )
    .then(function (response) {
      const listOfNumber = response.data
        .split(" ")
        .map((value) => parseInt(value, 10));
      const minBeforeReduceLength = Math.min(...listOfNumber);
      const indexMinValue = listOfNumber.indexOf(minBeforeReduceLength);
      let maxValue = 0
      for(var i =indexMinValue ; i < listOfNumber.length; i ++  ){
            if (listOfNumber[i] > maxValue){
                maxValue  = listOfNumber[i]
            }
      }
      const result1 = maxValue - minBeforeReduceLength;
      const max = Math.max(...listOfNumber);
      const maxIndex = listOfNumber.indexOf(max);
      listOfNumber.length = maxIndex;
      const min = Math.min(...listOfNumber);
      const result2 = max - min;

      if (result1 > result2){
          console.log(`min value : ${minBeforeReduceLength} max value: ${maxValue} with profit: ${result1}`)
      }else if ( result2 > result1){
          console.log(`min value : ${min} max value: ${max} with profit: ${result2}`)
      }


    });
} 

main()