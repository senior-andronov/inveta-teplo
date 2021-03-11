import { animateCSS } from '../utils.js';

//load JSON
var file = "../../json/category.json",
	xmlhttp = new XMLHttpRequest(),
	categorys;

xmlhttp.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		categorys = JSON.parse(this.responseText);
	}
	if (categorys !== undefined) {
		if (document.documentElement.offsetWidth < 992) {
			let ulCategory = document.getElementById('mobile-catalog'),
				btnCategoryBack = document.getElementById('menu-btn-back');
			loadCategory(categorys);
			renderChildrenCategory(ulCategory);
			btnClickBack(btnCategoryBack, categorys, ulCategory);
		}
	}
};
xmlhttp.open("GET", file, true);
xmlhttp.send();

function loadCategory(categorys) {
	let desktopCategorys = document.querySelectorAll('.header-catalog-menu .header-catalog-menu__item');
	for (let desktopCategory of desktopCategorys) {
		desktopCategory.remove();
	}

	let ulCategory = document.querySelector('.header-catalog-menu');
	for (let category of categorys) {
		if (category.categoryLvl == 0) {
			ulCategory.insertAdjacentHTML('beforeend', `<li class="header-catalog-menu__item" data-id-category="${category.id}">
                                                    <a class="header-catalog-menu__item-link mobile-category" href="#" data-id-category="${category.id}">${category.name}
                                                      <svg class="icon icon_arrow-right-min" data-id-category="${category.id}">
                                                        <use xlink:href="img/svg/symbol/sprite.svg#arrow-right-min"></use>
                                                      </svg>
                                                    </a>
                                                  </li>`);
		}
	}
}

function renderChildrenCategory(ulCategory) {
	ulCategory.onclick = function (event) {
		clickCategory(event.target, ulCategory);
	};
}

function clickCategory(li, ulCategory) {
	let arrChildren,
		btnBack = document.getElementById('menu-btn-back'),
		btnCatalog = document.querySelector('#menu-btn-catalog'),
		btnViewAll = document.querySelector('.header-catalog-menu__view-all'),
		idClickCategory = li.getAttribute('data-id-category');
	for (let category of categorys) {
		if (category.id == idClickCategory && category.childrenCategory != false) {
			arrChildren = category.childrenCategory;
			btnCatalog.classList.add('header-modal__back-btn-hide');
			btnBack.classList.remove('header-modal__back-btn-hide');
			btnBack.lastChild.textContent = category.name;
			btnBack.setAttribute('data-lvl', category.categoryLvl);
			btnBack.setAttribute('data-id', category.id);
			btnViewAll.setAttribute('data-name-category', category.name);
			btnViewAll.setAttribute('href', category.href);
			animateCSS(btnBack, 'animate__fadeIn');
		}
	}

	for (let liCategory of ulCategory.querySelectorAll('li:not(.delete-event)')) {
		liCategory.remove();
	}

	for (let category of categorys) {
		for (let i = 0; i < arrChildren.length; i++) {
			if (arrChildren[i] === category.id && category.childrenCategory) {
				ulCategory.insertAdjacentHTML('beforeend', `<li class="header-catalog-menu__item" data-id-category="${category.id}">
                                                      <a class="header-catalog-menu__item-link mobile-category" href="#" data-id-category="${category.id}">${category.name}
                                                        <svg class="icon icon_arrow-right-min" data-id-category="${category.id}">
                                                          <use xlink:href="img/svg/symbol/sprite.svg#arrow-right-min"></use>
                                                        </svg>
                                                      </a>
                                                    </li>`);
			} else if (arrChildren[i] === category.id && category.childrenCategory === false) {
				ulCategory.insertAdjacentHTML('beforeend', `<li class="header-catalog-menu__item delete-event" data-id-category="${category.id}">
                                                      <a class="header-catalog-menu__item-link mobile-category" href="${category.href}" data-id-category="${category.id}">${category.name}</a>
                                                    </li>`);
			}
		}
	}

	animateCSS(ulCategory, 'animate__fadeIn');
}

function btnClickBack(btnCategoryBack, categorys, ulCategory) {
	btnCategoryBack.addEventListener('click', function () {
		let lvlCategoryBack = btnCategoryBack.getAttribute('data-lvl'),
			IdCategoryBack = btnCategoryBack.getAttribute('data-id'),
			btnViewAll = document.querySelector('.header-catalog-menu__view-all'),
			btnCatalog = document.querySelector('#menu-btn-catalog'),
			parent;
		if (lvlCategoryBack != null) {
			for (let liCategory of ulCategory.querySelectorAll('li')) {
				liCategory.remove();
			}

			for (let category of categorys) {
				if (category.categoryLvl == lvlCategoryBack) {
					ulCategory.insertAdjacentHTML('beforeend', `<li class="header-catalog-menu__item" data-id-category="${category.id}">
                                                      <a class="header-catalog-menu__item-link mobile-category" href="#" data-id-category="${category.id}">${category.name}
                                                        <svg class="icon icon_arrow-right-min" data-id-category="${category.id}">
                                                          <use xlink:href="img/svg/symbol/sprite.svg#arrow-right-min"></use>
                                                        </svg>
                                                      </a>
                                                    </li>`);
				}
				if (category.id == IdCategoryBack) {
					parent = category;
				}
			}

			for (let category of categorys) {
				if (parent.parentCategory == false) {
					btnCatalog.classList.remove('header-modal__back-btn-hide');
					btnCategoryBack.classList.add('header-modal__back-btn-hide');
					btnViewAll.setAttribute('data-name-category', "Каталог продукции");
					btnViewAll.setAttribute('href', btnViewAll.getAttribute('data-href'));
				} else if (category.id == parent.parentCategory) {
					btnCategoryBack.lastChild.textContent = category.name;
					btnCategoryBack.setAttribute('data-lvl', category.categoryLvl);
					btnCategoryBack.setAttribute('data-id', category.id);
					btnViewAll.setAttribute('data-name-category', category.name);
					btnViewAll.setAttribute('href', category.href);
				}
			}
		}
		animateCSS(btnCatalog, 'animate__fadeIn');
		animateCSS(btnCategoryBack, 'animate__fadeIn');
		animateCSS(ulCategory, 'animate__fadeIn');
	})
}
