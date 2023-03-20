(() => {
  const refs = {
    openWindowBtn3: document.querySelector('[data-window-open3]'),
    openWindowBtn4: document.querySelector('[data-window-open4]'),
    openWindowBtn5: document.querySelector('[data-window-open5]'),
    openWindowBtn2: document.querySelector('[data-window-open2]'),
    openWindowBtn: document.querySelector('[data-window-open]'),

    closeWindowBtn3: document.querySelector('[data-window-close3]'),
    closeWindowBtn4: document.querySelector('[data-window-close4]'),
    closeWindowBtn5: document.querySelector('[data-window-close5]'),
    closeWindowBtn2: document.querySelector('[data-window-close2]'),
    closeWindowBtn: document.querySelector('[data-window-close]'),

    window3: document.querySelector('[data-window3]'),
    window4: document.querySelector('[data-window4]'),
    window5: document.querySelector('[data-window5]'),
    window2: document.querySelector('[data-window2]'),
    window: document.querySelector('[data-window]'),
  };

  refs.openWindowBtn3.addEventListener('click', toggleWindow3);
  refs.closeWindowBtn3.addEventListener('click', toggleWindow3);

  refs.openWindowBtn4.addEventListener('click', toggleWindow4);
  refs.closeWindowBtn4.addEventListener('click', toggleWindow4);

  refs.openWindowBtn5.addEventListener('click', toggleWindow5);
  refs.closeWindowBtn5.addEventListener('click', toggleWindow5);

  refs.openWindowBtn2.addEventListener('click', toggleWindow2);
  refs.closeWindowBtn2.addEventListener('click', toggleWindow2);

  refs.openWindowBtn.addEventListener('click', toggleWindow);
  refs.closeWindowBtn.addEventListener('click', toggleWindow);

  function toggleWindow3() {
    refs.window3.classList.toggle('is-hidden3');
  }
  function toggleWindow4() {
    refs.window4.classList.toggle('is-hidden4');
  }
  function toggleWindow5() {
    refs.window5.classList.toggle('is-hidden5');
  }
  function toggleWindow2() {
    refs.window2.classList.toggle('is-hidden2');
  }
  function toggleWindow() {
    refs.window.classList.toggle('is-hidden');
  }


})();
