(()=>{"use strict";class e{static#e=window.ethereum;constructor(){this.initial()}initial(){if(void 0===e.#e)return{result:!1,message:"Not found any crypto wallet!"};e.#e.on("accountsChanged",(e=>{console.log("Time to reload UI.")}))}MustBeMetaMask(){return e.#e.isMetaMask?{result:!0,message:e.#e.isMetaMask}:{result:!1,message:"MetaMask is not installed!"}}async getAccount(){return await e.#e._metamask.isUnlocked()?await e.#e.request({method:"eth_requestAccounts"}):{result:!1,message:"Unlock MetaMask and try again."}}}document.addEventListener("DOMContentLoaded",(()=>{document.querySelector("button").addEventListener("click",(async()=>{const t=new e;try{t.getAccount().then((e=>{console.log(e)}))}catch(e){console.error(e)}}))}))})();