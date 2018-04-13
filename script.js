document.addEventListener('DOMContentLoaded', function(event)
{
  displayPlot("graph");
});

// display a plot in the div
function displayPlot(divPlot)
{
  const xMin = -4;
  const xMax = 4;
  const step = 0.1

  let layout =
  {
    width: 1000,
    height: 400,

    xaxis:
    {
      range: [-4, 4],
      autorange: false
    },
    yaxis:
    {
      range: [-1.1, 1.1],
      autorange: false
    },
    hovermode: "closest"
  };

  let cosPoints = computeEachPoint(xMin, xMax, Math.cos);
  let cosPlot = {
		name: 'cos(x)',
		x: cosPoints[0],
		y: cosPoints[1],
		type: 'scatter'
	};

  let cosTaylorPoints = computeEachPoint(xMin, xMax, cosTaylor);
  let cosTaylorPlot = {
		name: 'cos(x) par taylor',
		x: cosTaylorPoints[0],
		y: cosTaylorPoints[1],
		type: 'scatter'
	};

  let firstDerivativePoints = computeEachPoint(xMin, xMax, cosFirstDerivative);
  let firstDerivativePlot = {
    name: 'cos\'(x)',
    x: firstDerivativePoints[0],
    y: firstDerivativePoints[1],
    type: 'scatter'
  };

  let secondDerivativePoints = computeEachPoint(xMin, xMax, cosSecondDerivative);
  let secondDerivativePlot = {
    name: 'cos\'\'(x)',
    x: secondDerivativePoints[0],
    y: secondDerivativePoints[1],
    type: 'scatter'
  };

  plotData = [];
  plotData.push(cosPlot);
  plotData.push(cosTaylorPlot);
  plotData.push(firstDerivativePlot);
  plotData.push(secondDerivativePlot);

  Plotly.newPlot(divPlot, plotData, layout);
}

// compute every points of the function
function computeEachPoint(min, max, fx)
{
  let xData = [];
  let yData = [];
  const step = 0.1;

  for(let i = min;i <= max; i += step)
  {
    xData.push(i);
    let y = fx(i);
    yData.push(y);
  }

  return [xData, yData];
}
