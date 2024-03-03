function lockedProfile() {
    let showMoreButtonsRef = Array.from(document.getElementsByTagName("button"));
    showMoreButtonsRef.forEach(btn => btn.addEventListener("click", onClickMoreHide));

    let radioButtonsRef = Array.from(document.querySelectorAll("[value=lock], [value=unlock]"));
    radioButtonsRef.forEach(btn => btn.addEventListener("click", onClickRadio));

    function onClickRadio(event) {

        let btnCheck = event.target;

        if (btnCheck.value === "lock") {
            btnCheck.parentElement.querySelectorAll("[type=radio]")[0].setAttribute('checked', true);
            btnCheck.parentElement.querySelectorAll("[type=radio]")[1].removeAttribute('checked');
        }
        else {
            btnCheck.parentElement.querySelectorAll("[type=radio]")[0].removeAttribute('checked');
            btnCheck.parentElement.querySelectorAll("[type=radio]")[1].setAttribute('checked', true);
        }
    }

    function onClickMoreHide(event) {
        // получавам div-а, който трябва да се покаже/скрие:
        let divShowHide = event.target.parentElement.getElementsByTagName("div")[0];

        let lockBtnCheck = event.target.parentElement.querySelector("[value=lock]").checked;
        let unlockBtnCheck = event.target.parentElement.querySelector("[value=unlock]").checked;

        if (lockBtnCheck) return;
        else if (unlockBtnCheck && event.target.textContent === "Show more") {
            divShowHide.style.display = "block";
            event.target.textContent = "Hide it";
        }
        else if (unlockBtnCheck && event.target.textContent === "Hide it") {
            divShowHide.style.display = "none";
            event.target.textContent = "Show more";
         }
    }
}

// Предложено решение от ChatGPT, в което така и не включи
// манипулиране на радиобутоните!!!

// // Изберете всички бутони "Show more" и добавете събитие click на тях.
//   const showMoreButtons = document.querySelectorAll('.profile button');
//   showMoreButtons.forEach(button => {
//     button.addEventListener('click', function () {
//       const profile = this.parentElement;
//       const hiddenFields = profile.querySelector('.profile div');
//       const lockRadio = profile.querySelector('input[value="lock"]');
//       const unlockRadio = profile.querySelector('input[value="unlock"]');

//       // Проверете дали профилът е заключен или не.
//       if (unlockRadio.checked) {
//         // Ако профилът е отключен, покажете скритите полета.
//         hiddenFields.style.display = 'block';
//         this.textContent = 'Hide it';
//       } else if (lockRadio.checked) {
//         // Ако профилът е заключен, не правете нищо.
//         return;
//       }
//     });
//   });
