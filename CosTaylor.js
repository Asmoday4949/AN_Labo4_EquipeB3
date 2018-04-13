/**
  * Authors : Biloni Kim, Fleury Malik, Bulloni Lucas
  * Date : 13 april 2018
  * Description : Set of function to calculate cos without trigonometric functions
  */
function cosTaylor(x)
{

}

function cosFirstDerivative(x)
{

}

function cosSecondDerivative(x)
{

}

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
