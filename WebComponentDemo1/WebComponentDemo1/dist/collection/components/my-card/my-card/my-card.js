import { Component, h, Prop, State, Listen } from '@stencil/core';
export class MyCard {
  constructor() {
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
    let reactContent = (h("div", null,
      h("div", { class: "card-custom", id: "react-div" },
        "Hello, from React ",
        h("br", null),
        " Live Users ",
        h("span", null, this.myReactUsers),
        h("button", { class: "btn-react small-btn", onClick: this.fetchMyDataFromAPI.bind(this, 'react') }, "Get React Users"),
        " ",
        h("br", null))));
    let stencilContent = (h("div", null,
      h("div", { class: "card-custom", id: "stencil-div" },
        "Hello, from Stencil",
        h("br", null),
        "Live Users ",
        h("span", null, this.myStencilUsers),
        h("button", { class: "btn-stencil small-btn", onClick: this.fetchMyDataFromAPI.bind(this, 'stencil') }, "Get Stencil Users"),
        " ",
        h("br", null),
        h("br", null))));
    let contentToDisplay = '';
    if (this.showReactTab) {
      contentToDisplay = reactContent;
    }
    else if (this.showStencilTab) {
      contentToDisplay = stencilContent;
    }
    let mainContent = (h("div", { class: "my-card-wrapper" },
      h("h1", null,
        "Hi, I am ",
        this.userName),
      h("h5", null, this.APIData),
      h("button", { class: "btn-stencil", onClick: this.onContentChange.bind(this, 'stenciltab') }, "Stencil"),
      h("button", { class: "btn-react", onClick: this.onContentChange.bind(this, 'reacttab') }, "React"),
      contentToDisplay,
      h("h", null),
      h("h3", null, "Two way data binding in stencil"),
      h("input", { type: "text", class: "my-input-textbox", onInput: this.onUserInput.bind(this), value: this.userName })));
    return mainContent;
  }
  static get is() { return "my-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["my-card.css"]
  }; }
  static get styleUrls() { return {
    "$": ["my-card.css"]
  }; }
  static get properties() { return {
    "userName": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "user-name",
      "reflect": false
    }
  }; }
  static get states() { return {
    "APIData": {},
    "showStencilTab": {},
    "showReactTab": {},
    "myStencilUsers": {},
    "myReactUsers": {}
  }; }
  static get listeners() { return [{
      "name": "searchWorldNameSelected",
      "method": "searchWorldNameSelectedHandler",
      "target": "body",
      "capture": false,
      "passive": false
    }]; }
}
