let fbArray = new Array ();

for (let i=1; i<=100; i++) {
  fbArray.push(FizzBuzz(i));
}
console.log(fbArray);

function FizzBuzz(numberIn){
  var result = '';
  let fizz =  numberIn % 3 === 0;
  let buzz =  numberIn % 5 === 0;

  if (fizz) result += 'Fizz';
  if (buzz) result += 'Buzz';
  if (!(fizz || buzz)) result = numberIn.toString();
  return result;
}
