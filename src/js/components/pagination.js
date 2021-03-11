const { contains } = require("jquery");

if (document.querySelector('.pagination')) {

  //load JSON
  let file = "../../json/pagination.json",
      xmlhttp = new XMLHttpRequest(),
      pagJson;

  xmlhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
      pagJson = JSON.parse(this.responseText);
    }
    if (pagJson !== undefined) {
      let pag = document.querySelector('.pagination__iner'),
          countPage = pag.getAttribute('data-count-page'),
          activePage = pag.getAttribute('data-active-page'),
          pagLi = pag.querySelectorAll('.pagination__li');
      //console.log(pagJson.pages[0].href);
      pagination(pag, countPage, activePage, pagJson, pagLi);
    }
  };
  xmlhttp.open("GET", file, true);
  xmlhttp.send();
}

function pagination(pag, countPage, activePage, pagJson, pagLi) {
  let a1 = pagLi[1].querySelector('.pagination__link'),
      a2 = pagLi[2].querySelector('.pagination__link'),
      a3 = pagLi[3].querySelector('.pagination__link'),
      a4 = pagLi[4].querySelector('.pagination__link'),
      a5 = pagLi[5].querySelector('.pagination__link'),
      prev = document.querySelector('.pagination__prev'),
      next = document.querySelector('.pagination__next'),
      prevA = prev.querySelector('.pagination__link'),
      nextA = next.querySelector('.pagination__link');

  a1.textContent = 1;
  a1.setAttribute('href', pagJson.pages[0].href);
  pagLi[1].setAttribute('data-page', 1);
  a5.textContent = countPage;
  a5.setAttribute('href', pagJson.pages[countPage - 1].href);
  pagLi[5].setAttribute('data-page', countPage);
  if (activePage <= 3) {
    activePage == 1 ? prev.classList.add('pagination__disabled') : prev.classList.remove('pagination__disabled');
    console.log(prev.querySelector('.pagination__link'));
    a2.textContent = 2;
    a2.setAttribute('href', pagJson.pages[1].href);
    pagLi[2].setAttribute('data-page', 2);
    a3.textContent = 3;
    a3.setAttribute('href', pagJson.pages[2].href);
    pagLi[3].setAttribute('data-page', 3);
    a4.textContent = '...';
  } else if (activePage <= countPage - 3) {
    a2.textContent = '...';
    a3.textContent = activePage;
    a3.setAttribute('href', pagJson.pages[activePage-1].href);
    pagLi[3].setAttribute('data-page', activePage);
    a4.textContent = '...';
  } else {
    a2.textContent = '...';
    a3.textContent = countPage-2;
    a3.setAttribute('href', pagJson.pages[countPage-3].href);
    pagLi[3].setAttribute('data-page', countPage-2);
    a4.textContent = countPage-1;
    a4.setAttribute('href', pagJson.pages[countPage-2].href);
    pagLi[4].setAttribute('data-page', countPage-1);
    activePage == countPage ? next.classList.add('pagination__disabled') : next.classList.remove('pagination__disabled');
  }
  !prev.classList.contains('pagination__disabled') && prevA.setAttribute('href', pagJson.pages[activePage-2].href);
  !next.classList.contains('pagination__disabled') && nextA.setAttribute('href', pagJson.pages[activePage].href);
  document.querySelector(`.pagination__li[data-page="${activePage}"]`).classList.add('pagination__active');
}