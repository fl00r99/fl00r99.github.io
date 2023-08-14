document.addEventListener("DOMContentLoaded", function() {
    const popupButtons = document.querySelectorAll(".popup-button");
  
    popupButtons.forEach(button => {
      button.addEventListener("click", function() {
        const imageSrc = button.getAttribute("data-image");
        openPopupWindow(imageSrc);
      });
    });
  });
  
  function openPopupWindow(imageSrc) {
    const popupWidth = 600;
    const popupHeight = 400;
    const left = (window.innerWidth - popupWidth) / 2;
    const top = (window.innerHeight - popupHeight) / 2;
  
    const popupOptions = `
      width=${popupWidth},
      height=${popupHeight},
      left=${left},
      top=${top},
      resizable=yes,
      scrollbars=yes
    `;
  
    const popupWindow = window.open(imageSrc, "popupImage", popupOptions);
  }
  