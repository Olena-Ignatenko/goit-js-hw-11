import{S as m,i as c}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",h="41935591-0a413f499168cf3dc7607e044",p=document.querySelector(".search-form"),y=document.querySelector(".search-input"),l=document.querySelector(".gallery"),i=document.querySelector(".loader"),g=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});p.addEventListener("submit",function(a){a.preventDefault();const o=encodeURIComponent(y.value.trim());if(o.trim()===""){c.error({title:"Error",message:"Please enter a search query."});return}L();const s=new URL(f);s.searchParams.set("key",h),s.searchParams.set("q",o),s.searchParams.set("image_type","photo"),s.searchParams.set("orientation","horizontal"),s.searchParams.set("safesearch",!0),fetch(s).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>{b(r.hits)}).catch(r=>{console.error(r)}).finally(()=>{u()})});function b(a){if(l.innerHTML="",a.length===0){c.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again."});return}const o=v(a);l.innerHTML=o,g.refresh(),u()}function v(a){return a.map(({webformatURL:o,largeImageURL:s,tags:r,likes:e,views:t,comments:n,downloads:d})=>`<li class="gallery-item">
      <a class="gallery-link" href="${s}">
        <img
          class="gallery-image"
          src="${o}"
          alt="${r}"
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
          <p class="amount">${t}</p>
        </div>
        <div class="block">
          <h2 class="title">Comments</h2>
          <p class="amount">${n}</p>
        </div>
        <div class="block">
          <h2 class="title">Downloads</h2>
          <p class="amount">${d}</p>
        </div>
      </div>
    </li>`).join("")}function L(){i&&(i.style.display="block")}function u(){i&&(i.style.display="none")}
//# sourceMappingURL=commonHelpers.js.map
