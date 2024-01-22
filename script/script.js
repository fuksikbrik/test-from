var ctx = document.getElementById('myChart').getContext('2d');
var dataValues = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100));
    // Создаем данные для графика
    var data = {
      labels: ['8 Feb', '15 Feb', '22 Feb', '1 Mar'],
      datasets: [{
        label: '',
        // type: 'candlestick',
        backgroundColor: 'rgba(21, 227, 181, 1)',
        borderColor: 'rgba(21, 227, 181, 1)',
        borderWidth: 1,
        data: dataValues,
        borderSkipped: 'bottom', // Показывать доджи только внизу
        pointStyle: 'rectRounded', // Форма доджи
        
        
      }]
    };

    // Создаем настройки для графика
    var options = {
        scales: {
          x: {
            position: 'bottom',
            maxTicksLimit: 4, // Ограничиваем количество отображаемых значений
            grid: {
              display: false, // Убираем заднюю сетку
            },
          },
          y: {
            position: 'right', // Изменено с 'left' на 'right'
            beginAtZero: true,
            maxTicksLimit: 1,
            grid: {
              display: false, // Убираем заднюю сетку
            },
          }
        },
        plugins:{
          legend: {
            display: false
          },
        },
        
        elements: {
          point: {
            radius: 0 // Убираем точки
          },
          line: {
            tension: 0.4 // Уменьшаем напряженность линии для более плавного графика
          }
        },
        
      };

    // Создаем график
    var myChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options
    });
    console.log(data.labels.length)

    function openTab(tabId, element) {
      // Скрыть все табы
      let tabs = document.getElementsByClassName('tab-content');
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active-tab');
      }
  
      // Убрать класс active у всех табов
      let tabButtons = document.getElementsByClassName('tab');
      for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
      }
  
      // Показать выбранный таб
      let selectedTab = document.getElementById(tabId);
      selectedTab.classList.add('active-tab');
  
      // Добавить класс active к выбранному элементу
      element.classList.add('active');
    }

    function toggleText() {
      var textElement = document.getElementById("text");
      var buttonElement = document.getElementById("toggleButton");
  
      if (textElement.style.maxHeight) {
          textElement.style.maxHeight = null;
          buttonElement.innerHTML = "Show More";
      } else {
          textElement.style.maxHeight = textElement.scrollHeight + "px";
          buttonElement.innerHTML = "Show Less";
      }
  }

    
    