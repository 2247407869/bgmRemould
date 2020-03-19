// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://bgm.tv/game/browser?sort=rank
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Your code here...
    var list = document.getElementById('browserItemList');
    console.log(list.childNodes.length)
    list.childNodes.forEach(n => {
        console.log(n.getElementsByClassName('collectModify'))
        if (n.getElementsByClassName('collectModify').length!==0) {
            console.log(n)
            n.remove();
        }
    });
})();