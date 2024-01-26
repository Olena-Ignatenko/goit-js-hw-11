import{i as l,S as d}from"./assets/vendor-46aac873.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m="https://pixabay.com/api",h="41935591-0a413f499168cf3dc7607e044",f=document.querySelector(".search-form"),p=document.querySelector(".search-input"),i=document.querySelector(".gallery");document.querySelector(".loader");f.addEventListener("submit",function(t){t.preventDefault();const a=encodeURIComponent(p.value.trim());if(a.trim()===""){l.error({title:"Error",message:"Please enter a search query."});return}b();const o=new URL(m);o.searchParams.set("key",h),o.searchParams.set("q",a),o.searchParams.set("image_type","photo"),o.searchParams.set("orientation","horizontal"),o.searchParams.set("safesearch",!0),fetch(o).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{y(s.hits)}).catch(s=>{console.error(s),c()})});function y(t){if(i.innerHTML="",t.length===0){l.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again."});return}const a=g(t);i.innerHTML=a,new d(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh(),c()}function g(t){return t.map(({webformatURL:a,largeImageURL:o,tags:s,likes:e,views:r,comments:n,downloads:u})=>`<li class="gallery-item">
      <a class="gallery-link" href="${o}">
        <img
          class="gallery-image"
          src="${a}"
          alt="${s}"
          width="360"
        />
      </a>
      <div class="thumb-block">
        <div class="block">
          <h2 class="title">Likes</h2>
          <p class="amount">${e}</p>
        </div>
        <div class="block">
          <h2 class="title">Views</h2>
          <p class="amount">${r}</p>
        </div>
        <div class="block">
          <h2 class="title">Comments</h2>
          <p class="amount">${n}</p>
        </div>
        <div class="block">
          <h2 class="title">Downloads</h2>
          <p class="amount">${u}</p>
        </div>
      </div>
    </li>`).join("")}function b(){const t=document.querySelector(".loader");t&&(t.style.display="block")}function c(){const t=document.querySelector(".loader");t&&(t.style.display="none")}
//# sourceMappingURL=commonHelpers.js.map
