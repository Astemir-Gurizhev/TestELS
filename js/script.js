/* Slider */

new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  /*centeredSlides: true,*/
  spaceBetween: 30,
  slidesPerView: "auto",
  watchOverflow: true,
  initialSlide: 0,
  /*loop: true,*/
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnIteration: false,
  },
});

/* FORM */

const form = document.getElementsByTagName("form");
const btn = document.getElementById("btn");
const input1 = document.getElementById("inputid1");
const input2 = document.getElementById("inputid2");
const input3 = document.getElementById("inputid3");
const checkBox = document.querySelector("input[type=checkbox]");
const checkBoxLabel = document.querySelector(".send-right__form__label-checkbox");
const error3 = document.getElementById("error3");

input1.addEventListener("input", function (event) {
  if (loginTest(input1)) {
    this.style.borderBottom = "1px solid #2f3441";
    document.getElementById("error1").innerHTML = "<p></P>";
  } else {
    document.getElementById("error1").innerHTML =
      "<p>Необходимо заполнить поле</P>";
    this.style.borderBottom = "1px solid #DF2030";
    document.getElementById("error1").style.marginTop = "8px";
    event.preventDefault();
  }
});

input2.addEventListener("input", function (event) {
  if (loginTest(input2)) {
    this.style.borderBottom = "1px solid #2f3441";
    document.getElementById("error2").innerHTML = "<p></P>";
  } else {
    this.style.borderBottom = "1px solid #DF2030";
    document.getElementById("error2").innerHTML =
      "<p>Необходимо заполнить поле</P>";
    document.getElementById("error2").style.marginTop = "8px";
    event.preventDefault();
  }
});

input3.addEventListener("input", function (event) {
  if (phoneTest(input3)) {
    this.style.borderBottom = "1px solid #2f3441";
    document.getElementById("error3").innerHTML = "<p></P>";
  } else {
    this.style.borderBottom = "1px solid #DF2030";
    document.getElementById("error3").innerHTML =
      "<p>Необходимо заполнить поле</P>";
    document.getElementById("error3").style.marginTop = "8px";
    event.preventDefault();
  }
});

function phoneTest(input) {
  return /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(input.value);
}

function loginTest(input) {
  return /^[a-zA-zа-яА-я<<>>""]{1}[a-zA-Zа-яА-Я<<>>""]{3,20}$/.test(input.value);
}


btn.addEventListener("click", function (event) {
  if ((checkBox.checked) && phoneTest(input3) && loginTest(input2) && loginTest(input1) && 
  (!input1.value === '') && (!input2.value === '') && (!input3.value === '')) {}
  
  if (!checkBox.checked) {
    checkBoxLabel.style.color = "#df2030";
    event.preventDefault()
  }
  if (input1.value === "") {
    document.getElementById("error1").innerHTML =
    "<p>Необходимо заполнить поле</P>";
    input1.style.borderBottom = "1px solid #DF2030";
    document.getElementById("error1").style.marginTop = "8px";
    event.preventDefault()
  }
  if (input2.value === "") {
    document.getElementById("error2").innerHTML =
    "<p>Необходимо заполнить поле</P>";
    input2.style.borderBottom = "1px solid #DF2030";
    document.getElementById("error2").style.marginTop = "8px";
    event.preventDefault()
  }
  if (input3.value === "") {
    document.getElementById("error3").innerHTML =
    "<p>Необходимо заполнить поле</P>";
    input3.style.borderBottom = "1px solid #DF2030";
    document.getElementById("error3").style.marginTop = "8px";
    event.preventDefault()
  }
  if (!loginTest(input1)) {
    event.preventDefault()
  }
  if (!loginTest(input2)) {
    event.preventDefault()
  }
  if (!phoneTest(input3)) {
    event.preventDefault()
  }
});
