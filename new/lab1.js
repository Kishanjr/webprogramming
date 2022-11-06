function isPrime(n) {
    // Corner case
    if (n <= 1)
        return false;
  
    // Check from 2 to n-1
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;
  
    return true;
}



const questionOne = function questionOne(arr) {
    list = {};

    // while (i < 0) {
    // null, undefined
    // [ 3, 4, 5 ]
    // }
    
    let i = 0;
    // let n = arr.length;
    while (arr[i]) {
        let a = Math.pow(arr[i],2) - 7;
        let b = Math.abs(a);
        list[b] = isPrime(b);
        i++;
    }
    return list;
}


const questionTwo = function questionTwo(arr) {
    let x= [];
   
    for(let i = 0;i<arr.length;i++){
        let  a=arr[i]
        if(!x.includes(a)){
            x.push(a)
        }
        
    };

 return x;
}


const a_sort=function a_sort(str){
    if (!str) {
      return {};
    }
    str = str.split('').sort().join('');
    return str;
  }


const duplicate = function duplicate(arr) {
    let x= [];
   
    for(let i = 0;i<arr.length;i++){
        let  a=arr[i]
        if(!x.includes(a)){
            x.push(a)
        }
        
    };

 return x;
}
const questionThree = function questionThree(arr) {
   
        function anagram(array ){
            let x= {};
       
        for(i in arr) {
            let a= arr[i] //element
            let b = a_sort(a) //sorted element 
            if(x[b]!=null){

                 x[b].push(a)  
            }else{
               
                x[b]= [a]
            }
        }
            for(i in x ){
                if (x[i].length ==1) delete x[i];
            }return x;
            
        }let   output = anagram(arr);
        let O=Object.values(output);
        let k=Object.keys(output)
        for(i in O){
            let new_result={}
            j=O[i]
            new_result[k]=duplicate(j)
             final_out=new_result;
        }return final_out;
        
    }
    
const factorial=  function factorial(num){
    if(num<0) return -1;
    else if (num == 0 )return 1;
    else{  n = num*factorial(num-1);

    }return n;

    }


const questionFour = function questionFour(num1,num2,num3) {
    let factorial_sum = factorial(num1)+factorial(num2)+factorial(num3);
    let avg = (num1+num2+num3)/3;
    let factorial_avg=factorial_sum/avg;
    let result = Math.floor(factorial_avg)

    return result;
}

module.exports = {
    firstName: "YOUR FIRST NAME", 
    lastName: "YOUR LAST NAME", 
    studentId: "YOUR STUDENT ID",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
}