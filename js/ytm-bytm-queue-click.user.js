// ==UserScript==
// @name         YTM - BetterYTM auto-scroll queue
// @version      1.0.2
// @author       boredwz
// @namespace    boredwz
// @homepageURL  https://github.com/boredwz/browser_userscripts
// @downloadURL  https://raw.githubusercontent.com/boredwz/browser_userscripts/master/js/ytm-bytm-queue-click.user.js
// @match        https://music.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=music.youtube.com
// @description  Wait and attempt to click the BetterYTM "Scroll to the currently playing song" button on YouTube Music.
// ==/UserScript==

(function () {
    'use strict';
    
    const buttonPath = '.bytm-generic-btn.bytm-ripple.normal.ytmusic-player-bar.bytm-above-queue-btn';

    function currentTime() {return new Date().toLocaleTimeString('eo', { hour12: false });}

    function main(text, path) {
        let button = document.querySelector(path);
        let message = button ? 'Queue button clicked' : 'Queue button not found';
        if (button) {button.click();}
        console.log(`[${currentTime()}]\n(${text}) ${message}.`);
    }

    window.addEventListener('load', function () {setTimeout(function () {main('Page loaded', buttonPath)}, 8000);});
})();
  