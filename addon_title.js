( () => {
let UI__slide_tittle = '.h1';
let UI__slide_btn = '.btn';
const all_showSlide = document.querySelectorAll('.view___slide_show');
let slider_counter = 0;
function setText___UISlide(UI_VAR, UI_VALUE, FIND_IMAGE, ALIGN){
    let protocol_ = window.location.protocol;
    let host = window.location.hostname;
    let site_url = `${protocol_}//${host}/`;
    let blank = '';
    [...all_showSlide].map((slide) => {
        if(slide.style.backgroundImage.slice(5, -2).replace(site_url, blank) === FIND_IMAGE){
            slide.parentElement.parentElement.querySelector('.view__slide_show_tittle').classList.remove('hidden');
            slide.parentElement.parentElement.querySelector(UI_VAR).innerText = UI_VALUE;
            if(UI_VAR === '.h1'){
            slide.parentElement.parentElement.classList.add(`counter__slide-${slider_counter}`);
            slide.parentElement.parentElement.querySelector('.view__slide_show_tittle').style.textAlign = ALIGN;
            slider_counter++;}
        }
    });
}
//SLIDE ONE
setText___UISlide(UI__slide_tittle, 'STORE YOUR CELLS IN OUR SHELLS.', 'assets/images/CR123Caddies-01.png', 'right');
setText___UISlide(UI__slide_btn, 'View Our Products', 'assets/images/CR123Caddies-01.png');
//SLIDE TWO
setText___UISlide(UI__slide_tittle, 'VIEW OUR NEW MAGNETIC CADDIES!', 'assets/images/Storacell_Background_MagneticW-01.png', 'right');
setText___UISlide(UI__slide_btn, 'View Our Products', 'assets/images/Storacell_Background_MagneticW-01.png');
//SLIDE THREE
setText___UISlide(UI__slide_tittle, 'BATTERY STORAGE MADE EASY.', 'assets/images/18650Caddies-01-01.png', 'left');
setText___UISlide(UI__slide_btn, 'View Our Products', 'assets/images/18650Caddies-01-01.png');
})();
