// 10 july learn js basic and exapmle of diffcult topics
// -----check the code ,uncomment and see the result in console---//

// const mw=78
// const mh=1.69
// const jw=92
// const jh=1.95

// const mbmi = mw/mh ** 2;
// const jbmi = jw/jh ** 2;
// const markHigherbmi = mbmi > jbmi;
// console.log(mbmi , jbmi , markHigherbmi);

// if(mbmi>jbmi){
//     console.log(`marks bmi is ${mbmi} higher than john`);
// }else{
//     console.log(`john bmi is  ${jbmi} less than mark`);
// }

// const boss = '345';
// const add = boss + 3423;
// console.log(add);

// const bill = 400;
// const b =
//   bill >= 50 && bill <= 300
//     ? (15 / 100) * bill
//     : console.log("bill is not valid");

// console.log(
//   `the bill is ${bill}, the tip is ${b}, the final bill is  ${bill + b}`
// );

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// const scoreDol = calcAverage(49, 23, 71);
// const scorekol = calcAverage(65, 54, 49);
// console.log(scoreDol, scorekol);

// const chackwin = function (avgD, avgk) {
//   if (avgD >= 2 * avgk) {
//     console.log(`dolphin win ${avgD} vs ${avgk}`);
//   } else {
//     console.log(`kolas  win ${avgk} vs ${avgD}`);
//   }
// };
// chackwin(scoreDol, scorekol);

// const friends = ["satyam", "ankit", "alok", "ashis", "arpit", "anurag", "aman"];
// console.log(friends, friends.length, friends[2]);
// friends[2] = "aloki";
// console.log(friends, friends[friends.length - 4]);
// const fuck = new Array(232, 343, 344);
// console.log(fuck);

// console.log(ku(1991));
// const ku= 
function calage(years,r) {
  
    const age =2037-years+r;
   console.log(age);
    
   function p(){
    const output = `your ${age} is ${r} less than ${years}`;
    
  console.log(output);
    if(years>=1980 && years>=1990){
     var f ='hjh'
     const output='hjg'
  
    const h="hi guys";
    console.log(h,output,f);}
   }
  
   p();
    
  }
  const
   r =8;
  calage(1991,r)
  
  
  
  // const year = [1997, 1996, 1994];
  // const age = [calage(year[0]), calage(year[2]), calage(year[1])];
  // console.log(age);
  
  // friends.push("jay");
  // friends.unshift("ram");
  // friends.pop();
  // friends.shift();
  
  // console.log(friends.indexOf("arpit"), friends.includes("aman"));
  
  // const bills = [125, 44, 555];
  
  // function caltip(bills) {
  //   const value = bills >= 50 && bills <= 300 ? 0.15 * bills : 0.2 * bills;
  
  //   return value;
  // }
  
  // const tips = [caltip(bills[0]), caltip(bills[1]), caltip(bills[2])];
  // console.log(tips);
  // const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
  // console.log(total);
  
  // const obj = {
  //   firstName: "Ram",
  //   lastName: "Chandr",
  //   age: "45",
  //   location: "Ayodhya",
  //   freindes: ["shyam", "gopal", "hari"],
  //   add: function () {
  //     return this.firstName + this.lastName;
  //   },
  //   summary: function () {
  //     return `${obj.firstName} is ${obj.age} year older than ${this.freindes[0]}`;
  //   },
  // };
  
  // console.log(obj.age);
  // console.log(obj["age"]);
  // obj.gender = "male";
  // obj["edu"] = "btech";
  // console.log(obj);
  // console.log(obj.freindes[1], obj.add());
  // console.log(obj.summary());
  
  // for (let i = 1; i <= 10; i++) {
  //   const a = 2 * i;
  //   console.log(a);
  // }
  
  // const array = [1, 2, 3, 4, 5];
  // let sum = 0;
  // for (let i = 0; i < 5; i++) {
  //   sum = sum + array[i];
  // }
  // console.log(sum);
  // const rev = array.reverse();
  // console.log(rev);
  
  
  // var x=7;
  // console.log(x);
  
  // const y=9;
  // console.log(y);
  
  
  const ageArray = [21,23,45,5,6];
  
  const a = ageArray[3];
  console.log(a);
  
  let [c,b,d,h ='jk',...e]= ageArray;
  console.log(c,d);
  console.log(c,b,d,h,e);
  
  // [c,b,d,e,f,h]=[b,c,e,d,h,f];
  // console.log(c,b,d,e,f,h);
  
  
  
  
  
  const intro ={
    name:'rahul',
    age:"32",
    martial:'single',
    edu:['btech','mba','ba','ca'],
    hob:'play',
    add:{
      city:'lko',
      state:'up'
    },
   
  }
  console.log(intro.age);
  
  const {name:foo, add,edu,k ='hg', ...g}=intro;
  console.log(foo,add,edu,g,k);
  
  let i = 5; 
  for (let i = 0; i <9; i++){
    console.log('hi');
  };
  console.log(i);
   
  