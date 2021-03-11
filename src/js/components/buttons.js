const btns = document.querySelectorAll('.btn-slide');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.add('btn-slide_active');
    btn.disabled = true;

    setTimeout(() => {
      btn.classList.add('btn-slide_complited');
    }, 1000);
  });
});

// const btnToggle = document.querySelectorAll('.btn-toggle');

// btnToggle.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     btn.classList.toggle('btn-toggle_active');
//   });
// });
