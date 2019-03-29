(function(){
    console.log('s')





    // Menu
    $('#menu-links li:nth-child(1)').click(function(){
        if (!$(this).hasClass("active")){
            location.href = "./";
        } 
    });
    $('#menu-links li:nth-child(2)').click(function(){
        if (!$(this).hasClass("active")){
            location.href = "./about.html";
        }
    });
    $('#menu-links li:nth-child(3)').click(function(){
        if (!$(this).hasClass("active")){
            location.href = "./events.html";
        }
    });
    $('#menu-links li:nth-child(4)').click(function(){
        if (!$(this).hasClass("active")){
            location.href = "./news.html";
        }
    });
    $('#menu-links li:nth-child(5)').click(function(){
        if (!$(this).hasClass("active")){
         
        }
    });
    $('#menu-links li:nth-child(6)').click(function(){
        if (!$(this).hasClass("active")){
            location.href = "./contact.html";
        }
    });
    $('#menu-links li:nth-child(7)').click(function(){
        if (!$(this).hasClass("active")){
            location.href = "./projects.html";
        }
    });

    // Footer
    $('#cell-icons img:nth-child(1)').click(function(){
        window.open("https://www.facebook.com/ITSA.tw","_blank");
    });
    $('#cell-icons img:nth-child(2)').click(function(){
        window.open("https://twitter.com/itsa_org_tw","_blank");
    });
    $('#cell-icons img:nth-child(3)').click(function(){
        window.open("https://www.youtube.com/channel/UCmcHod8xjhBjFIC6sukjtIg","_blank");
    });



})();
   

// Sidebar Follow Scroll
(function(){

    var $sidebar   = $(".sidebar"), 
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 5;

    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
            $sidebar.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            }, 300,'linear');
        } else {
            $sidebar.stop().animate({
                marginTop: 0
            });
        }
    });


})();