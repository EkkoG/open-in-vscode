// ==UserScript==
// @name        Open In VSCode
// @namespace   https://github.com/cielpy
// @match       https://github.com/*
// @grant       none
// @version     1.0
// @author      cielpy
// @description 2021/7/9下午6:33:36
// @require      https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js
// ==/UserScript==
(function () {
    const p = 'url=' + location.href;
    const url = 'vscode://github.remotehub/open?' + encodeURIComponent(p);
    $('div.file-navigation.mb-3.d-flex.flex-items-start').append(`<a class="btn ml-2 d-none d-md-block" style="background: #2ea44f; color: #ffffff;" target="_blank" href=${url} id="open_in_vscode">Open in VSCode</a>`)
  }())
  