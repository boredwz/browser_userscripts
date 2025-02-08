// ==UserScript==
// @name         HDrezka theme switcher
// @version      1.1.0
// @author       boredwz
// @namespace    boredwz
// @homepageURL  https://github.com/boredwz/browser_userscripts
// @downloadURL  https://raw.githubusercontent.com/boredwz/browser_userscripts/master/js/hdrezka-theme.user.js
// @include      /^https?:\/\/(www\.)?(hd)?rezka\.(ag|me)\/.*$/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=rezka.ag
// @description  Checks the system theme and toggles theme button on the HDRezka website.
// ==/UserScript==

(function() {
    'use strict';

    function currentTime() {return new Date().toLocaleTimeString('eo', { hour12: false });}

    function main(text) { 
        let isPageDark = document.querySelector('body').classList.contains('b-theme__template__night');
        let isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        let theme = isSystemDark ? 'Dark' : 'Light';
        if (isPageDark !== isSystemDark) {document.querySelector('.b-theme__switcher').click();theme = 'Switched to ' + theme}
        console.log(`[${currentTime()}]\n(${text}) ${theme}.`);
    }

    window.addEventListener('load', function() {main('Page loaded')});
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function() {main('System Theme changed')});
})();