// window.addEventListener("load", () => {
//   const loader = document.querySelector(".loader");

//   loader.classList.add("loader--hiden");

//   loader.addEventListener("transitioned", () => {
//     document.body.removeChild("loader");
//   });
// });

// window.onload = function () {
//     let loader = document.getElementById('preloader');
//     loader.style.display = 'none'
// }

function getRefs() {
    const refs = {
      spinner: document.querySelector('.spiner'),
    };
    return refs;
  }
  
  export function addSpinner() {
    const refs = getRefs();
    refs.spinner.classList.add('spiner--is-active');
  }
  export function removeSpinner() {
    const refs = getRefs();
    setTimeout(function () {
      refs.spinner.classList.remove('spiner--is-active');
    }, 500);
  }