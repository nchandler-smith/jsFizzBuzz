let fbArray = new Array ();

for (let i=1; i<=100; i++) {
  fbArray.push(FizzBuzz(i));
}
console.log(fbArray);

function FizzBuzz(numberIn){
  let result = numberIn;

  if (numberIn % 3 == 0) {
    result = 'Fizz';
  }

  if (numberIn % 5 === 0) {
    result = 'Buzz';
  }

  return result
}
