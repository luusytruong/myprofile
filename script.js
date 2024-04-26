const tabs = document.querySelectorAll('.list-style.nav');
const contents = document.querySelectorAll('.container-wrapper');
const mains = document.querySelectorAll('.main');

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

        setTimeout(() => {
            const widthItem = document.querySelector('.container-wrapper-first').offsetWidth;
            document.getElementById('scroll').scrollLeft += widthItem;
        }, 200);
    }
});

const closeButtons = document.querySelectorAll('.control-button button');

closeButtons.forEach(button => {
    button.onclick = function(){
        const widthItem = document.querySelector('.container-wrapper-first').offsetWidth;
        document.getElementById('scroll').scrollLeft -= widthItem;
        setTimeout(() => {
        }, 100);
    }
})