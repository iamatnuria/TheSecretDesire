$(document).ready(function () {
  /*==================== MENU SHOW Y HIDDEN ====================*/
    const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-icon"),
    navClose = document.getElementById("nav-close");

  /*===== MENU SHOW =====*/
  /* Validate if constant exists */
  if (navToggle) {
    $("#nav-icon").click(function () {
      $("#nav-menu").toggleClass("show-menu");
    });
  }

  // /*===== MENU HIDDEN =====*/
  // /* Validate if constant exists */
  // if(navToggle){
  //     navToggle.addEventListener('click', () =>{

  //     })
  // }

  $("#nav-icon").click(function () {
    $(this).toggleClass("open");
  });

  /*===== fragrance REVEAL =====*/
  const srtop = ScrollReveal({
    origin: "top",
    distance: "0px",
    duration: 2000,
  });

  srtop.reveal(`.fragrance__container__top`, {
    interval: 1500,
    viewFactor: 0.5,
  });

  srtop.reveal(`.fragrance__container__middle`, {
    interval: 1500,
    viewFactor: 0.7,
  });

  srtop.reveal(`.fragrance__container__bottom`, {
    interval: 1500,
    viewFactor: 0.9,
  });

  srtop.reveal(`.note__item1, .note__item2, .note__item3`, {
    interval: 1500,
    viewFactor: 0.7,
  });

  // GALLERY LOGIC

  const next_btn = document.querySelector("#button-next");
  const prev_btn = document.querySelector("#button-prev");
  const slider = document.querySelector(".slider");

  let first_slide;
  let last_slide;
  let projects = [
    {
      image: "img/_Z3A8097-3.png",
    },
    {
      image: "img/_Z3A8347-2.png",
    },
    {
      image: "img/_Z3A8704-2.png",
    },
  ];

  projects.forEach(({ image }, i) => {
    const slide = document.createElement("img");
    slide.classList.add("slider__slide");
    slide.classList.add("images");
    slide.src = image;
    slide.alt = "Imagen-galeria";
    if (i == 0) {
      first_slide = slide;
      slide.classList.add("active");
    }

    if (i + 1 == projects.length) {
      last_slide = slide;
    }

    slider.appendChild(slide);
    
  });

  next_btn.addEventListener("click", () => {
    const active_slide = document.querySelector(".slider__slide.active");
    let sibling = active_slide.nextElementSibling;
    if (sibling == null) {
      sibling = first_slide;
    }

    if (sibling.classList.contains("slider__slide")) {
      active_slide.classList.remove("active");
      sibling.classList.add("active");
    }

  });

  prev_btn.addEventListener("click", () => {
    const active_slide = document.querySelector(".slider__slide.active");
    let sibling = active_slide.previousElementSibling;
    if (sibling == null || !sibling.classList.contains("slider__slide")) {
      sibling = last_slide;
      console.log(sibling);
    }

    if (sibling.classList.contains("slider__slide")) {
      active_slide.classList.remove("active");
      sibling.classList.add("active");
    }
  });

  // VIDEO LOGIC

  const btn = document.querySelector('.btn');
  const videoContainer = document.querySelector('.video__container');
  const close = document.querySelector('.close');
  const vid = document.querySelector('.video');

 

  $('.sight').click(function(e){
    $(".video").attr("src","videos/converted/vista.mp4");

  });
  $('.hearing').click(function(e){
    $(".video").attr("src","videos/converted/oido.mp4");

  });
  $('.smell').click(function(e){
    $(".video").attr("src","videos/converted/olfato.mp4");

  });
  $('.taste').click(function(e){
    $(".video").attr("src","videos/converted/gusto.mp4");

  });
  $('.touch').click(function(e){
    $(".video").attr("src","videos/converted/tacto.mp4");

  });

  $('.btn').click(function(e){
    videoContainer.classList.add('show');
    vid.autoplay = true;
    vid.load();
  });

  $('.close').click(function(e){
    videoContainer.classList.remove('show');
    vid.pause();
  });
});
