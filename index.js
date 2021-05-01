const axios = require("axios");

async function task1(){
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


async function task2(){
    const response = axios
    .get(
      "https://gist.githubusercontent.com/Jekiwijaya/0b85de3b9ff551a879896dd78256e9b8/raw/e9d58da5d4df913ad62e6e8dd83c936090ee6ef4/gistfile1.txt"
    )
    .then(function (response) {
        const data = response.data;
        const mySet1 = new Set(data);
        let result = '';
        for(const value of mySet1.values()){
            result = result + value
            console.log(`result in progress: ${result}`)
        }
        console.log(`result ${result}`)
    });
} 


async function task2(){
    const response = axios
    .get(
      "https://gist.githubusercontent.com/Jekiwijaya/0b85de3b9ff551a879896dd78256e9b8/raw/e9d58da5d4df913ad62e6e8dd83c936090ee6ef4/gistfile1.txt"
    )
    .then(function (response) {
        const data = response.data;
        const mySet1 = new Set(data);
        let result = '';
        for(const value of mySet1.values()){
            result = result + value
            console.log(`result in progress: ${result}`)
        }
        console.log(`result ${result}`)
    });
} 



async function task2(){
    const response = axios
    .get(
      "https://gist.githubusercontent.com/Jekiwijaya/0b85de3b9ff551a879896dd78256e9b8/raw/e9d58da5d4df913ad62e6e8dd83c936090ee6ef4/gistfile1.txt"
    )
    .then(function (response) {
        const data = response.data;
        const mySet1 = new Set(data);
        let result = '';
        for(const value of mySet1.values()){
            result = result + value
            console.log(`result in progress: ${result}`)
        }
        console.log(`result ${result}`)
    });
} 


async function task2(num){
    let arr = [];
    let result = 0 
    var i = 1
    while(i < num){

        for(var j = 1 ; j <= num ; j ++){
            if(i < j) {
                console.log(`break`)
                break;
            }
            console.log(`value I: ${i} %  value J ${j}`)
            if (i % j == 0){
                let division = i / j;
                arr.push(j)
            }

            if (arr.length > 6){
                console.log(`break2`)
                arr = []
                break;
            }
        }

   
        if (arr.length == 6){
            result = result + 1
        }
        arr = []
        i++;
    }

    console.log(`result: ${result}`);
}


task2(128)

