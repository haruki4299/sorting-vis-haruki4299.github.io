let numArray = generateNewGraph();
console.log("Here")
renderGraph(numArray)


document.body.querySelector('.gen-new-graph').addEventListener('click', () => {
    numArray = generateNewGraph();
    renderGraph(numArray)
});

document.body.querySelector('.sort').addEventListener('click', () => {
    numArray.sort((a,b) => a - b);
    renderGraph(numArray);
});

/* Display the Bar Graph based on numArray */
function renderGraph () {
    const chartContainer = document.getElementById('chart'); 
    console.log(chartContainer)
    chartContainer.innerHTML = '';

    numArray.forEach(number => {
        const bar = document.createElement('div');
        bar.className = 'chart-bar';
        bar.style.height = number + 'px'; // Set the height of the bar based on the number
        chartContainer.appendChild(bar);
    });
}

/* Helper Function to Generate a Random Integer */
function generateRandomInt() {
    const randomInteger = Math.floor(Math.random() * 700);
    return randomInteger;
}

/* Generate new number of arrays */
function generateNewGraph () {
    const array = [];
    for (let i = 0; i < 350; ++i) {
        const randomInteger = generateRandomInt();
        array.push(randomInteger);
    } 
    return array;
}