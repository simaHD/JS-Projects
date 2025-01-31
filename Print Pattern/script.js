//challenge: Write a JS code to print below pattern
// 1
// 1 2 
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// let pattern=[];

// for ( let i=1; i<=5; i++)
// {
//      pattern.push(i);
//      let pattern2=pattern.join('   ');
//     console.log(pattern2);
// }

for ( let i=1; i<=5; i++)
  {
    let string ="";
    for (let j=1; j<=i; j++){
        string += j + '  ';
    }
        console.log(string);
  }
