//navbar links
const navbar = document.querySelector(".navbar");
      a=navbar.querySelectorAll("a");

      a.forEach(function (element) {
          element.addEventListener("click",function(){
              for(let i=0; i<a.length; i++){
                  a[i].classList.remove("current");
              }
              this.classList.add("current")
              document.querySelector(".navbar").classList.toggle("show");
          })
      });

//hamburger
      const hamburger = document.querySelector(".hamburger");

      hamburger.addEventListener("click",function(){
          document.querySelector(".navbar").classList.toggle("show");
      })

//submit button
      const button   = document.querySelector('.submit-button'),
      stateMsg = document.querySelector('.pre-state-msg');

const updateButtonMsg = function() {
  button.classList.add('state-1', 'animated');
  
  setTimeout(finalButtonMsg, 2000);
};

const finalButtonMsg = function() {
  button.classList.add('state-2');
  
  setTimeout(setInitialButtonState, 2000);
};

const setInitialButtonState = function() {
  button.classList.remove('state-1', 'state-2', 'animated');
};

button.addEventListener('click', updateButtonMsg);



//lightbox
const closeLightbox=document.querySelector(".close-lightbox");
const lightbox = document.querySelector(".lightbox")

closeLightbox.addEventListener("click",function(){
  lightbox.classList.remove("show");
  lightbox.classList.add("hide");
})

const gallery = document.querySelector(".portfolio-gallery");
const galleryItem = gallery.querySelectorAll(".item");

galleryItem.forEach(function(element){
  element.querySelector(".fa-plus").addEventListener("click",function(){
    lightbox.classList.remove("hide");
    lightbox.classList.add("show");
  })
})