// ==UserScript==
// @name         bangumiHider
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  简化显示bangumi排行榜里收藏过的动画、游戏
// @author       雨夜
// @match        https://bgm.tv/*/browser*?sort=rank*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Your code here...
    var list = document.getElementById('browserItemList');
    list.childNodes.forEach(n => {
        if (n.getElementsByClassName('collectModify').length!==0) {
            n.getElementsByClassName('subjectCover')[0].style.display="none";
            n.getElementsByClassName('collectBlock')[0].style.display="none";
            n.getElementsByClassName('info tip')[0].style.display="none";
            n.getElementsByClassName('rateInfo')[0].style.display="none";
            // n.style.display="none";
        }
    });
})();