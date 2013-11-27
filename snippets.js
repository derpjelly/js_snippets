    //Parallax Scrolling
  	$('section[data-type="background"]').each(function(){
        var $bgobj = $(this);
        $(window).scroll(function() {

            var yPos = -($(window).scrollTop() / $bgobj.data('speed')); 
             $bgobj.addClass("yay");
            // Put together our final background position
            var coords = '50%'+ yPos + 'px';
 
            $bgobj.css({ backgroundPosition: coords });

        }); 
    });


    //Ajax form submission
    $("#tour_form").submit(function(e) { 
        e.preventDefault();
        var $form = $(this);
        if(! $form.valid()) return false;
        //Form Processing
        var dataString = $("#tour_form").serialize();
        $.ajax({
            type: "POST",
            url: templateDir + "/php/yard_form.php",
            data: dataString,
            success: function() {
                $("#messageBox").hide();
                $('#tour_form').html("<div id='message'></div>");
                $('#message').html("<h3>Thank you! Your form has been submitted.</h3>")
                .append("<p>We will get back to you shortly to confirm your appointment.</p>")
                .hide()
                .fadeIn(1500, function() {
                    $('#message');
                });
            }
        });
        return false;
    });
