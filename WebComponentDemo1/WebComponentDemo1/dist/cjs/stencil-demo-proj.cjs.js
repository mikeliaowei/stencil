'use strict';

const index = require('./index-f039f334.js');

/*
 Stencil Client Patch Browser v2.12.1 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('stencil-demo-proj.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["my-card_2.cjs",[[1,"my-card",{"userName":[1025,"user-name"],"APIData":[32],"showStencilTab":[32],"showReactTab":[32],"myStencilUsers":[32],"myReactUsers":[32]},[[16,"searchWorldNameSelected","searchWorldNameSelectedHandler"]]],[1,"search-world",{"searchText":[1025,"search-text"],"searchResult":[32],"userInput":[32]}]]]], options);
});
