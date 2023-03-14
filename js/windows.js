(() => {
  const refs = {
      openWindowBtn: document.querySelector('[data-window-open]'),
      openWindowBtn2: document.querySelector('[data-window-open2]'),
      openWindowBtn3: document.querySelector('[data-window-open3]'),
      openWindowBtn4: document.querySelector('[data-window-open4]'),
      openWindowBtn5: document.querySelector('[data-window-open5]'),
    openWindowBtn6: document.querySelector('[data-window-open6]'),
    openWindowBtn7: document.querySelector('[data-window-open7]'),
    openWindowBtn8: document.querySelector('[data-window-open8]'),
      openWindowBtn9: document.querySelector('[data-window-open9]'),
      
      closeWindowBtn: document.querySelector('[data-window-close]'),
      closeWindowBtn2: document.querySelector('[data-window-close2]'),
       closeWindowBtn3: document.querySelector('[data-window-close3]'),
       closeWindowBtn4: document.querySelector('[data-window-close4]'),
    closeWindowBtn5: document.querySelector('[data-window-close5]'),
    closeWindowBtn6: document.querySelector('[data-window-close6]'),
    closeWindowBtn7: document.querySelector('[data-window-close7]'),
    closeWindowBtn8: document.querySelector('[data-window-close8]'),
       closeWindowBtn9: document.querySelector('[data-window-close9]'),

      window: document.querySelector('[data-window]'),
      window2: document.querySelector('[data-window2]'),
      window3: document.querySelector('[data-window3]'),
      window4: document.querySelector('[data-window4]'),
    window5: document.querySelector('[data-window5]'),
    window6: document.querySelector('[data-window6]'),
    window7: document.querySelector('[data-window7]'),
    window8: document.querySelector('[data-window8]'),
      window9: document.querySelector('[data-window9]'),
    };

  refs.openWindowBtn.addEventListener('click', toggleWindow);
  refs.closeWindowBtn.addEventListener('click', toggleWindow);
  
  refs.openWindowBtn2.addEventListener('click', toggleWindow2);
  refs.closeWindowBtn2.addEventListener('click', toggleWindow2);

  refs.openWindowBtn3.addEventListener('click', toggleWindow3);
  refs.closeWindowBtn3.addEventListener('click', toggleWindow3);

  refs.openWindowBtn4.addEventListener('click', toggleWindow4);
  refs.closeWindowBtn4.addEventListener('click', toggleWindow4);

  refs.openWindowBtn5.addEventListener('click', toggleWindow5);
  refs.closeWindowBtn5.addEventListener('click', toggleWindow5);

  refs.openWindowBtn6.addEventListener('click', toggleWindow6);
  refs.closeWindowBtn6.addEventListener('click', toggleWindow6);

  refs.openWindowBtn7.addEventListener('click', toggleWindow7);
  refs.closeWindowBtn7.addEventListener('click', toggleWindow7);

  refs.openWindowBtn8.addEventListener('click', toggleWindow8);
  refs.closeWindowBtn8.addEventListener('click', toggleWindow8);

  refs.openWindowBtn9.addEventListener('click', toggleWindow9);
  refs.closeWindowBtn9.addEventListener('click', toggleWindow9);  

    function toggleWindow() {
      refs.window.classList.toggle('is-hidden');
  }
  
    function toggleWindow2() {
      refs.window2.classList.toggle('is-hidden2');
  }

   function toggleWindow3() {
      refs.window3.classList.toggle('is-hidden3');
  }

  function toggleWindow4() {
    refs.window4.classList.toggle('is-hidden4');
}

function toggleWindow5() {
  refs.window5.classList.toggle('is-hidden5');
  }
  
  function toggleWindow6() {
  refs.window6.classList.toggle('is-hidden6');
  }
  
    function toggleWindow7() {
  refs.window7.classList.toggle('is-hidden7');
  }
  
  function toggleWindow8() {
  refs.window8.classList.toggle('is-hidden8');
  }
  
  function toggleWindow9() {
  refs.window9.classList.toggle('is-hidden9');
}


  })();
