const swap = (vetor, pos1, pos2) => {
    [vetor[pos1], vetor[pos2]] = [vetor[pos2], vetor[pos1]];
};
const suffle = (vetor, numTrocas) => {
    for (let i = 0; i < numTrocas; i++) {
        const pos1 = Math.floor(Math.random() * vetor.length);
        const pos2 = Math.floor(Math.random() * vetor.length);
        swap(vetor, pos1, pos2);
    }
};
const bubble_sort = (vetor) => {
    for (let i = 0; i < vetor.length - 1; i++) {
        for (let j = 0; j < vetor.length - i - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1);
            }
        }
    }
};
const selection_sort = (vetor) => {
    const n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (vetor[j] < vetor[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(vetor, i, minIndex);
        }       
    }
};
const quick_sort = (vetor, posInicial = 0, posFinal = vetor.length - 1) => {
    if (posInicial < posFinal) {
        const pivotIndex = partition(vetor, posInicial, posFinal);
        quickSort(vetor, posInicial, pivotIndex - 1);
        quickSort(vetor, pivotIndex + 1, posFinal);
    }
};
const particionamento = (vetor, posInicial, posFinal) => {
    const pivot = vetor[posFinal];
    let i = posInicial - 1;
    for (let j = posInicial; j < posFinal; j++) {
        if (vetor[j] < pivot) {
            i++;
            swap(vetor, i, j);
        }
    }
    swap(vetor, i + 1, posFinal);
    return i + 1;
};


