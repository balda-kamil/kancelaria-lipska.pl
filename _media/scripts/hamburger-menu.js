const menuBtn = document.getElementById('menuToggle');


menuBtn.addEventListener('click', function(){
      if ($(window).width() <= 991){
        const ulElements = document.querySelector('#menuToggle ul');

        if(!(ulElements.classList.contains('open'))){
          $("#menuToggle ul").fadeIn("slow")
          ulElements.classList.add('open')
          ulElements.classList.remove('d-none')
          
        } else {
          $("#menuToggle ul").fadeOut("slow")
          ulElements.classList.remove('open')
          ulElements.classList.add('d-none')
         
        }
      }

      const smMenu = document.querySelector('#sm-menu');
      const inputMenu = document.querySelector('input[type="checkbox"]')

      if(smMenu.classList.contains('open')){
        inputMenu.checked = true;
      } else {
        inputMenu.checked = false;
      }
    })
  

    