// JavaScript Document
const resumeButton = document.querySelector('.resume-button');
  const resumePopup = document.querySelector('.resume-popup');
  const resumePopupContent = document.querySelector('.resume-popup-content');
  const resumeCloseBtn = document.querySelector('.resume-close-btn');

  resumeButton.addEventListener('click', () => {
    resumePopup.style.display = 'flex';
    setTimeout(() => {
      resumePopupContent.classList.add('fade-in');
    }, 500);
  });

  resumeCloseBtn.addEventListener('click', () => {
    resumePopupContent.classList.remove('fade-in');
    setTimeout(() => {
      resumePopup.style.display = 'none';
    }, 500);
  });

  window.addEventListener('click', (event) => {
    if (event.target === resumePopup) {
      resumePopupContent.classList.remove('fade-in');
      setTimeout(() => {
        resumePopup.style.display = 'none';
      }, 500);
    }
  });