    const popup = document.getElementById('popup');
    const popupContent = document.querySelector('.popup-content');
    const closeBtn = document.getElementById('close-btn');
	const closeBtn2 = document.getElementById('resume-button');
    const clickableButton = document.getElementById('clickable-button');

    window.addEventListener('load', () => {
      openPopup();
    });

    clickableButton.addEventListener('click', () => {
      openPopup();
    });

    closeBtn.addEventListener('click', () => {
      closePopup();
    });

	closeBtn2.addEventListener('click', () => {
      closePopup();
    });

    window.addEventListener('click', (event) => {
      if (event.target === popup) {
        closePopup();
      }
    });

    function openPopup() {
      popup.style.display = 'flex';
      setTimeout(() => {
        popupContent.classList.add('fade-in');
      }, 500);
    }

    function closePopup() {
      popupContent.classList.remove('fade-in');
      setTimeout(() => {
        popup.style.display = 'none';
      }, 500);
    }
//round-button
    function animateClick2() {
      var button = document.querySelector(".resume-button");
      button.classList.add("clicked2");
      setTimeout(function() {
        button.classList.remove("clicked2");
      }, 300);
    }

	    function animateClick() {
      var button = document.querySelector(".round-button");
      button.classList.add("clicked");
      setTimeout(function() {
        button.classList.remove("clicked");
      }, 300);
    }