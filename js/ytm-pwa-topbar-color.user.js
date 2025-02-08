// ==UserScript==
// @name         YTM - Change PWA topbar color
// @version      1.1.0
// @author       boredwz
// @namespace    boredwz
// @homepageURL  https://github.com/boredwz/browser_userscripts
// @downloadURL  https://raw.githubusercontent.com/boredwz/browser_userscripts/master/js/ytm-pwa-topbar-color.user.js
// @match        https://music.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=music.youtube.com
// @description  Change YouTube Music PWA topbar color based on system theme.
// ==/UserScript==

(function() {
    'use strict';

    const lightThemeColor = "#fff";
    const darkThemeColor = "#000";

    // Get theme-color meta element (or create if not exist).
    let themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeColorMeta) {
        themeColorMeta = document.createElement('meta');
        themeColorMeta.name = "theme-color";
        document.head.appendChild(themeColorMeta);
    }

    function currentTime() {return new Date().toLocaleTimeString('eo', { hour12: false });}

    function main(text) {
        let color = window.matchMedia('(prefers-color-scheme: dark)').matches ? darkThemeColor : lightThemeColor;
        themeColorMeta.setAttribute("content", color);
        console.log(`[${currentTime()}]\n(${text}) Set top bar color: ${color}.`);
    }

    window.addEventListener('load', function() {main('Page loaded')});
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function() {main('System Theme changed')});
})();
