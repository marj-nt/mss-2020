// Wait for the DOM to be ready

$(function() {

    //Custom funct
    jQuery.validator.addMethod("dashPhone", function(value, element) {
        // allow any non-whitespace characters as the host part
        return this.optional( element ) || /^[2-9]\d{2}-\d{3}-\d{4}$/.test( value );
      }, 'Please enter a valid phone.');
    
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='contact']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        firstname: {
            required: true,
            minlength: 3,
        },
        email: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        },
        phone: {
          required: true,
          dashPhone: true,
        },
        message: {
          required: true,
          minlength: 1,
        }
      },
      // Specify validation error messages
      messages: {
        firstname: "Please enter your name",
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long"
        },
        email: "Please enter a valid email address (Ex: myemail@gmail.com)",
        phone: "Please enter in the format ***-***-****",
        message: "Please enter a message",
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
    //   submitHandler: function(form) {
    //     $(form).submit(function(e){
    //       e.preventDefault();
    //     });
        
    //       $("#modal-outer").fadeIn();
    //       $("#modal-inner").fadeIn();
    //       $('.form-bottom button').prop('disabled', true);
    //       setTimeout(function(){ 
    //           $("#modal-outer").fadeOut();
    //           $("#modal-inner").fadeOut();
    //           $('input').val('');
    //           $('textarea').val('');
    //       }, 3000);
    //       $('.form-bottom button').prop('disabled', false);
    //   }
    // });
  });