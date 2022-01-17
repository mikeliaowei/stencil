'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f039f334.js');

const myCardCss = ".my-card-wrapper{width:600px;margin:50px;padding:20px;border-radius:10%;border:3px solid #ccc;display:inline-block;font-family:\"system-ui\"}.card-custom{width:250px;margin:20px;padding:20px;border-radius:10%;border:2px solid rgb(102, 15, 15)}button{border:none;color:white;padding:15px 32px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;background-color:#008cba;margin-right:30px}.btn-react{background-color:#f44336}.my-input-textbox{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box}";

let MyCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.APIData = "starting value";
    this.showStencilTab = false;
    this.showReactTab = false;
  }
  // changeStates(){
  //   this.userName = 'name has been updated!';
  //   this.APIData = 'we have data from api';
  //   this.showCard = false;
  // }
  // @Watch('userName')
  // watchHandler(newValue: boolean, oldValue: boolean)
  // {
  //   console.log('The new value of name is: ' + newValue + ' old value ' + oldValue);
  // }
  // componentWillUpdate(){
  //   console.log('componentWillUpdate');
  // }
  // connectedCallback(){
  //     console.log('connectedCallback');
  //   }
  //   disconnectedCallback(){
  //     console.log('disconnectedCallback');
  //   }
  //   componentWillLoad() {
  //     //this method is only called once, it's a good place to
  //     //load data asynchronously.
  //     console.log('componentWillLoad component is about to load');
  //   }
  //   componentWillRender() {
  //     // It's always recommended to make any rendered state updates
  //     //  within componentWillRender()
  //     this.APIData = "updated";
  //     console.log('componentWillRender');
  //   }
  //   componentDidLoad() {
  //     //Called once just after the component fully loaded
  //     // and the first render() occurs.
  //     console.log('componentDidLoad');
  //     //this.APIData = 'API has been updated';
  //   }
  //   componentShouldUpdate() {
  //     //This hook is called when a component's Prop or State
  //     //property changes and a rerender is about to be requested.
  //     return true;
  //   }
  //   componentWillUpdate() {
  //     console.log('componentWillUpdate - is called since we are updating this.myAPIData in componentDidLoad');
  //   }
  //   componentDidUpdate() {
  //     console.log('componentDidUpdate - is called since we are updating this.myAPIData in componentDidLoad');
  //   }
  componentWillLoad() {
    //this method is only called once, it's a good place to
    //load data asynchronously.
    this.APIData = 'loading...';
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo')
      .then(res => {
      return res.json();
    })
      .then(parsedRes => {
      var metaData = parsedRes['Meta Data'];
      var timeDateStencil = metaData['1. Information'];
      this.APIData = timeDateStencil;
    });
  }
  getStencilUserFromAPI() {
    this.myStencilUsers = 'loading data...';
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo')
      .then(res => {
      return res.json();
    })
      .then(parsedRes => {
      var timeSeries = parsedRes['Time Series (5min)'];
      var timeDateStencil = timeSeries['2022-01-14 10:00:00'];
      this.myStencilUsers = timeDateStencil['5. volume'];
    }).catch(ex => { console.log(ex); });
  }
  getReactUserFromAPI() {
    this.myReactUsers = 'loading data...';
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo')
      .then(res => {
      return res.json();
    })
      .then(parsedRes => {
      var timeSeries = parsedRes['Time Series (5min)'];
      var timeDateReact = timeSeries['2022-01-14 08:00:00'];
      console.log(timeSeries);
      this.myReactUsers = timeDateReact['5. volume'];
    });
  }
  fetchMyDataFromAPI(contentType) {
    if (contentType == 'stencil') {
      this.getStencilUserFromAPI();
    }
    else {
      this.getReactUserFromAPI();
    }
  }
  onContentChange(content) {
    if (content == 'reacttab') {
      this.showReactTab = true;
      this.showStencilTab = false;
    }
    else if (content == 'stenciltab') {
      this.showStencilTab = true;
      this.showReactTab = false;
    }
    else {
      this.showReactTab = false;
      this.showStencilTab = false;
    }
  }
  onUserInput(event) {
    this.userName = event.target.value;
  }
  //if component is sibling, need target body
  //if component is child component, then we don't need target option
  searchWorldNameSelectedHandler(event) {
    this.userName = event.detail;
  }
  render() {
    let reactContent = (index.h("div", null, index.h("div", { class: "card-custom", id: "react-div" }, "Hello, from React ", index.h("br", null), " Live Users ", index.h("span", null, this.myReactUsers), index.h("button", { class: "btn-react small-btn", onClick: this.fetchMyDataFromAPI.bind(this, 'react') }, "Get React Users"), " ", index.h("br", null))));
    let stencilContent = (index.h("div", null, index.h("div", { class: "card-custom", id: "stencil-div" }, "Hello, from Stencil", index.h("br", null), "Live Users ", index.h("span", null, this.myStencilUsers), index.h("button", { class: "btn-stencil small-btn", onClick: this.fetchMyDataFromAPI.bind(this, 'stencil') }, "Get Stencil Users"), " ", index.h("br", null), index.h("br", null))));
    let contentToDisplay = '';
    if (this.showReactTab) {
      contentToDisplay = reactContent;
    }
    else if (this.showStencilTab) {
      contentToDisplay = stencilContent;
    }
    let mainContent = (index.h("div", { class: "my-card-wrapper" }, index.h("h1", null, "Hi, I am ", this.userName), index.h("h5", null, this.APIData), index.h("button", { class: "btn-stencil", onClick: this.onContentChange.bind(this, 'stenciltab') }, "Stencil"), index.h("button", { class: "btn-react", onClick: this.onContentChange.bind(this, 'reacttab') }, "React"), contentToDisplay, index.h("h", null), index.h("h3", null, "Two way data binding in stencil"), index.h("input", { type: "text", class: "my-input-textbox", onInput: this.onUserInput.bind(this), value: this.userName })));
    return mainContent;
  }
};
MyCard.style = myCardCss;

const searchWorldCss = ".main-search-div{font-family:\"system-ui\";width:300px;margin:50px;padding:20px;border-radius:10%;border:2px solid #ccc;display:inline-block}.my-input-textbox{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box}#api-table{font-family:Arial, Helvetica, sans-serif;border-collapse:collapse;width:100%}#api-table td,#api-table th{border:1px solid #ddd;padding:8px}#api-table tr:nth-child(even){background-color:#f2f2f2}#api-table tr:hover{background-color:#ddd}#api-table tr{cursor:pointer}#api-table th{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#4CAF50;color:white}";

let SearchWorld = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.searchWorldNameSelected = index.createEvent(this, "searchWorldNameSelected", 7);
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
    return (index.h("div", { class: "main-search-div" }, index.h("input", { class: "my-input-textbox", type: "text", value: this.searchText, onInput: this.onUserInput.bind(this) }), index.h("button", { class: "btn-react", onClick: this.searchFromAPI.bind(this) }, "Search it!"), index.h("hr", null), index.h("br", null), " ", index.h("br", null), index.h("table", { id: "api-table" }, this.searchResult.map(r => (index.h("tr", { onClick: this.onRowClick.bind(this, r.name) }, index.h("td", null, r.name), index.h("td", null, r.marketOpen)))))));
  }
};
SearchWorld.style = searchWorldCss;

exports.my_card = MyCard;
exports.search_world = SearchWorld;
