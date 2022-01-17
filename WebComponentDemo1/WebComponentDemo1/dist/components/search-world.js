import { HTMLElement, createEvent, h, proxyCustomElement } from '@stencil/core/internal/client';

const searchWorldCss = ".main-search-div{font-family:\"system-ui\";width:300px;margin:50px;padding:20px;border-radius:10%;border:2px solid #ccc;display:inline-block}.my-input-textbox{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box}#api-table{font-family:Arial, Helvetica, sans-serif;border-collapse:collapse;width:100%}#api-table td,#api-table th{border:1px solid #ddd;padding:8px}#api-table tr:nth-child(even){background-color:#f2f2f2}#api-table tr:hover{background-color:#ddd}#api-table tr{cursor:pointer}#api-table th{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#4CAF50;color:white}";

let SearchWorld$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.searchWorldNameSelected = createEvent(this, "searchWorldNameSelected", 7);
    this.searchResult = [];
  }
  onUserInput(event) {
    this.userInput = event.target.value;
    this.searchText = this.userInput;
  }
  searchFromAPI() {
    fetch('https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=' + this.searchText + '&apikey=865I8ZLN51M0ZVJY')
      .then(res => {
      return res.json();
    })
      .then(parsedRes => {
      var metaData = parsedRes['bestMatches'];
      this.searchResult = metaData.map(d => {
        return {
          name: d['2. name'],
          marketOpen: d['5. marketOpen'],
        };
      });
      console.log(this.searchResult);
    });
  }
  onRowClick(name) {
    this.searchWorldNameSelected.emit(name);
  }
  render() {
    return (h("div", { class: "main-search-div" }, h("input", { class: "my-input-textbox", type: "text", value: this.searchText, onInput: this.onUserInput.bind(this) }), h("button", { class: "btn-react", onClick: this.searchFromAPI.bind(this) }, "Search it!"), h("hr", null), h("br", null), " ", h("br", null), h("table", { id: "api-table" }, this.searchResult.map(r => (h("tr", { onClick: this.onRowClick.bind(this, r.name) }, h("td", null, r.name), h("td", null, r.marketOpen)))))));
  }
  static get style() { return searchWorldCss; }
};
SearchWorld$1 = /*@__PURE__*/ proxyCustomElement(SearchWorld$1, [1, "search-world", {
    "searchText": [1025, "search-text"],
    "searchResult": [32],
    "userInput": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["search-world"];
  components.forEach(tagName => { switch (tagName) {
    case "search-world":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SearchWorld$1);
      }
      break;
  } });
}

const SearchWorld = SearchWorld$1;
const defineCustomElement = defineCustomElement$1;

export { SearchWorld, defineCustomElement };
