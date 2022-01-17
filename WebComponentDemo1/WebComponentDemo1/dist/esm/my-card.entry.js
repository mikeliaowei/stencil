import { r as registerInstance, h } from './index-e4ab909f.js';

const myCardCss = ".my-card-wrapper{background-color:#ccc}";

let MyCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "my-card-wrapper" }, "This is my card component"));
  }
};
MyCard.style = myCardCss;

export { MyCard as my_card };
