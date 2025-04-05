// ==UserScript==
// @name         EK.ua theme switcher
// @version      1.0.0
// @author       boredwz
// @namespace    boredwz
// @homepageURL  https://github.com/boredwz/browser_userscripts
// @downloadURL  https://raw.githubusercontent.com/boredwz/browser_userscripts/master/js/ek-theme.user.js
// @match        https://ek.ua/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ek.ua
// @description  Checks the system theme and toggles theme button on the E-katalog website.
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    function currentTime() {return new Date().toLocaleTimeString('eo', { hour12: false });}

    function main(text) {
        let switcher = document.querySelector('.dark-mode-switch');
        //let isPageDark = switcher.querySelector('span')?.textContent.includes('Світла версія');
        let isPageDark = switcher.getAttribute('jsource').includes('value_=N');
        let isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        let theme = isSystemDark ? 'Dark' : 'Light';
        if (isPageDark !== isSystemDark) {
            switcher.click();theme = 'Switched to ' + theme + `;\nThe page will be restarted.`
            console.log(`[${currentTime()}]\n(${text}) ${theme}.`);
        }
    }

    window.addEventListener('load', function() {main('Page loaded')});
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function() {main('System Theme changed')});
})();
  