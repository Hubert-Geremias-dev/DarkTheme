const historyPanel = document.getElementById('history');
const historyList = document.getElementById('history-list');
const showHistoryButton = document.getElementById('show-history');
function addToHistory(entry) {
    const li = document.createElement('li');
    li.textContent = entry;
    historyList.appendChild(li);
}
showHistoryButton.addEventListener('click', () => {
    historyPanel.classList.toggle('hidden');
});