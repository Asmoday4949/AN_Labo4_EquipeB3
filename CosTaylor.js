/**
* Authors : Biloni Kim, Fleury Malik, Bulloni Lucas
* Date : 13 april 2018
* Description : Set of function to calculate cos without trigonometric functions
*/

// cosinus calculated with taylor
function cosTaylor(x)
{
  // transform x in order to put it between -Pi and Pi (Pi not included)
  // since it's a periodic function
  // and after these values the taylor function will diverge from the real cos
  x = ((x+Math.PI) % (2*Math.PI)) - Math.PI;

  // for performance purposes, we should use a precalculated array, generated with generateCosFactorialValuesForTaylor and copy pasted
  const resultFactorial = [2,24,720,40320,3628800,479001600,87178291200,20922789888000,6402373705728000,2432902008176640000,1.1240007277776077e+21,6.204484017332394e+23,4.0329146112660565e+26,3.0488834461171384e+29];
  // after watching on a graph when cos taylor will be really close to a real cos
  // and watching the difference between values
  // 14 step need
  // so until power 28
  let result = 1;

  for(let i = 2; i < resultFactorial.length*2; i += 2)
  {
    let sign = (i%4 != 0) ? -1 : 1;

    result += sign * Math.pow(x, i) / resultFactorial[i/2-1];
  }

  return result;
}

// first derivative of a cos calculated with taylor
function cosFirstDerivative(x)
{
  return firstDerivative4thDegrees(cosTaylor, x, 0.0000000001);
}

// first derivative with the central difference technique
// h can be lower than the h value of the 4th polynomial technique
// error (h^2)
function firstDerivativeCentral(f, x, h)
{
   return (f(x+h)-f(x-h))/(2*h);
}

// first derivative with the 4th degree polynomial technique
// h must not be to much low
// less errors (h^4) and more accurate
function firstDerivative4thDegrees(f, x, h)
{
   return (8*(f(x+h/2)-f(x-h/2))-f(x+h)+f(x-h))/(6*h);
}

//second derivative of a cos calculated with taylor
function cosSecondDerivative(x)
{
  return secondDerivative(cosTaylor, x, 0.000001);
}

// second derivate with centred method
// h must higher than for the first derivat
// Error ordre O(h) -> bad algorithm
function secondDerivative(f, x, h)
{
  return (f(x+h) + f(x-h) -2*f(x))/(h*h);
}

// function to get the factorial of x
function factorial(x)
{
  if(x === 0)
  {
    return 1;
  }
  if(x < 0 || isNaN(x))
  {
    return NaN;
  }
  else
  {
    let result = 1;
    for(let i = 2; i <= x; i++)
    {
      result *= i;
    }

    return result;
  }
}

// generate an array of value for the factorial of taylor for a cos
function generateCosFactorialValuesForTaylor()
{
  let valuesCalculated = [];
  const STEP_NEEDED = 28;
  for(i = 2; i <= STEP_NEEDED; i += 2)
  {
    valuesCalculated.push(factorial(i));
  }

  return valuesCalculated;
}
