

// 1

function  countVowels(str){
    
 let count=0;
    for(let i=0;i<str.length-1;i++){
        if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"||str[i]=="A"||str[i]=="E"||str[i]=="I"||str[i]=="O"||str[i]=="U"){
            count++;

        }

    }
    return count
    
}

countVowels("hello world");


//3

const expenses = [
    { category: "Food", amount: 120 },
    { category: "Travel", amount: 300 },
    { category: "Food", amount: 80 },
    { category: "Bills", amount: 200 },
    { category: "Travel", amount: 100 },
    ];

  function getCategorySummary(expenses){
    let sum1=0,sum2=0,sum3=0;

    for(let i=0;i<=expenses.length;i++){
        
        if(expenses[i].category=="Food"){
            let sum1=  expenses[i].amount;
           

        }
        else if(expenses[i].catagory=="Traval"){
           let sum2= sum2+expenses[i].amount;
        }
        else if(expenses[i].catagory=="bills"){
          let sum3= sum3+ expenses[i].amount;

    }
    
    
   

  }
  const expensess = [
    { category: "Food", amount:sum1 },
    { category: "Travel", amount: sum2 },
  
    { category: "Bills", amount: sum3 },
    
];
  
  return expenses

}


for(let j=0;j<expensess.length;j++){
    if(expensess[j].amount>max){
        let max=expensess[j].amount;
    }
}

console.log(expensess);
console.log("hehihest salary:",max );

//2






