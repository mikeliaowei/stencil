'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f039f334.js');

/*
 Stencil Client Patch Esm v2.12.1 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["my-card_2.cjs",[[1,"my-card",{"userName":[1025,"user-name"],"APIData":[32],"showStencilTab":[32],"showReactTab":[32],"myStencilUsers":[32],"myReactUsers":[32]},[[16,"searchWorldNameSelected","searchWorldNameSelectedHandler"]]],[1,"search-world",{"searchText":[1025,"search-text"],"searchResult":[32],"userInput":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
