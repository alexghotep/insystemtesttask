import SimpleBar from "simplebar";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

document.addEventListener("DOMContentLoaded", (event) => {
    console.log('app.js (main) loaded');
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("h1", {xPercent: -100, duration: 1})
    gsap.to("#gsaptext2", {delay: 0.5, opacity: 1, duration: 1})
    gsap.from("#gsaptext3", {delay: 0.5, opacity: 0, duration: 0.5, y: 20})
    gsap.from("#gsaptext4", {delay: 1, opacity: 0, duration: 0.5, y: 20})
    gsap.from("#gsaptext5", {delay: 1.5, opacity: 0, duration: 0.5, y: 20})
    gsap.from("#gsaptext6", {delay: 2, opacity: 0, duration: 0.5})

    const tl1 = gsap.timeline({
        scrollTrigger: {trigger: '.sc-steps__step_1', scrub: true, start: 'top bottom', end: 'top center',}
    });
    const tl2 = gsap.timeline({
        scrollTrigger: {trigger: '.sc-steps__step_2', scrub: true, start: 'top bottom', end: 'top center',}
    });
    const tl3 = gsap.timeline({
        scrollTrigger: {trigger: '.sc-steps__step_3', scrub: true, start: 'top bottom', end: 'top center',}
    });
    const tl4 = gsap.timeline({
        scrollTrigger: {trigger: '.sc-steps__step_4', scrub: true, start: 'top bottom', end: 'top center',}
    });
    const tl5 = gsap.timeline({
        scrollTrigger: {trigger: '.sc-steps__step_5', scrub: true, start: 'top bottom', end: 'top center',}
    });

    tl1.fromTo(".sc-steps__step_1", {opacity: 0, xPercent: -100}, {opacity: 1, xPercent: 0})
    tl2.fromTo(".sc-steps__step_2", {opacity: 0, xPercent: -100}, {opacity: 1, xPercent: 0})
    tl3.fromTo(".sc-steps__step_3", {opacity: 0, xPercent: 0}, {opacity: 1, xPercent: 0})
    tl4.fromTo(".sc-steps__step_4", {opacity: 0, xPercent: 100}, {opacity: 1, xPercent: 0})
    tl5.fromTo(".sc-steps__step_5", {opacity: 0, xPercent: 100}, {opacity: 1, xPercent: 0})
    ;

    const
        navIcon1 = document.querySelector('#mobileMenuTrigger'),
        mobileMenu = document.querySelector('.mobile-menu'),
        body = document.body
    ;

    function mobileMenuOpen() {
        navIcon1.classList.add("mm-opened");
        mobileMenu.classList.add("menu-opened");
        body.classList.add("scroll-off");
    }

    function mobileMenuClose() {
        navIcon1.classList.remove("mm-opened");
        mobileMenu.classList.remove("menu-opened");
        body.classList.remove("scroll-off");
    }

    navIcon1.addEventListener('click', function () {
        if (this.classList.contains("mm-opened")) {
            mobileMenuClose();
        } else {
            mobileMenuOpen();
        }
    })

    let rangeValue = document.querySelector('#rangeSlider');
    let rangeText = document.querySelector('#rangediv');

    rangeValue.addEventListener('input', function () {
        rangeText.innerHTML = rangeValue.value;
    })

    let fakeBtn = document.querySelector('#chooseBtn'),
        hiddenBtn = document.querySelector('#hiddenBtn'),
        attachText = document.querySelector('#attachText')
    ;
    fakeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        hiddenBtn.click();
    })
    hiddenBtn.addEventListener('change', function (e) {
        let fileName = e.target.files[0].name;
        attachText.innerHTML = fileName;
    })

    function selectClose() {
        fakeSelectBox.classList.remove("si-opened");
    }

    function selectOpen() {
        fakeSelectBox.classList.add("si-opened");
    }

    let fakeSelect = document.querySelector('#fakeSelect'),
        fakeSelectBox = document.querySelector('#fakeSelectBox')
    ;
    fakeSelect.addEventListener('click', function () {
        if (fakeSelectBox.classList.contains("si-opened")) {
            selectClose();
        } else {
            selectOpen();
        }
    })

    const selectOptions = document.getElementsByClassName('select-imposter-option'),
        selectTitle = document.getElementById('selectTitle'),
        selectReal = document.getElementById('inputNameSelect')
    ;
    for (let i = 0, len = selectOptions.length; i < len; i++) {
        selectOptions[i].addEventListener('click', function () {
            // let itemRealAll = document.querySelector("#inputNameSelect option")
            // itemRealAll.removeAttribute('selected');
            for (let r = 0, len = selectOptions.length; r < len; r++) {
                selectOptions[r].classList.remove('sio-selected');
            }
            let selectedItemTitle = this.innerHTML;
            this.classList.add('sio-selected');
            selectTitle.innerHTML = selectedItemTitle;
            selectClose();
            let realIndex = this.getAttribute('data-option');
            // const itemReal = document.querySelector(`#inputNameSelect option[value="${realIndex}"]`);
            // itemReal.setAttribute("selected", 'selected');
            selectReal.value = realIndex;
            console.log('selected ' + document.getElementById('inputNameSelect').value);
        });
    }


});
