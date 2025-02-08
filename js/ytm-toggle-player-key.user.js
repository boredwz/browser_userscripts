// ==UserScript==
// @name         YTM - Toggle player with [P]
// @version      1.0.3
// @author       boredwz
// @namespace    boredwz
// @homepageURL  https://github.com/boredwz/browser_userscripts
// @downloadURL  https://raw.githubusercontent.com/boredwz/browser_userscripts/master/js/ytm-toggle-player-key.user.js
// @match        https://music.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=music.youtube.com
// @description  Open / close Youtube Music player page with [P] key.
// ==/UserScript==

(function () {
    'use strict';

    const key = 'KeyP';
    const buttonPath = 'tp-yt-paper-icon-button.toggle-player-page-button';

    function currentTime() {return new Date().toLocaleTimeString('eo', { hour12: false });}

    function main(text, event) {
        if (event.code !== key) {return;}
        document.querySelector(buttonPath).click();
        console.log(`[${currentTime()}]\n(${text}: ${key}) Player page toggled.`);
    }
    
    document.addEventListener('keydown', function (e) {main('Key pressed', e)});
})();
