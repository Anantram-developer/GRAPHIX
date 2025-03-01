function plotGraph() {
    let equation = document.getElementById('equation').value;
    let xValues = math.range(-10, 10, 0.1).toArray();
    let yValues;
    
    try {
        yValues = xValues.map(x => math.evaluate(equation, { x: x }));
    } catch (error) {
        alert("Invalid equation! Please enter a valid mathematical function.");
        return;
    }
    
    let trace = {
        x: xValues,
        y: yValues,
        mode: 'lines',
        line: { color: '#bb86fc', width: 3 }
    };
    
    let layout = {
        paper_bgcolor: '#1e1e1e',
        plot_bgcolor: '#1e1e1e',
        font: { color: 'white' },
        margin: { t: 20, b: 40, l: 40, r: 20 },
        xaxis: { gridcolor: '#444', zerolinecolor: '#bb86fc' },
        yaxis: { gridcolor: '#444', zerolinecolor: '#bb86fc' }
    };
    
    Plotly.newPlot('graph', [trace], layout);
}
