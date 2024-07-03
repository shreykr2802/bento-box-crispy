<script>
	import { onMount } from 'svelte';

	let unsortedBarArray = [];
	const ARRAY_SIZE = 10;
	const ANIMATION_SPEED = 100;
	let sortSelection = 'bubble';
	let arrayContainer;

	const generateRandomArray = (size) => {
		const array = [];
		for (let i = 0; i < size; i++) {
			array.push(Math.floor(Math.random() * 100) + 1);
		}
		return array;
	};

	const createBars = (array) => {
		arrayContainer.innerHTML = '';
		array.forEach((value) => {
			const bar = document.createElement('div');
			bar.style = `height: ${value * 2.5}px; width: 30px; background-color: #3498db; margin: 0 2px; transition: height 0.2s ease-in-out;border-radius: 6px 6px 0 0`;
			arrayContainer.appendChild(bar);
		});
	};

	async function bubbleSort(array) {
		const bars = arrayContainer.children;
		for (let i = 0; i < array.length; i++) {
			for (let j = 0; j < array.length - i - 1; j++) {
				bars.item(j).style.backgroundColor = 'var(--color-red-neon)';
				bars.item(j + 1).style.backgroundColor = 'var(--color-red-neon)';
				await new Promise((resolve) => setTimeout(resolve, ANIMATION_SPEED));

				if (array[j] > array[j + 1]) {
					[array[j], array[j + 1]] = [array[j + 1], array[j]];
					[bars[j].style.height, bars[j + 1].style.height] = [
						bars[j + 1].style.height,
						bars[j].style.height
					];
				}

				bars.item(j).style.backgroundColor = '#3498db';
				bars.item(j + 1).style.backgroundColor = '#3498db';
			}
			bars.item(array.length - i - 1).style.backgroundColor = '#2ecc71';
		}
	}

	async function selectionSort(array) {
		const bars = arrayContainer.children;
		for (let i = 0; i < array.length; i++) {
			let minIdx = i;
			bars.item(minIdx).style.backgroundColor = 'var(--color-red-neon)';
			for (let j = i + 1; j < array.length; j++) {
				bars.item(j).style.backgroundColor = 'yellow';
				await new Promise((resolve) => setTimeout(resolve, ANIMATION_SPEED));

				if (array[j] < array[minIdx]) {
					bars[minIdx].style.backgroundColor = '#3498db';
					minIdx = j;
					bars.item(minIdx).style.backgroundColor = 'var(--color-red-neon)';
				} else {
					bars.item(j).style.backgroundColor = '#3498db';
				}
			}
			[array[i], array[minIdx]] = [array[minIdx], array[i]];
			[bars[i].style.height, bars[minIdx].style.height] = [
				bars[minIdx].style.height,
				bars[i].style.height
			];
			bars.item(minIdx).style.backgroundColor = '#3498db';
			bars.item(i).style.backgroundColor = '#2ecc71';
		}
	}

	async function insertionSort(array) {
		const bars = arrayContainer.children;
		for (let i = 1; i < array.length; i++) {
			let key = array[i];
			let j = i - 1;
			bars.item(i).style.backgroundColor = 'var(--color-red-neon)';
			await new Promise((resolve) => setTimeout(resolve, ANIMATION_SPEED));

			while (j >= 0 && array[j] > key) {
				array[j + 1] = array[j];
				bars.item(j + 1).style.height = bars[j].style.height;
				bars.item(j + 1).style.backgroundColor = 'var(--color-red-neon)';
				j = j - 1;
				await new Promise((resolve) => setTimeout(resolve, ANIMATION_SPEED));
			}
			array[j + 1] = key;
			bars.item(j + 1).style.height = `${key * 3}px`;
			bars.item(i).style.backgroundColor = '#3498db';
			for (let k = 0; k <= i; k++) {
				bars.item(k).style.backgroundColor = '#2ecc71';
			}
		}
	}

	async function mergeSort(array) {
		if (array.length < 2) return array;
		const mid = Math.floor(array.length / 2);
		const left = array.slice(0, mid);
		const right = array.slice(mid);

		await mergeSort(left);
		await mergeSort(right);

		return await merge(array, left, right);
	}

	async function merge(array, left, right) {
		let leftIndex = 0;
		let rightIndex = 0;
		const bars = arrayContainer.children;

		while (leftIndex < left.length && rightIndex < right.length) {
			if (left[leftIndex] < right[rightIndex]) {
				array[leftIndex + rightIndex] = left[leftIndex];
				bars.item(leftIndex + rightIndex).style.height = `${left[leftIndex] * 3}px`;
				leftIndex++;
			} else {
				array[leftIndex + rightIndex] = right[rightIndex];
				bars.item(leftIndex + rightIndex).style.height = `${right[rightIndex] * 3}px`;
				rightIndex++;
			}
			bars.item(leftIndex + rightIndex - 1).style.backgroundColor = 'var(--color-red-neon)';
			await new Promise((resolve) => setTimeout(resolve, ANIMATION_SPEED));
		}

		while (leftIndex < left.length) {
			array[leftIndex + rightIndex] = left[leftIndex];
			bars.item(leftIndex + rightIndex).style.height = `${left[leftIndex] * 3}px`;
			bars.item(leftIndex + rightIndex).style.backgroundColor = 'var(--color-red-neon)';
			leftIndex++;
			await new Promise((resolve) => setTimeout(resolve, ANIMATION_SPEED));
		}

		while (rightIndex < right.length) {
			array[leftIndex + rightIndex] = right[rightIndex];
			bars.item(leftIndex + rightIndex).style.height = `${right[rightIndex] * 3}px`;
			bars.item(leftIndex + rightIndex).style.backgroundColor = 'var(--color-red-neon)';
			rightIndex++;
			await new Promise((resolve) => setTimeout(resolve, ANIMATION_SPEED));
		}

		for (let i = 0; i < array.length; i++) {
			bars.item(i).style.backgroundColor = '#2ecc71';
		}
	}

	async function quickSort(array, low = 0, high = array.length - 1) {
		if (low < high) {
			const pi = await partition(array, low, high);
			await quickSort(array, low, pi - 1);
			await quickSort(array, pi + 1, high);
		}
        const bars = arrayContainer.children;
        for (let i = 0; i < bars.length; i++) {
			bars.item(i).style.backgroundColor = '#2ecc71';
		}
	}

	async function partition(array, low, high) {
		const pivot = array[high];
		const bars = arrayContainer.children;
		bars.item(high).style.backgroundColor = 'var(--color-red-neon)';

		let i = low - 1;
		for (let j = low; j < high; j++) {
			bars.item(j).style.backgroundColor = 'yellow';
			await new Promise((resolve) => setTimeout(resolve, ANIMATION_SPEED));

			if (array[j] < pivot) {
				i++;
				[array[i], array[j]] = [array[j], array[i]];
				[bars[i].style.height, bars[j].style.height] = [bars[j].style.height, bars[i].style.height];
			}

			bars.item(j).style.backgroundColor = '#3498db';
		}

		[array[i + 1], array[high]] = [array[high], array[i + 1]];
		[bars[i + 1].style.height, bars[high].style.height] = [
			bars[high].style.height,
			bars[i + 1].style.height
		];
		bars.item(high).style.backgroundColor = '#3498db';

		return i + 1;
	}
	onMount(() => resetArray());

	const resetArray = () => {
		unsortedBarArray = generateRandomArray(ARRAY_SIZE);
		createBars(unsortedBarArray);
	};

	const startSorting = () => {
		switch (sortSelection) {
			case 'bubble':
				bubbleSort(unsortedBarArray);
				break;
			case 'selection':
				selectionSort(unsortedBarArray);
				break;
			case 'insertion':
				insertionSort(unsortedBarArray);
				break;
			case 'merge':
				mergeSort(unsortedBarArray);
				break;
			case 'quick':
				quickSort(unsortedBarArray);
				break;
		}
	};
</script>

<div class="array-visual">
	<h5 class="box-sub-title">SELECT SORTING TECHNIQUE</h5>
	<div class="controls">
		<select bind:value={sortSelection} class="sorting-select">
			<option value="bubble">Bubble Sort</option>
			<option value="selection">Selection Sort</option>
			<option value="insertion">Insertion Sort</option>
			<option value="merge">Merge Sort</option>
			<option value="quick">Quick Sort</option>
		</select>

		<button class="sorting-button" on:click={startSorting}>Start</button>
		<button class="sorting-button" on:click={resetArray}>Reset</button>
	</div>
	<div class="array-container" bind:this={arrayContainer}></div>
</div>

<style lang="scss">
	.array-visual {
		border: var(--box-border);
		border-radius: var(--inner-box-border-radius);
		width: calc(100% - var(--diff-factor));
		margin: var(--inner-box-margin);
		padding: var(--inner-box-padding);
		background-color: var(--color-box-background);
		text-decoration: none;
		color: var(--color-text-dark);
		.box-sub-title {
			margin: 0.2rem;
			padding: 0;
			letter-spacing: 2px;
		}

		.controls {
			display: flex;
			align-items: center;
			justify-content: space-evenly;

			.sorting-select {
				margin: 0.2rem;
				width: 8rem;
				border-radius: 8px;
				color: var(--color-text-light);
				outline: none;
			}

			.sorting-button {
				border-radius: 4px;
				color: var(--color-text-dark);
				outline: none;
				background-color: var(--color-red-neon);
				border: none;
				cursor: pointer;
			}
		}

		.array-container {
			display: flex;
			align-items: flex-end;
			justify-content: space-evenly;
			margin: 0.5rem;
			height: 275px;
		}
	}
</style>
