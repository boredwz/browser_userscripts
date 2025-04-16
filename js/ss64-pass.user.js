// ==UserScript==
// @name         SS64.com/pass Auto-filler
// @version      1.0.3
// @author       boredwz
// @namespace    boredwz
// @homepageURL  https://github.com/boredwz/browser_userscripts
// @downloadURL  https://raw.githubusercontent.com/boredwz/browser_userscripts/master/js/ss64-pass.user.js
// @match        https://ss64.com/pass/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=passwords.google
// @description  Automatically fill an input field by simulating keystrokes.
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

(async () => {
    const ENV_NAME = "passcode";
    const ENV_VALUE = "ENTER YOUR PASSCODE";
    const PASSCODE = (() => {
        if (GM_getValue(ENV_NAME) === undefined) {GM_setValue(ENV_NAME, ENV_VALUE);}
        return GM_getValue(ENV_NAME);
    })();

    window.addEventListener('load', function() {main('Page loaded')});

    function currentTime() {return new Date().toLocaleTimeString('eo', { hour12: false });}

    function main(text) {
        let inputElement = document.getElementById('maintext');
        let message = inputElement ? 'Text has been entered successfully' : 'Input element not found';
        if (inputElement) {simulateTyping(inputElement, PASSCODE);}
        console.log(`[${currentTime()}]\n(${text}) ${message}`);
    }

    // Function to simulate typing into an input field
    function simulateTyping(element, text) {
        element.focus();
        element.value = ''; // Clear any existing value

        for (let i = 0; i < text.length; i++) {
            let char = text[i];
            let keyCode = char.charCodeAt(0);

            // Create and dispatch keydown event
            let keydownEvent = new KeyboardEvent('keydown', {
                bubbles: true,
                cancelable: true,
                key: char,
                char: char,
                shiftKey: false,
                keyCode: keyCode
            });
            element.dispatchEvent(keydownEvent);

            // Set the value incrementally
            element.value += char;

            // Create and dispatch keyup event
            let keyupEvent = new KeyboardEvent('keyup', {
                bubbles: true,
                cancelable: true,
                key: char,
                char: char,
                shiftKey: false,
                keyCode: keyCode
            });
            element.dispatchEvent(keyupEvent);

            // Create and dispatch input event
            let inputEvent = new Event('input', {
                bubbles: true,
                cancelable: true
            });
            element.dispatchEvent(inputEvent);
        }

        // Dispatch change event after typing is complete
        let changeEvent = new Event('change', {
            bubbles: true,
            cancelable: true
        });
        element.dispatchEvent(changeEvent);
    }
})();