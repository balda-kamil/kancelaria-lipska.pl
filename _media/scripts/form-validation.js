$(document).ready(function(){
  $('#submit-btn').click(function(){
    $('#contact-form').validate({
      rules: {
        name:{
          required: true
        },
        surname: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        message: {
          required: true
        },
      },

      submitHandler: function(){ 
        let subBtn = $('#submit-btn');
        subBtn.val('WYSYŁANIE');
        subBtn.attr('disabled', true)
        subBtn.addClass('disabled')
        $.ajax({
          type: 'POST',
          url: 'form-submit.php',
          data: $('#contact-form').serialize(),
          success: function(){
            subBtn.val('WIADOMOŚĆ ZOSTAŁA WYSŁANA!').addClass('submit-success')
            subBtn.closest('form').find("input[type=text], textarea").val("")
          },
          error: function(){
            subBtn.val('NIE UDAŁO SIĘ WYSŁAĆ WIADOMOŚCI').addClass('submit-failure')
          }
        })
      }
    })
  })
})