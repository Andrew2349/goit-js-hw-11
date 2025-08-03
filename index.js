import{S as d,a as f,i as l}from"./assets/vendor-BHIBSaoF.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const n=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function g(o){const r=o.map(({webformatURL:i,largeImageURL:a,tags:e,likes:t,views:s,comments:m,downloads:p})=>`
    <li class="gallery-item">
      <div class="thumb">
        <a href="${a}">
          <img class="gallery-img" alt="${e}" src="${i}" />
        </a>
      </div>
      <ul class="image-stats-list">
        <li class="image-stats-list-item"><h3>Likes</h3><p>${t}</p></li>
        <li class="image-stats-list-item"><h3>Views</h3><p>${s}</p></li>
        <li class="image-stats-list-item"><h3>Comments</h3><p>${m}</p></li>
        <li class="image-stats-list-item"><h3>Downloads</h3><p>${p}</p></li>
      </ul>
    </li>
  `).join("");n.insertAdjacentHTML("beforeend",r),console.log("Gallery markup added",n.innerHTML),h.refresh()}function y(){n.innerHTML=""}function L(){u.style.display="block"}function c(){u.style.display="none"}function b(o){return f.get("https://pixabay.com/api/",{params:{key:"51605494-583685eee7aa4d922c38f5bf9",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>{throw new Error("Error fetching images")})}const w=document.querySelector(".form");w.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(r===""){l.error({title:"Error",message:"You need to write something",position:"topRight"});return}y(),L(),b(r).then(i=>{if(c(),i.hits.length===0){l.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(i.hits)}).catch(i=>{c(),l.error({title:"Error",message:"Something went wrong",position:"topRight"}),console.error(i)})});
//# sourceMappingURL=index.js.map
