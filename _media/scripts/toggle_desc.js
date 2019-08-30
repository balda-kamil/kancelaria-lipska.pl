const moreTxt = document.querySelector('.morebtn')
const expandedCnt = $('.hidden-content');

moreTxt.addEventListener('click', function(){

  expandedCnt.slideToggle(500).toggleClass( 'db' )

      if(expandedCnt.hasClass('db')){
        this.remove();
      }
  })
