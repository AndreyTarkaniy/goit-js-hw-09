!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");function a(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}t.addEventListener("click",(function(){intervalId=setInterval(a,1e3),intervalId&&(t.disabled=!0,e.disabled=!1)})),e.addEventListener("click",(function(){clearInterval(intervalId),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.acb21c9c.js.map