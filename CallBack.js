// Call Back Function Working Method: 


 function clConfirmationAlert(options, callback){
    console.log("confirmationAlert options", options)
      $('#confirmationModal').modal('show');
      if(options.title) {
        $('#confirmationModal .title').text(options.title)
      } else {
        $('#confirmationModal .title').text("Confirmation")
      }
      
      if(options.confirmation_type == 'Simple') {
        $('#confirmationModal .confirmation_input').hide();
      } else if (options.confirmation_type == 'Input') {
        $('#confirmationModal .confirmation_input').show();
      }

      if(options.confirmation_question) {
        $('#confirmationModal .question').text(options.confirmation_question)
      } else {
        $('#confirmationModal .question').text("Are you sure?")
      }

      if(options.button_primary) {
        $('#confirmationModal .btn-primary').text(options.button_primary)
      } else {
        $('#confirmationModal .btn-primary').text('Yes')
      }

      if(options.button_primary) {
        $('#confirmationModal .btn-white').text(options.button_secondary)
      } else {
        $('#confirmationModal .btn-white').text('No')
      }

      $('#btnYes').off();
      $('#btnNo').off();
      $('#btnYes').prop('disabled', true)
      $('#confirmation_input').val("") 

      $('#confirmation_input').keyup(function(){
        var enable = options.button_enable($(this).val());

        console.log(enable)
        if(enable){
          $('#btnYes').prop('disabled', false)   
        } else {
          $('#btnYes').prop('disabled', true)   
        }
      })

      $('#btnYes').click(function(){        
        callback(true, $('#confirmation_input').val());   
        $('#confirmation_input').val("") 
        $('#confirmationModal').modal('hide');
      })
      
      $('#btnNo').click(function(){
        callback(false, $('#confirmation_input').val());
        $('#confirmation_input').val("")     
        $('#confirmationModal').modal('hide');
      })
  }



$('.btn_delete_event').on('click', function(e){
        // e.preventDefault();
        var evt_id = $(this).data("id");
        var evt_name = $(this).data("name");
        var evt_state = $(this).data("state");
        var $that = $(this);
        var confirmationOption = { 
            "title" : "Event Delete Confirmation", 
            "confirmation_type" : "Input", 
            "confirmation_question" : "Enter the event name `"+evt_name+"` in the text box to delete", 
            "button_primary" : "Confirm", 
            "button_secondary": "Cancel",
            "button_enable" : function(inputText){
                if(inputText == evt_name) {
                    return true 
                } 
                return false
            }

        }
        clConfirmationAlert(confirmationOption, function(confirmation, inputValue){
            var $tr = $that.closest('tr');
            if(confirmation && evt_name == inputValue){
                $.ajax({
                    data: {'evt_id':evt_id,'csrfmiddlewaretoken':Cookies.get('csrftoken')},
                    type: 'POST',
                    url: '{% url "setup:delete-event" ac_seq %}',
                    success:function(res){
                        console.log('Deleted...')
                        $tr.fadeOut(500);
                        setTimeout(function(){
                            $tr.remove()
                        }, 1000);
                    },
                    error: function(err) {
                        //clalert('error', 'There is an error. Please refresh the page.');
                    }
                });
            }
        })

        //  
        // $tr.fin
        // if(confirm(text) == true) {
        //  $.ajax({
        //      data: {'evt_id':evt_id,'csrfmiddlewaretoken':Cookies.get('csrftoken')},
        //      type: 'POST',
        //      url: '{% url "setup:delete-event" ac_seq %}',
        //      success:function(res){
        //          console.log('Deleted...')
        //          $tr.fadeOut(500);
        //             setTimeout(function(){
        //                     $tr.remove()
        //          }, 1000);
        //      },
        //      error: function(err) {
        //          //clalert('error', 'There is an error. Please refresh the page.');
        //      }
        //  });

            

        // } else {
        //  console.log("Delete Cancelled...")
        // }
    })
