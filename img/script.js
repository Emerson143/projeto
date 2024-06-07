
const tabmenu = document.querySelectorAll('.js-tabmenu li');

const tabContent = document.querySelectorAll('.js-tabcont section');


function activeTab (index){
    tabContent.forEach((section) => {
        section.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
}

tabmenu.forEach((intemMenu, index) => {
    intemMenu.addEventListener('click', () => {
        activeTab(index);
    })
});




function initAccordion(){
const accordionList = document.querySelectorAll('.js-accordion dt');
const activeClass = 'ativo';

if(accordionList.length){accordionList[0].classList.add(activeClass);
accordionList[0].nextElementSibling.classList.add(activeClass);



function activeAccordion(event){
    this.classList.toggle(activeClass)
    this.nextElementSibling.classList.toggle(activeClass)
}

accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion)
});
}
}

