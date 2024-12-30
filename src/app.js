const keyTextEl = document.querySelector('#key')
const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'q', 'w', 'r', 't', 'y', 'u', 'i', 's', 'g', 'n', 'x', 'z']
const gameStatus = document.querySelector('.game-state')
const resultTextEl = document.querySelector('.result')

let currentKey = keys[Math.floor(Math.random() * keys.length)]
keyTextEl.textContent = currentKey

let result = 0
window.addEventListener('keydown', (e) => {
  if (String(e.key) === String(currentKey)) {
    currentKey = keys[Math.floor(Math.random() * keys.length)]
    keyTextEl.textContent = currentKey
    result++
    resultTextEl.textContent = 'рахунок: ' + result
  } else {
    PNotify.info({
      title: 'Отакої!',
      text: 'Схоже ви натиснули не на ту кнопку :(',
    });
  }
  gameStatus.textContent = 'Гра триває'
})

document.querySelector('.change-game').addEventListener('click', () => {
  result = 0
  resultTextEl.textContent = 'рахунок: ' + result
  PNotify.notice({
    title: 'Почалась нова гра!',
  });
  gameStatus.textContent = 'Нажміть кнопку щоб почати нову гру!'
})

// 2

const ctx = document.getElementById('sales-chart');

const chartData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
    },
  ],
};

const salesChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: chartData.labels,
    datasets: chartData.datasets
  },
});