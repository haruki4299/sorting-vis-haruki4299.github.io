let numArray = generateNewGraph();
renderGraph(numArray)


document.body.querySelector('.gen-new-graph').addEventListener('click', () => {
    numArray = generateNewGraph();
    renderGraph(numArray)
});

document.body.querySelector('.sort').addEventListener('click', () => {
    numArray.sort((a,b) => a - b);
    renderGraph(numArray);
});

document.body.querySelector('.quick-sort').addEventListener('click', () => {
    quickSort(numArray, 0, numArray.length - 1)
    renderGraph(numArray);
});


/* Sorting Methods */
/** Quick Sort */
// Helper Function for quickSort()
function partition (array, low, high) {
    // Choose the right most as pivot
    const pivot = array[high];

    // pointer for greater element
    let i = low - 1;
   
    // iterate through all elements comparing with pivot
    for (let j = low; j < high; ++j) {
        if (array[j] <= pivot) {
            i++;
            [array[j], array[i]] = [array[i], array[j]];
        }
        
    }
    [array[i+1], array[high]] = [array[high], array[i+1]];
    // return where the pivot belongs
    return i + 1;
}

function quickSort(array, low, high) {
    if (low < high) {
        const pivotIndex = partition(numArray, low, high);
        quickSort(array, low, pivotIndex - 1)
        quickSort(array, pivotIndex + 1, high)
    }
    setTimeout(() => {
        renderGraph(array);
    }, 1000);
}

/* Display the Bar Graph based on numArray */
function renderGraph(array) {
    console.log("Rendering")
    const chartContainer = document.getElementById('chart');
    chartContainer.innerHTML = '';

    array.forEach(number => {
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
    for (let i = 0; i < 100; ++i) {
        const randomInteger = generateRandomInt();
        array.push(randomInteger);
    } 
    return array;
}