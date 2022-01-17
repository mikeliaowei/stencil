import { p as promiseResolve, b as bootstrapLazy } from './index-abad5fd3.js';

/*
 Stencil Client Patch Browser v2.12.1 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["my-card_2",[[1,"my-card",{"userName":[1025,"user-name"],"APIData":[32],"showStencilTab":[32],"showReactTab":[32],"myStencilUsers":[32],"myReactUsers":[32]},[[16,"searchWorldNameSelected","searchWorldNameSelectedHandler"]]],[1,"search-world",{"searchText":[1025,"search-text"],"searchResult":[32],"userInput":[32]}]]]], options);
});
