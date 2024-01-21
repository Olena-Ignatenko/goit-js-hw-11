import{i as l,S as u}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const d="https://pixabay.com/api",m="41935591-0a413f499168cf3dc7607e044",f=document.querySelector(".search-form"),h=document.querySelector(".search-input"),a=document.querySelector(".gallery");f.addEventListener("submit",function(t){t.preventDefault();const r=encodeURIComponent(h.value.trim());if(r.trim()===""){l.error({title:"Error",message:"Please enter a search query."});return}g();const i=`${d}/?key=${m}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;fetch(i).then(s=>s.json()).then(s=>{p(s.hits)}).catch(s=>{console.error(s),v()})});function p(t){if(a.innerHTML="",t.length===0){l.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again."});return}const r=y(t);a.innerHTML=r,new u(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}function y(t){return t.map(({webformatURL:r,largeImageURL:i,tags:s,likes:e,views:o,comments:n,downloads:c})=>`<li class="gallery-item">
      <a class="gallery-link" href="${i}">
        <img
          class="gallery-image"
          src="${r}"
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
          <p class="amount">${o}</p>
        </div>
        <div class="block">
          <h2 class="title">Comments</h2>
          <p class="amount">${n}</p>
        </div>
        <div class="block">
          <h2 class="title">Downloads</h2>
          <p class="amount">${c}</p>
        </div>
      </div>
    </li>`).join("")}function g(){const t=document.querySelector(".loader");t&&t.classList.add("visible")}function v(){const t=document.querySelector(".loader");t&&t.classList.remove("visible")}
//# sourceMappingURL=commonHelpers.js.map
