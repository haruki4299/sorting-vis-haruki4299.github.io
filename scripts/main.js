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
    copyArray = numArray.slice();
    const animation = []
    quickSort(copyArray, 0, numArray.length - 1, animation)
    // Execute Animation
    var id = null;
    function animate() {
        clearInterval(id);
        id = setInterval(frame, 10);
        let animationIndex = 0;
        function frame() {
            if (animation.length == animationIndex) {
                renderGraph(numArray, 'green');
                clearInterval(id);
            } else {
                const index1 = animation[animationIndex][0];
                const index2 = animation[animationIndex][1];
                [numArray[index1], numArray[index2]] = [numArray[index2], numArray[index1]];
                renderGraph(numArray);
                ++animationIndex;
            }
        }
    }
    animate();
});

document.body.querySelector('.merge-sort').addEventListener('click', () => {
    copyArray = numArray.slice();
    const animation = []
    mergeSort(copyArray, 0, numArray.length - 1, animation)
    // Execute Animation
    var id = null;
    function animate() {
        clearInterval(id);
        id = setInterval(frame, 10);
        let animationIndex = 0;
        function frame() {
            if (animation.length == animationIndex) {
                renderGraph(numArray, 'green');
                clearInterval(id);
            } else {
                const index = animation[animationIndex][0];
                const value = animation[animationIndex][1];
                numArray[index] = value;
                renderGraph(numArray);
                ++animationIndex;
            }
        }
    }
    animate();
});

document.body.querySelector('.insertion-sort').addEventListener('click', () => {
    copyArray = numArray.slice();
    const animation = []
    insertionSort(copyArray, copyArray.length, animation)
    // Execute Animation
    var id = null;
    function animate() {
        clearInterval(id);
        id = setInterval(frame, 10);
        let animationIndex = 0;
        function frame() {
            if (animation.length == animationIndex) {
                renderGraph(numArray, 'green');
                clearInterval(id);
            } else {
                const index1 = animation[animationIndex][0];
                const index2 = animation[animationIndex][1];
                [numArray[index1], numArray[index2]] = [numArray[index2], numArray[index1]];
                renderGraph(numArray);
                ++animationIndex;
            }
        }
    }
    animate();
});

document.body.querySelector('.selection-sort').addEventListener('click', () => {
    copyArray = numArray.slice();
    const animation = []
    selectionSort(copyArray, animation)
    // Execute Animation
    var id = null;
    function animate() {
        clearInterval(id);
        id = setInterval(frame, 40);
        let animationIndex = 0;
        function frame() {
            if (animation.length == animationIndex) {
                renderGraph(numArray, 'green');
                clearInterval(id);
            } else {
                const index1 = animation[animationIndex][0];
                const index2 = animation[animationIndex][1];
                [numArray[index1], numArray[index2]] = [numArray[index2], numArray[index1]];
                renderGraph(numArray);
                ++animationIndex;
            }
        }
    }
    animate();
});

document.body.querySelector('.bubble-sort').addEventListener('click', () => {
    copyArray = numArray.slice();
    const animation = [];
    bubbleSort(copyArray, animation);
    // Execute Animation
    var id = null;
    function animate() {
        clearInterval(id);
        id = setInterval(frame, 10);
        let animationIndex = 0;
        function frame() {
            if (animation.length == animationIndex) {
                renderGraph(numArray, 'green');
                clearInterval(id);
            } else {
                const index1 = animation[animationIndex][0];
                const index2 = animation[animationIndex][1];
                [numArray[index1], numArray[index2]] = [numArray[index2], numArray[index1]];
                renderGraph(numArray);
                ++animationIndex;
            }
        }
    }
    animate();
});

/* Sorting Methods */

// Bubble Sort
function bubbleSort(array, animation) {
    len1 = array.length;
    // Sort largest element to correct place
    // Swap larger elements to the right
    for (let i = 0; i < len1; i++) {
        // For optimization
        let swapped = false;
        for (let j = 0; j < len1; j++) {
            if (array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]];
                animation.push([j,j+1]);
                swapped = true;
            }
        }
        if (swapped == false) {
            break;
        }
    }
}

// Selection Sort
function selectionSort(array, animation) {
    len1 = array.length;
    for (let i = 0; i < len1; i++) {
        let j = i;
        let minIndex = i;
        while (j < len1) {
            if (array[minIndex] > array[j]) {
                minIndex = j;
            }
            j++;
        }
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
        animation.push([i,minIndex]);
    }
}

// Insertion Sort
function insertionSort(array, n, animation) {
    for (let i = 0; i < n; i++) {
        let compare = array[i];
        let j = i - 1;
        while (j >= 0 && array[j+1] < array[j]) {
            [array[j+1], array[j]] = [array[j], array[j+1]];
            animation.push([j,j+1])
            j = j - 1;
        }
    }
}

/* Merge Sort */
// helper function
function merge(array, minIndex, middle, maxIndex, animation) {
    // Length of first and second array
    let len1 = middle - minIndex + 1;
    let len2 = maxIndex - middle;

    // Create temp arrays
    let left = array.slice(minIndex, middle + 1);
    let right = array.slice(middle + 1, maxIndex + 1);

    // Merge the two arrays back to one
    // Index on left
    let i = 0;
    //Index on right
    let j = 0;
    // Index of Merged Array
    let k = minIndex;

    while (i < len1 || j < len2) {
        if (i >= len1) {
            array[k] = right[j];
            animation.push([k,right[j]])
            j++;
            k++;
        } else if (j >= len2) {
            array[k] = left[i];
            animation.push([k,left[i]])
            i++;
            k++;
        } else if (left[i] <= right[j]) {
            array[k] = left[i];
            animation.push([k,left[i]])
            i++;
            k++;
        } else {
            array[k] = right[j];
            animation.push([k,right[j]])
            j++;
            k++;
        }
    }
}

// Merge Sort: Split Arrays (keep track of the indexes)
function mergeSort(array, minIndex, maxIndex, animation) {
    // Base case: if less than or equal to one element, return
    if (minIndex >= maxIndex) {
        return;
    }
    let middle = minIndex + Math.floor((maxIndex - minIndex) / 2);
    // Split arrays and sort each
    mergeSort(array, minIndex, middle, animation);
    mergeSort(array, middle + 1, maxIndex, animation);
    // Put together the two sorted arrays
    merge(array, minIndex, middle, maxIndex, animation);
}
/** Quick Sort */
// Helper Function for quickSort()
function partition (array, low, high, animation) {
    // Choose the right most as pivot
    const pivot = array[high];

    // pointer for greater element
    let i = low - 1;
   
    // iterate through all elements comparing with pivot
    for (let j = low; j < high; ++j) {
        if (array[j] <= pivot) {
            i++;
            [array[j], array[i]] = [array[i], array[j]];
            animation.push([i,j])
        }
        
    }
    [array[i+1], array[high]] = [array[high], array[i+1]];
    animation.push([i+1,high])
    // return where the pivot belongs
    return i + 1;
}

function quickSort(array, low, high, animation) {
    if (low < high) {
        const pivotIndex = partition(array, low, high, animation);
        quickSort(array, low, pivotIndex - 1, animation)
        quickSort(array, pivotIndex + 1, high, animation)
    }
}

/* Display the Bar Graph based on numArray */
function renderGraph(array, color = 'blue') {
    const chartContainer = document.getElementById('chart');
    chartContainer.innerHTML = '';

    array.forEach(number => {
        const bar = document.createElement('div');
        bar.className = 'chart-bar';
        bar.style.height = number + 'px'; // Set the height of the bar based on the number
        bar.style.backgroundColor = color;
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