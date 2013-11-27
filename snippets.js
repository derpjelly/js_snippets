    //Parallax Scrolling
  	$('section[data-type="bgimg"]').each(function(){
        var $bgimg = $(this);
        $(window).scroll(function() {
            var y = -($(window).scrollTop()/$bgimg.data('scrollspd'));
            var coords = '50%'+ y + 'px'; 
            $bgimg.addClass("scrolling");
            $bgimg.css({ backgroundPosition: coords });
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
