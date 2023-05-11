// ==UserScript==
// @name         Gitlab board enhancements
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Improves workflow within the gitlab boards.
// @author       Bartosz Piskadło
// @match        https://gitlab.com/*/boards/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gitlab.com
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const onDocumentChange = (mutationList, observer) => {
    const loadMoreEpicsButton = document.querySelector('[data-testid="load-more-epics"]');
    if (loadMoreEpicsButton) {
      loadMoreEpicsButton.click();
    }
  };

  const observer = new MutationObserver(onDocumentChange);
  observer.observe(document, { childList: true, subtree: true });
})();
