import Modal from '../lib/modal.js';

const headerOptions = {
  isOverlay: false,
};
const mobileMenuOptions = {
  animations: {
    content: {
      in: 'animate__animated animate__slideInLeft',
      out: 'animate__animated animate__slideOutLeft',
    }
  }
};
const catalogOptions = {
  isOverlay: false,
  animations: {
    content: {
      in: 'animate__animated animate__slideInDown',
      out: 'animate__animated animate__slideOutUp',
    }
  }
};

const modalList = {
  shopping: new Modal(document.getElementById('modal-shopping')),
  geo: new Modal(document.getElementById('modal-geo'), headerOptions),
  city: new Modal(document.getElementById('modal-choice-city'), headerOptions),
  callbback: new Modal(document.getElementById('modal-callback'), headerOptions),
  mobile: new Modal(document.getElementById('modal-mobile-menu'), mobileMenuOptions),
  search: new Modal(document.getElementById('modal-search')),
  catalog: new Modal(document.getElementById('modal-header-catalog'), catalogOptions),
};

document.addEventListener('showModal', (evt) => {
  hideModalAll();

  if (evt.target.classList.contains('header-modal')) {
    if (document.documentElement.clientWidth >= 992) {
      evt.target.style.maxHeight = evt.target.scrollHeight + 'px';
    }

    document.querySelector('.header').classList.add('header_fixed');
  }
  if (evt.target.classList.contains('modal-mobile-menu') || evt.target.classList.contains('header-catalog-modal')) {
    document.querySelector('.show-menu').classList.add('open-menu');
  }
});

document.addEventListener('hideModal', (evt) => {
  if (evt.target.classList.contains('header-modal')) {
    if (document.documentElement.clientWidth >= 992) {
      evt.target.style.maxHeight = null;
    }

    setTimeout(() => {
      document.querySelector('.header').classList.remove('header_fixed');
    }, 400);
  }
  if (evt.target.classList.contains('modal-mobile-menu')) {
    document.querySelector('.show-menu').classList.remove('open-menu');
  }
});

const headerCatalog = document.querySelector('.header__catalog');

if (headerCatalog) {
  document.getElementById('modal-header-catalog').addEventListener('showModal', () => {
    headerCatalog.classList.add('btn-toggle_active');
  });

  document.getElementById('modal-header-catalog').addEventListener('hideModal', () => {
    headerCatalog.classList.remove('btn-toggle_active');
  });
}

//модальное окно при первом визите
let firstVisit = false;

getModalGeo(firstVisit);

function getModalGeo(firsVisit) {
  firsVisit && modalList.geo.show();
}

function hideModalAll() {
  for (let key in modalList) {
    modalList[key].hide();
  }
}
