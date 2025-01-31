import{a as w,S,i as d}from"./assets/vendor-B6jJ9_I0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}})();const u=r=>r.map(t=>{const{largeImageURL:i,webformatURL:n,tags:e,likes:a,views:o,comments:L,downloads:b}=t;return`
      <li class="gallery-item js-gallery-item">
        <a class="gallery-link js-gallery-link" href="${i}">
          <img class="gallery-img" src="${n}" alt="${e}">
          <div class="gallery-addition">
            <div class="gallery-addition-item">
              <span class="gallery-addition-title">Likes</span>
              <span class="gallery-addition-value">${a}</span>
            </div>
            <div class="gallery-addition-item">
              <span class="gallery-addition-title">Views</span>
              <span class="gallery-addition-value">${o}</span>
            </div>
            <div class="gallery-addition-item">
              <span class="gallery-addition-title">Comments</span>
              <span class="gallery-addition-value">${L}</span>
            </div>
            <div class="gallery-addition-item">
              <span class="gallery-addition-title">Downloads</span>
              <span class="gallery-addition-value">${b}</span>
            </div>
          </div>
        </a>
      </li>
      `}).join(""),m=async(r,t)=>{const i={params:{key:"48498756-24fea4538a1b2e6f47cfee5c0",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}};return await w.get("https://pixabay.com/api/",i)},h=document.querySelector(".js-search-form"),g=document.querySelector(".js-gallery"),y=document.querySelector(".loader"),s=document.querySelector(".js-gallery-load-btn");let l=1,p=0,c="";const j=()=>{const t={top:2*document.querySelector(".js-gallery-item").getBoundingClientRect().height-36,behavior:"smooth"};scrollBy(t)},q=async r=>{try{if(r.preventDefault(),s.classList.add("hidden"),c=r.currentTarget.elements.query.value.trim(),h.reset(),c==="")return;g.innerHTML="",y.style.display="block",l=1;const{data:t}=await m(c,l);if(p=Math.ceil(t.total/15),y.style.display="none",t.hits.length===0){d.error({title:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g.innerHTML=u(t.hits),v.refresh(),p>1&&(s.classList.remove("hidden"),s.addEventListener("click",f))}catch(t){d.error({title:t.message,position:"topRight"})}},f=async()=>{try{l++,s.style.opacity=0,y.style.display="block";const{data:r}=await m(c,l);y.style.display="none",s.style.opacity=1,g.insertAdjacentHTML("beforeend",u(r.hits)),v.refresh(),j(),(l===p||l===34)&&(s.classList.add("hidden"),s.removeEventListener("click",f),d.info({title:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(r){d.error({title:r.message,position:"topRight"})}};h.addEventListener("submit",q);const v=new S(".js-gallery-link");
//# sourceMappingURL=index.js.map
