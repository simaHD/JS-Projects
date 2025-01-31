//challenge: Write a JS code to print Even numbers in given array

const numbers=[13, 23, 12, 45, 22, 48, 66, 100];
let evenNumbers=[];
let oddNumbers=[];

for(let i=0; i<numbers.length; i++)
    {
        if (numbers[i]%2===0)
        {
            evenNumbers.push(numbers[i]);
        }
        else
        {
            oddNumbers.push(numbers[i]);
        }
            
            
    }

    evenNumbers=evenNumbers.join(' ');
    oddNumbers=oddNumbers.join(' ');

console.log(evenNumbers, ' Are Even');
console.log(oddNumbers,' Are odd');

