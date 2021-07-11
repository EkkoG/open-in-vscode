// ==UserScript==
// @name        Open In VSCode
// @namespace   https://github.com/cielpy
// @match       https://github.com/*
// @grant       none
// @version     1.1
// @author      cielpy
// @description 2021/7/9下午6:33:36
// @require      https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js
// ==/UserScript==
(function () {
  const p = 'url=' + location.href;
  const url = 'vscode://github.remotehub/open?' + encodeURIComponent(p);
  const cUrl = `vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=${location.href}`;
  const e = `<details data-view-component="true" class="details-overlay details-reset position-relative d-block">
  <summary role="button" data-view-component="true" class="btn ml-2">
  
          <span class="d-none d-md-flex flex-items-center">
          Open In VSCode
          <span class="dropdown-caret ml-1"></span>
        </span>
        <span class="d-inline-block d-md-none">
          <svg aria-label="More options" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-kebab-horizontal">
    <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>
        </span>

  

</summary>
  <div data-view-component="true">        <ul class="dropdown-menu dropdown-menu-sw">
            <li class="d-block d-md-none dropdown-divider" role="none"></li>
            <li><a href="${url}" class="dropdown-item">
Remote Repositories
</a></li>

            <li><a href="${cUrl}" class="dropdown-item">
            Clone in container
</a></li>

        </ul>
</div>
</details>`
  $('div.file-navigation.mb-3.d-flex.flex-items-start').append(e)
}())
