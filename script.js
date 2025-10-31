// Wait until the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {

  // get all offer boxes
  const offerBoxes = document.querySelectorAll('.offer-box');

  // loop through each offer box
  offerBoxes.forEach(currentBox => {

    // when any box is clicked
    currentBox.addEventListener('click', event => {
      event.stopPropagation(); // prevent outside click trigger

      // reset all boxes, then activate only the clicked one
      offerBoxes.forEach(box => {
        const optionPanel = box.querySelector('.options');
        const radioBtn = box.querySelector("input[type='radio']");

        // check / uncheck radio + toggle classes
        if (box === currentBox) {
          box.classList.add('active');
          radioBtn.checked = true;
          optionPanel?.classList.remove('hidden');
        } else {
          box.classList.remove('active');
          radioBtn.checked = false;
          optionPanel?.classList.add('hidden');
        }
      });
    });
  });

  // if user clicks anywhere else on the document → close all
  document.addEventListener('click', () => {
    offerBoxes.forEach(box => {
      box.classList.remove('active');
      box.querySelector('.options')?.classList.add('hidden');
      box.querySelector("input[type='radio']").checked = false;
    });
  });
});
