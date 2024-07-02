(function(){
    const listElements = document.querySelectorAll('.navbar__item--show');
    const list = document.querySelector('.navbar__links');
    const navbar = document.querySelector('.navbar__hamburger');
    
    const addClick = ()=>{
        listElements.forEach(element =>{
            element.addEventListener('click', ()=>{

                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('navbar__item--active');

                /*console.log(subMenu.clientHeight);*/

                if(subMenu.clientHeight === 0){
                    height = subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`;

            });

        });
    }

    const deleteStyleHeight = ()=>{
        listElements.forEach(element=>{
            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('navbar__item--active');
            }
        });
    }

    /*addClick();*/

    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 678){
            deleteStyleHeight();
            if(list.classList.contains('navbar__links--show'))
                list.classList.remove('navbar__links--show');

        }else{
            addClick();
        }
    });

    if(window.innerWidth <= 678){
        addClick();
    }

    navbar.addEventListener('click', ()=> list.classList.toggle('navbar__links--show'));

})();