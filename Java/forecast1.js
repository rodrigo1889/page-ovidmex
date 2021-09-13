let config = {
  pointType: 'mmwr-week', // Default is week
  axes: {
    y: {
      title: 'Random numbers' // Title for the y axis
    }
  }
}
let timePoints = [Array(51).keys()].map(w => {
  return { week: w + 1, year: 2016 }
})

function rseq (n) {
let seq = [Math.random()]
for (let i = 1; i < n; i++) {
    seq.push(Math.random() * (1 + seq[i - 1]))
}
return seq
}
  
  // Predictions look like [{ series: [{ point: 0.5 }, { point: 1.2 } ...] }, ..., null, null]
let predictions = timePoints.map(tp => {
if (tp.week > 30) {
    // We only predict upto week 30
    return null
} else {
    // Provide 10 week ahead predictions
    return {
    series: rseq(10).map(r => { return { point: r } })
    }
}
})
let data = {
  timePoints,
  models: [
    {
      id: 'mod',
      meta: {
        name: 'Name',
        description: 'Model description here',
        url: 'http://github.com'
      },
      pinned: false, // Setting true shows the model in top section of the legend
                     // In case of absence of `pinned` key (or false), the model
                     // goes in the bottom section
      predictions,
      style: { // Optional parameter for applying custom css on svg elements
        color: '#4682b4', // Defaults to values from the internal palette
        point: {
          color: '#4682b4'
          // Style for the dots in prediction
        },
        area: {
          // Style for the confidence area (shaded region around the line)
        },
        line: {
          color: '#4682b4'
          // Style for the main line
        }
      }
    }
  ]
}



let timeChart = new d3Foresight.TimeChart('#timechart', config);
timeChart.plot(data);
timeChart.update(10);
//window.timeChart = timeChart;


