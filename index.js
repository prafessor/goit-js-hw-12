import{i as o,S as m}from"./assets/vendor-B07T6_gy.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p=s=>s.map(a=>{const{largeImageURL:r,webformatURL:l,tags:e,likes:t,views:i,comments:u,downloads:y}=a;return`
      <li class="gallery-item">
        <a class="gallery-link js-gallery-link" href="${r}">
          <img class="gallery-img" src="${l}" alt="${e}">
          <div class="gallery-addition">
            <div class="gallery-addition-item">
              <span class="gallery-addition-title">Likes</span>
              <span class="gallery-addition-value">${t}</span>
            </div>
            <div class="gallery-addition-item">
              <span class="gallery-addition-title">Views</span>
              <span class="gallery-addition-value">${i}</span>
            </div>
            <div class="gallery-addition-item">
              <span class="gallery-addition-title">Comments</span>
              <span class="gallery-addition-value">${u}</span>
            </div>
            <div class="gallery-addition-item">
              <span class="gallery-addition-title">Downloads</span>
              <span class="gallery-addition-value">${y}</span>
            </div>
          </div>
        </a>
      </li>
      `}).join(""),g=s=>{const a=new URLSearchParams({key:"48498756-24fea4538a1b2e6f47cfee5c0",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${a}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},n=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),d=document.querySelector(".loader");n.addEventListener("submit",s=>{s.preventDefault();const a=s.currentTarget.elements.query.value.trim();n.reset(),a!==""&&(c.innerHTML="",d.style.display="block",g(a).finally(()=>{d.style.display="none"}).then(r=>{if(r.hits.length===0){o.error({title:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}c.innerHTML=p(r.hits),f.refresh()}).catch(r=>{o.error({title:r.message,position:"topRight"})}))});const f=new m(".js-gallery-link");
//# sourceMappingURL=index.js.map
