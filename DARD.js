// ==UserScript==
// @name        DeviantArtDownloader (DARD)
// @namespace   OctaviaPone.dard
// @include     https://www.deviantart.com/*
// @include     http://www.deviantart.com/*
// @version     2
// @grant       none
// @run-at      document-idle
// ==/UserScript==
var SITE = "wixmp.com";
var ATTR = "data-hook";
var ATTR_V = "download_button";

window.addEventListener ("load", () => {
    let imgs = document.querySelectorAll("main > div > div > div > div > div > div > img");
    let srcs = [];

    for(let e of imgs){
        if(e.src.includes(SITE)){
            srcs.push(e.src);
        }
    }
    let src = srcs[0];
  
    let btns = document.querySelectorAll("button");
    
    let btn = undefined;
    for(let e of btns){
        if(e.getAttribute(ATTR) == ATTR_V){
            btn = e;
            break; //this is evil;
        }
    }
    
    let parent = btn.parentNode;
    parent.removeChild(btn);
    let a = document.createElement("a");
    a.href = src;
    a.setAttribute("download", true);
    a.appendChild(btn);
    
    parent.appendChild(a);
    
    btn.onclick = () => {};
    btn.onmousedown = () => {};
    btn.onClick = () => {};
    
    btn.parentNode.onclick = () => {};
    btn.parentNode.onmousedown = () => {};
    btn.parentNode.onClick = () => {};
  
    console.log("Loaded plugin");

}, false);
