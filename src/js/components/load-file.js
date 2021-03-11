import tippy from 'tippy.js';

if (document.querySelectorAll('.order-form__form')) {

  const inputFile = document.querySelectorAll('#order-load-file');

  inputFile.forEach(function(el) {
    let fileList,
        formFile = document.querySelector('.order-form__file');

    // Событие выбора файла(ов) 
    el.addEventListener('change', function (e) {
      // создаём массив файлов 
      fileList = [];
      for (let i = 0; i < el.files.length; i++) {
        el.files[i].id = i;
        fileList.push(el.files[i]);
      }
      // вызов функции для каждого файла 
      fileList.forEach(file => {
        uploadFile(file);
      });
      
      tippy(document.querySelectorAll('[data-tippy-content]'));
      let delFiles = document.querySelectorAll('.order-form__file-item .icon_trash');
      del(delFiles, fileList);
    });

    // Проверяем размер файлов и выводим название 
    const uploadFile = (file) => {
      // файла <5 Мб 
      if (file.size > 0.5 * 1024 * 1024) {
        formFile.insertAdjacentHTML('beforeend', `<div class="order-form__file-item file-error" data-tippy-content="Файл должен быть не более 5 МБ." data-file-id="${file.id}">
                                                      <svg class="icon icon_error">
                                                        <use xlink:href="img/svg/symbol/sprite.svg#error"></use>
                                                      </svg>
                                                      <div class="order-form__file-item-title">${file.name}</div>
                                                      <svg class="icon icon_trash">
                                                        <use xlink:href="img/svg/symbol/sprite.svg#trash"></use>
                                                      </svg>
                                                    </div>`);
      } else {
        formFile.insertAdjacentHTML('beforeend', `<div class="order-form__file-item file-load" data-file-id="${file.id}">
                                                      <svg class="icon icon_file">
                                                        <use xlink:href="img/svg/symbol/sprite.svg#file"></use>
                                                      </svg>
                                                      <div class="order-form__file-item-title">${file.name}</div>
                                                      <svg class="icon icon_trash">
                                                        <use xlink:href="img/svg/symbol/sprite.svg#trash"></use>
                                                      </svg>
                                                    </div>`);
      }
    }
  });

  function del(delFiles) {
    for (const delFile of delFiles) {
      delFile.addEventListener('click', function() {
        this.closest('.order-form__file-item').remove();
      })
    }
  }

};