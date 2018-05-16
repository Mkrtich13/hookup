jQuery(document).ready(function () {

    jQuery('.dispo').click(function() {
        jQuery('.dispo').removeClass('dispo_select');
        jQuery(this).addClass('dispo_select');
      });

    
    
    //Pop up panier
    
    // Get the modal
    var modal = document.getElementById('myModal');
    var modalNav = document.getElementById('navModal');

    // Get the button that opens the modal
    var btn = document.getElementById("panier");
    var btnNav = document.getElementById("panierNav");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    var span_panier = document.getElementsByClassName("close_panier")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    btnNav.onclick = function () {
        modal.style.display = "block";
    }


    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modalNav.style.display = "none";
    }

    span_panier.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


    $("#myCarousel").on("touchstart", function(event){
        var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function(event){
        var xMove = event.originalEvent.touches[0].pageX;
        if( Math.floor(xClick - xMove) > 5 ){
            $(this).carousel('next');
        }
        else if( Math.floor(xClick - xMove) < -5 ){
            $(this).carousel('prev');
        }
    });
    $(".carousel").on("touchend", function(){
            $(this).off("touchmove");
    });
    });


    jQuery(".sneakers_main img").on('click', function () {
        console.log(jQuery(this).parent('div').find('a'));
        jQuery(this).parent('div').find('a')[0].click();
    });

    jQuery("#taille_indispo").on('click', function() {
        jQuery("#item_codebarre").css("display","none");
    });



    var taille_indispo = document.getElementById('taille_indispo');
    var taille_mail = document.getElementById('taille_mail');

    taille_indispo.onclick = function() {
        taille_mail.style.display = "flex";
        taille_mail.style.alignItems = "center";
    }
    
    

});


