const allTabHeads = document.querySelectorAll('tab-head-single');
const allTabBody = document.querySelectorAll('tab-body-single');

let activeTab = 1;

const init = () =>{
    showActiveTabHead();
    showActiveTabBody();
}

const showActiveTabHead = () => {
    allTabHeads[activeTab - 1].classList.add('active-tab');
}

const showActiveTabBody = () => {
    hideAllTabBody();
    allTabBody[activeTab - 1].classList.add('show-tab');
}

const hideAllTabBody = () =>{
    allTabBody.forEach(singleTabBody => singleTabBody.classList.remove(show-tab));
}



//event listener 
window.addEventListener('DOMContentLoaded', ()=> init());