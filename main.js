$( function(){
    let $sophia = $('#home .brand');
    let $mobileNav = $('#mobile');
    let $nav = $('#desktop');


    $(window).on('scroll', () =>{
        let pos = $(window).scrollTop();
        $mobileNav.hide();
        if( pos > 80 ){
            $nav.addClass('nav-fixed');
        } else {
            $nav.removeClass('nav-fixed');
        }
    })
    $sophia.on('click', () => {
        $mobileNav.toggle();
        return false;
    })
});