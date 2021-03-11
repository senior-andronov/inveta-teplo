if ( document.querySelector('.basket-page') ) {
  showProducts();
  changeTotal();
  changePrice();
  
  document.querySelector('.basket-page').addEventListener('click', function() {
    this.addEventListener('DOMSubtreeModified', function(){
      showProducts();
      changeTotal();
      changePrice();
    })
  })

  document.querySelector('.basket-content__total-message .icon_close').addEventListener('click', function () {
    hide(this.closest('.basket-content__total-message'), true, 'animate__hide-up');
    this.closest('.basket-content__total-message').classList.add('user-close-message');
  })

  let countProducts = document.querySelectorAll('.basket-content__product-mini-count .number');
  for (const countProduct of countProducts) {
    countProduct.querySelector('.number__input').addEventListener('input', function(){ changePrice() })
    countProduct.querySelector('.number__plus').addEventListener('click', function(){ setTimeout(changePrice, 100) })
    countProduct.querySelector('.number__itnus').addEventListener('click', function(){ setTimeout(changePrice, 100) })
  }

  let delMiniProducts = document.querySelectorAll('.basket-content__product-mini-del');
  for (const delMiniProduct of delMiniProducts) {
    delMiniProduct.addEventListener('click', function() {
      let thisMiniProduct = this.closest('.basket-content__product-mini'),
          thisProduct = this.closest('.basket-content__product');
      if (thisProduct.querySelectorAll('.basket-content__product-mini').length == 1) {
        thisProduct.classList.add('animate__hide-up');
        thisProduct.addEventListener('transitionend', function() {this.remove()}, {once: true});
      } else {
        thisMiniProduct.classList.add('animate__hide-up');
        thisMiniProduct.addEventListener('transitionend', function() {this.remove()}, {once: true});
      }
    })
  }

  let delProducts = document.querySelectorAll('.basket-content__product .basket-content__product-desc-del');
  for (const delProduct of delProducts) {
    delProduct.addEventListener('click', function() {
      this.closest('.basket-content__product').classList.add('animate__hide-up');
      this.closest('.basket-content__product').addEventListener('transitionend', function() {this.remove()}, {once: true});
    })
  }

  document.querySelector('.basket-page__clear-all').addEventListener('click', function() {
    let products = document.querySelectorAll('.basket-content__product');
    for (const product of products) {
      product.classList.add('animate__hide-up');
      product.addEventListener('transitionend', function() {this.remove()}, {once: true});
    }
  })

  function showProducts() {
    let products = document.querySelector('.basket-products'),
        emptyBasket = document.querySelector('.basket-page__empty-basket'),
        productInterested = document.querySelector('.basket-page__product-interested'),
        clearAll = document.querySelector('.basket-page__clear-all'),
        count = document.querySelector('.basket-page__count-product');
    if (document.querySelector('.basket-content__product')) {
      products.style.display = 'block';
      emptyBasket.style.display = 'none';
      productInterested.style.display = 'block';
      clearAll.style.display = 'inline-block';
      count.style.display = 'inline-block';
    } else {
      products.style.display = 'none';
      emptyBasket.style.display = 'block';
      productInterested.style.display = 'none';
      clearAll.style.display = 'none';
      count.style.display = 'none';
    }
  }

  function changeTotal() {
    let productNoPrice = document.querySelector('.basket-content__total-product-no-price'),
        productPrice = document.querySelector('.basket-content__total-product-price'),
        hr = document.querySelector('.basket-content__total-hr'),
        total =  document.querySelector('.basket-content__total-total'),
        message = document.querySelector('.basket-content__total-message'),
        specify = document.querySelectorAll('.basket-content__product-mini-specify'),
        priceProduct = document.querySelectorAll('.basket-content__product-mini');

    let numSpecify = specify.length,
        numPriceProduct = priceProduct.length;
    if (numSpecify == numPriceProduct) {
      hide(total, true, 'animate__hide-up');
      hide(hr, true, 'animate__hide-up');
      hide(productPrice, true, 'animate__hide-up');
      show(productNoPrice, 'animate__show-up');
      !message.classList.contains('user-close-message') && show(message, 'animate__show-up');
    } else if (numSpecify && numSpecify != numPriceProduct) {
      show(total, 'animate__show-up');
      show(hr, 'animate__show-up');
      show(productPrice, 'animate__show-up');
      show(productNoPrice, 'animate__show-up');
      !message.classList.contains('user-close-message') && show(message, 'animate__show-up');
    } else {
      show(total, 'animate__show-up');
      show(hr, 'animate__show-up');
      show(productPrice, 'animate__show-up');
      hide(productNoPrice, true, 'animate__hide-up');
      hide(message, true, 'animate__hide-up'); 
    }
  }

  function changePrice() {
    let specifys = document.querySelectorAll('.basket-content__product-mini-specify'),
        priceProducts = document.querySelectorAll('.basket-content__product-mini:not(.basket-content__product-mini-specify)'),
        allCount = 0,
        countNoPrice = 0,
        countPrice = 0,
        totalPrice = 0;
    
    if (priceProducts.length) {
      for (const priceProduct of priceProducts) {
        let count = Number(priceProduct.querySelector('.number__input').value),
            price = Number(priceProduct.querySelector('.basket-content__product-mini-price span').innerHTML.replace(/[^\d]/g, ''));
        allCount = allCount + count;
        countPrice = countPrice + count;
        totalPrice = totalPrice + ( count *  price);
      }
    }
    if (specifys.length) {
      for (const specify of specifys) {
        allCount = allCount + Number(specify.querySelector('.number__input').value);
        countNoPrice = countNoPrice + Number(specify.querySelector('.number__input').value);
      }
    }
    totalPrice = String(totalPrice)
    document.querySelector('.basket-content__total-all-product .num').textContent = allCount;
    document.querySelector('.basket-content__total-product-no-price .num').textContent = countNoPrice;
    document.querySelector('.basket-content__total-product-price .num').textContent = countPrice;
    document.querySelector('.basket-content__total-total .num').textContent = totalPrice.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
  }

  function hide(el, boolDisplay, animClass) {
    el.classList.remove(...[...el.classList].filter(n => n.indexOf('animate') !== -1))
    el.classList.add(animClass);
    boolDisplay ? el.addEventListener('transitionend', function() {el.style.position = 'absolute'}, {once: true}) : el.addEventListener('transitionend', function() {el.remove()}, {once: true});
  }

  function show(el, animClass) {
    el.classList.remove(...[...el.classList].filter(n => n.indexOf('animate') !== -1));
    el.style.position = 'unset';
    el.classList.add(animClass);
  }
}