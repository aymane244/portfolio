$(document).ready(function(){
    //my skills carroussel
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
    //navbar scroll change color
    var scroll_start = 0;
    var startchange = $('.div-text');
    var offset = startchange.offset();
    $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $('.navbar-fixed-top').css('background-color', '#343A40');
        }else{
            $('.navbar-fixed-top').css('background-color', 'transparent');
       }
   });
   // sending data without refreshing
    $('#envoyer').click(function (e) {
        e.preventDefault();
        if(!afficherErreur()){
            var nom = $('#inputText4').val();
            var email = $('#inputEmail4').val();
            var message = $('#exampleFormControlTextarea1').val();
            var envoyer =$('#envoyer').val();
            $.ajax({
                type: "POST",
                url: "main.php",
                data: { "nom": nom, "email": email, "message": message, "envoyer":envoyer},
                success: function (data) {
                    $('#result').html(data);
                }
            });
            $("form")[0].reset();
            fermer();
        }
    });
    //close the popup
    $("#btn-form").click(fermer);
    function fermer(){
        var close = $(".div-form");
        $(".div-first").fadeIn();
        if(close.mouseover()){
            $("#btn-form").click(function(){
                $(".div-first").fadeOut();
            });
        }
    }
    //show error messages when the input value is empty
    function afficherErreur(){
        var nom = $('#inputText4').val();
        var email = $('#inputEmail4').val();
        var message = $('#exampleFormControlTextarea1').val();
        var vide = false;
        var regex_nom = /[a-zA-Zء-ي]{3,25}$/;
        var regex_email = /[a-zA-Z0-9.%_-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,10}$/;
        if(nom === ""){
            $("#errorname_2").hide();
            $("#errorname").show();
            $("#errorname").text("*Please enter your full name");
            vide =true;
        }else if(!regex_nom.test(nom)){
            $("#errorname").hide();
            $("#errorname_2").show();
            $("#errorname_2").text("*Please enter a valid name");
            vide = true;
        }else{
            $("#errorname_2").hide();
            $("#errorname").hide();
        }if(email === ""){
            $("#erroremail").show();
            $("#erroremail_2").hide();
            $("#erroremail").text("*Please enter your email");
            vide =true; 
        }else if(!regex_email.test(email)){
            $("#erroremail_2").show();
            $("#erroremail").hide();
            $("#erroremail_2").text("*Please enter a valid email");
            vide = true;
        }else{
            $("#erroremail").hide();
            $("#erroremail_2").hide();
        }
        if(message === ""){
            $("#errormessage").show();
            $("#errormessage").text("*Please enter your message");
            vide =true;
        }else{
            $("#errormessage").hide();
        }
        return vide;
    }
});