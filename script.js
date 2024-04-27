const tabs = document.querySelectorAll('.list-style.nav');
const contents = document.querySelectorAll('.container-wrapper');
const mains = document.querySelectorAll('.main');
const closeButtons = document.querySelectorAll('.control-button button');
const closeContactZalo = document.querySelector('.contact-zalo button');

tabs.forEach((tab, index) => {
    const content = contents[index];
    tab.onclick = function () {
        const activeTab = document.querySelector('.list-style.active');
        const activeContent = document.querySelector('.container-wrapper.active');
        if (activeTab) {
            activeTab.classList.remove('active');
        }
        if (activeContent) {
            activeContent.classList.remove('active');
        }
        this.classList.add('active');
        content.classList.add('active');
        console.log(index)


        document.querySelector('.container-wrapper-first').style.animation = 'slideRight 0.6s ease-in-out forwards';
        // setTimeout(() => {
        //         const widthItem = document.querySelector('.container-wrapper-first').offsetWidth;
        //         document.getElementById('scroll').scrollLeft += widthItem;
        //     }, 250);
    }
});

closeButtons.forEach(button => {
    button.onclick = function () {
        document.querySelector('.container-wrapper-first').style.animation = 'slideLeft 0.6s ease-in-out';

        // const widthItem = document.querySelector('.container-wrapper-first').offsetWidth;
        // document.getElementById('scroll').scrollLeft -= widthItem;
        // setTimeout(() => {
        // }, 250);
    }
})

document.getElementById('openContactZalo').onclick = function(){
    document.querySelector('.contact-zalo').classList.add('active');
}
closeContactZalo.onclick = function(){
    document.querySelector('.contact-zalo').classList.remove('active');
}
document.querySelector('.contact-zalo').onclick = function(){
    document.querySelector('.contact-zalo').classList.remove('active');
}