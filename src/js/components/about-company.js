if ( document.querySelector('.about-company') ) {
  
  let showAllTarget = document.querySelector('.target-card__all-show'),
      targetCard = document.querySelector('.target-card');

  showAllTarget.addEventListener('click', function(){
    targetCard.classList.toggle('open-card');
    this.classList.toggle('open-card')
    this.classList.contains('open-card') ? this.querySelector('span').textContent = 'Свернуть' : this.querySelector('span').textContent = 'Показать все'
  })

}