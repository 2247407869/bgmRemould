// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.cnblogs.com/liangyun/archive/2018/12/24/10168398.html
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Your code here...
    var list = document.getElementById('browserItemList');
    list.childNodes.forEach(n => {
        if (n.getElementsByClassName('collectModify')) {
            n.remove();
        }
    });
    // scrollTo(0,0);
})();