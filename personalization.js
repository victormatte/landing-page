let headerm = document.querySelector('header');
let container = document.getElementById('content');
let  headermenu = document.getElementById('navi');
let body = document.getElementById('bdy');
var sidebar = false;



function tglsidebar(){
    sidebar = !sidebar;
    if(sidebar){
        headermenu.style.marginLeft = '-50vw';
        headermenu.style.animationName ='sidebarbg';
        container.style.filter = 'blur(2px)';
        body.style.overflow = 'hidden';
        /*window.addEventListener("scroll" ,noscroll);
        function noscroll(){
        window.scrollTo(0,0);
        }*/
        
    }
    else{
        headermenu.style.marginLeft = '-168vw';
        headermenu.style.animationName ='';
        /*passando uma string vazia para a animação 
        sempre funcionar*/
        container.style.filter = '';
        body.style.overflow = '';
    }

}

window.addEventListener('resize', function(event) {
    if(window.innerWidth > 768 && sidebar){
        tglsidebar();
    }
});

