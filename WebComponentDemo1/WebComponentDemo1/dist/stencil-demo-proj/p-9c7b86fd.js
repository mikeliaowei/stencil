let e,t,n=!1;const l="undefined"!=typeof window?window:{},s=l.document||{head:{}},o={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},c=e=>Promise.resolve(e),i=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),r=(e,t,n)=>{n&&n.map((([n,l,s])=>{const c=a(e,n),i=u(t,s),r=f(n);o.ael(c,l,i,r),(t.o=t.o||[]).push((()=>o.rel(c,l,i,r)))}))},u=(e,t)=>n=>{try{256&e.t?e.i[t](n):(e.u=e.u||[]).push([t,n])}catch(e){I(e)}},a=(e,t)=>16&t?s.body:e,f=e=>0!=(2&e),h=new WeakMap,$=e=>"sc-"+e.h,d={},y=e=>"object"==(e=typeof e)||"function"===e,p=(e,t,...n)=>{let l=null,s=!1,o=!1,c=[];const i=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!y(l))&&(l+=""),s&&o?c[c.length-1].$+=l:c.push(s?m(null,l):l),o=s)};if(i(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}const r=m(e,null);return r.p=t,c.length>0&&(r.m=c),r},m=(e,t)=>({t:0,S:e,$:t,g:null,m:null,p:null}),b={},w=(e,t,n,s,c,i)=>{if(n!==s){let r=G(e,t),u=t.toLowerCase();if("class"===t){const t=e.classList,l=g(n),o=g(s);t.remove(...l.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!l.includes(e))))}else if(r||"o"!==t[0]||"n"!==t[1]){const l=y(s);if((r||l&&null!==s)&&!c)try{if(e.tagName.includes("-"))e[t]=s;else{let l=null==s?"":s;"list"===t?r=!1:null!=n&&e[t]==l||(e[t]=l)}}catch(e){}null==s||!1===s?!1===s&&""!==e.getAttribute(t)||e.removeAttribute(t):(!r||4&i||c)&&!l&&e.setAttribute(t,s=!0===s?"":s)}else t="-"===t[2]?t.slice(3):G(l,u)?u.slice(2):u[2]+t.slice(3),n&&o.rel(e,t,n,!1),s&&o.ael(e,t,s,!1)}},S=/\s/,g=e=>e?e.split(S):[],j=(e,t,n,l)=>{const s=11===t.g.nodeType&&t.g.host?t.g.host:t.g,o=e&&e.p||d,c=t.p||d;for(l in o)l in c||w(s,l,o[l],void 0,n,t.t);for(l in c)w(s,l,o[l],c[l],n,t.t)},v=(t,n,l)=>{let o,c,i=n.m[l],r=0;if(null!==i.$)o=i.g=s.createTextNode(i.$);else if(o=i.g=s.createElement(i.S),j(null,i,!1),null!=e&&o["s-si"]!==e&&o.classList.add(o["s-si"]=e),i.m)for(r=0;r<i.m.length;++r)c=v(t,i,r),c&&o.appendChild(c);return o},M=(e,n,l,s,o,c)=>{let i,r=e;for(r.shadowRoot&&r.tagName===t&&(r=r.shadowRoot);o<=c;++o)s[o]&&(i=v(null,l,o),i&&(s[o].g=i,r.insertBefore(i,n)))},k=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.g.remove()},C=(e,t)=>e.S===t.S,O=(e,t)=>{const n=t.g=e.g,l=e.m,s=t.m,o=t.$;null===o?(j(e,t,!1),null!==l&&null!==s?((e,t,n,l)=>{let s,o=0,c=0,i=t.length-1,r=t[0],u=t[i],a=l.length-1,f=l[0],h=l[a];for(;o<=i&&c<=a;)null==r?r=t[++o]:null==u?u=t[--i]:null==f?f=l[++c]:null==h?h=l[--a]:C(r,f)?(O(r,f),r=t[++o],f=l[++c]):C(u,h)?(O(u,h),u=t[--i],h=l[--a]):C(r,h)?(O(r,h),e.insertBefore(r.g,u.g.nextSibling),r=t[++o],h=l[--a]):C(u,f)?(O(u,f),e.insertBefore(u.g,r.g),u=t[--i],f=l[++c]):(s=v(t&&t[c],n,c),f=l[++c],s&&r.g.parentNode.insertBefore(s,r.g));o>i?M(e,null==l[a+1]?null:l[a+1].g,n,l,c,a):c>a&&k(t,o,i)})(n,l,t,s):null!==s?(null!==e.$&&(n.textContent=""),M(n,null,t,s,0,s.length-1)):null!==l&&k(l,0,l.length-1)):e.$!==o&&(n.data=o)},P=(e,t,n)=>{const l=(e=>z(e).j)(e);return{emit:e=>x(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},x=(e,t,n)=>{const l=o.ce(t,n);return e.dispatchEvent(l),l},E=(e,t)=>{t&&!e.v&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.v=t)))},L=(e,t)=>{if(e.t|=16,!(4&e.t))return E(e,e.M),le((()=>T(e,t)));e.t|=512},T=(e,t)=>{const n=e.i;let l;return t&&(e.t|=256,e.u&&(e.u.map((([e,t])=>q(n,e,t))),e.u=null),l=q(n,"componentWillLoad")),F(l,(()=>W(e,n,t)))},W=async(e,t,n)=>{const l=e.j,o=l["s-rc"];n&&(e=>{const t=e.k,n=e.j,l=t.t,o=((e,t)=>{let n=$(t),l=Q.get(n);if(e=11===e.nodeType?e:s,l)if("string"==typeof l){let t,o=h.get(e=e.head||e);o||h.set(e,o=new Set),o.has(n)||(t=s.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e);A(e,t),o&&(o.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>R(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},A=(n,l)=>{try{l=l.render(),n.t&=-17,n.t|=2,((n,l)=>{const s=n.j,o=n.C||m(null,null),c=(e=>e&&e.S===b)(l)?l:p(null,null,l);t=s.tagName,c.S=null,c.t|=4,n.C=c,c.g=o.g=s.shadowRoot||s,e=s["s-sc"],O(o,c)})(n,l)}catch(e){I(e,n.j)}return null},R=e=>{const t=e.j,n=e.M;64&e.t||(e.t|=64,H(t),e.O(t),n||U()),e.v&&(e.v(),e.v=void 0),512&e.t&&ne((()=>L(e,!1))),e.t&=-517},U=()=>{H(s.documentElement),ne((()=>x(l,"appload",{detail:{namespace:"stencil-demo-proj"}})))},q=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){I(e)}},F=(e,t)=>e&&e.then?e.then(t):t(),H=e=>e.classList.add("hydrated"),N=(e,t,n)=>{if(t.P){const l=Object.entries(t.P),s=e.prototype;if(l.map((([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,e,{get(){return((e,t)=>z(this).L.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=z(e),o=s.L.get(t),c=s.t,i=s.i;n=((e,t)=>null==e||y(e)?e:1&t?e+"":e)(n,l.P[t][0]),8&c&&void 0!==o||n===o||(s.L.set(t,n),i&&2==(18&c)&&L(s,!1))})(this,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,l){o.jmp((()=>{const n=t.get(e);if(this.hasOwnProperty(n))l=this[n],delete this[n];else if(s.hasOwnProperty(n)&&"number"==typeof this[n]&&this[n]==l)return;this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,n])=>{const l=n[1]||e;return t.set(l,e),l}))}}return e},V=(e,t={})=>{const n=[],c=t.exclude||[],u=l.customElements,a=s.head,f=a.querySelector("meta[charset]"),h=s.createElement("style"),d=[];let y,p=!0;Object.assign(o,t),o.l=new URL(t.resourcesUrl||"./",s.baseURI).href,e.map((e=>{e[1].map((t=>{const l={t:t[0],h:t[1],P:t[2],T:t[3]};l.P=t[2],l.T=t[3];const s=l.h,a=class extends HTMLElement{constructor(e){super(e),D(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){y&&(clearTimeout(y),y=null),p?d.push(this):o.jmp((()=>(e=>{if(0==(1&o.t)){const t=z(e),n=t.k,l=()=>{};if(1&t.t)r(e,t,n.T);else{t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){E(t,t.M=n);break}}n.P&&Object.entries(n.P).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=K(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(N(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){I(e)}t.t&=-9,e()}if(s.style){let e=s.style;const t=$(n);if(!Q.has(t)){const l=()=>{};((e,t,n)=>{let l=Q.get(e);i&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,Q.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.M,c=()=>L(t,!0);o&&o["s-rc"]?o["s-rc"].push(c):c()})(0,t,n)}l()}})(this)))}disconnectedCallback(){o.jmp((()=>(()=>{if(0==(1&o.t)){const e=z(this);e.o&&(e.o.map((e=>e())),e.o=void 0)}})()))}componentOnReady(){return z(this).W}};l.A=e[0],c.includes(s)||u.get(s)||(n.push(s),u.define(s,N(a,l,1)))}))})),h.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",h.setAttribute("data-styles",""),a.insertBefore(h,f?f.nextSibling:a.firstChild),p=!1,d.length?d.map((e=>e.connectedCallback())):o.jmp((()=>y=setTimeout(U,30)))},_=new WeakMap,z=e=>_.get(e),B=(e,t)=>_.set(t.i=e,t),D=(e,t)=>{const n={t:0,j:e,k:t,L:new Map};return n.W=new Promise((e=>n.O=e)),e["s-p"]=[],e["s-rc"]=[],r(e,n,t.T),_.set(e,n)},G=(e,t)=>t in e,I=(e,t)=>(0,console.error)(e,t),J=new Map,K=e=>{const t=e.h.replace(/-/g,"_"),n=e.A,l=J.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(J.set(n,e),e[t])),I)},Q=new Map,X=[],Y=[],Z=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&o.t?ne(te):o.raf(te))},ee=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){I(e)}e.length=0},te=()=>{ee(X),ee(Y),(n=X.length>0)&&o.raf(te)},ne=e=>c().then(e),le=Z(Y,!0);export{V as b,P as c,p as h,c as p,B as r}