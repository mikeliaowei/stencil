'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-015b8166.js');

const myCardCss = ".my-card-wrapper{background-color:#ccc}";

let MyCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: "my-card-wrapper" }, "This is my card component"));
  }
};
MyCard.style = myCardCss;

exports.my_card = MyCard;
