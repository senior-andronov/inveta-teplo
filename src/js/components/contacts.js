if (document.querySelector('#contacts-adress__email')) {
  let copyElem = document.querySelector('#contacts-adress__email');
  copyElem.addEventListener('click', copy);
}

function copy() {
  var copyElem = this,
      selection = window.getSelection(),
      range = document.createRange();
  range.selectNodeContents(copyElem);
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  copyElem.classList.add('is-copy');
}

if (document.querySelector('#contacts-map')) {
  ymaps.ready(function () {
    var myMap = new ymaps.Map('contacts-map', {
      center: [56.836140, 60.586123],
      zoom: 13,
      controls: ['fullscreenControl', 'zoomControl']
    }, {
      searchControlProvider: 'yandex#search'
    }),

    myPoint = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'ROIBuro',
      balloonContent: 'Здесь текст при нажаитии на метку'
    }, {
      iconLayout: 'default#image',
      iconImageHref: '../img/icon-map.svg',
      iconImageSize: [32, 32],
      iconImageOffset: [-5, -15]
    });

    myMap.geoObjects.add(myPoint);
    myMap.behaviors.disable('scrollZoom');

    let ctrlKey = false,
        ctrlMessVisible = false,
        ctrlDisplay = document.querySelector('#ymap_ctrl_display'),
        timer;

    // Отслеживаем скролл мыши на карте, чтобы показывать уведомление
    myMap.events.add(['wheel', 'mousedown'], function(e) {
      if (e.get('type') == 'wheel') {
          if (!ctrlKey) { // Ctrl не нажат, показываем уведомление
            ctrlDisplay.classList.add('ctrl-show');
              ctrlMessVisible = true;
              clearTimeout(timer); // Очищаем таймер, чтобы продолжать показывать уведомление
              timer = setTimeout(function() {
                  ctrlDisplay.classList.remove('ctrl-show');
                  ctrlMessVisible = false;
              }, 1500);
          }
          else { // Ctrl нажат, скрываем сообщение
            ctrlDisplay.classList.remove('ctrl-show');
          }
      }
      if (e.get('type') == 'mousedown' && ctrlMessVisible) { // Скрываем уведомление при клике на карте
        ctrlDisplay.classList.remove('ctrl-show');
      }
    });

    document.querySelector('#contacts-map').addEventListener('click', ()=> {
      ctrlDisplay.classList.remove('ctrl-show');
    })

    // Обрабатываем нажатие на Ctrl
    document.addEventListener('keydown', function(e) {
      if (e.which === 17 && !ctrlKey) { // Ctrl нажат: включаем масштабирование мышью
          ctrlKey = true;
          myMap.behaviors.enable('scrollZoom');
      }
    });
    document.addEventListener('keyup', function(e) { // Ctrl не нажат: выключаем масштабирование мышью
      if (e.which === 17) {
          ctrlKey = false;
          myMap.behaviors.disable('scrollZoom');
      }
    });

    if (document.documentElement.offsetWidth < 992) {
      myMap.behaviors.disable('drag');
      ctrlDisplay.remove();
    }

  });
}
