let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', () =>{
        listElement.classList.toggle('arrow');
    })
});