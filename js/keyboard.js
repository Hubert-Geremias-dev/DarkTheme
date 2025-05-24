document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        display.value += key;
    } else if (key === 'Enter') {
        try {
            display.value = eval(display.value);
            addToHistory(display.value);
        } catch (error) {
            display.value = 'Erro';
        }
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (key.toLowerCase() === 'c') {
        display.value = '';
    }
});