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