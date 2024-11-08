(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const v="AIzaSyC1O_RT8EhKnmWMxcECBqX5U6tHmPKvl0c",b=50;function w(t,e,r){const s=document.createElement("div");return s.className="video-card",s.innerHTML=`
        <div class="thumbnail-container">
            <img class="thumbnail" src="${r}" alt="${e}" loading="lazy">
        </div>
        <div class="video-info">
            <h3 class="video-title">${e}</h3>
            <div class="button-group">
                <a href="https://www.youtube.com/watch?v=${t}" 
                   class="watch-button" 
                   target="_blank" 
                   rel="noopener noreferrer">
                    Watch
                </a>
                <a href="https://loader.to/api/button/?url=https://www.youtube.com/watch?v=${t}&f=mp4" 
                   class="download-button" 
                   target="_blank" 
                   rel="noopener noreferrer">
                    Download MP4
                </a>
            </div>
        </div>
    `,s}function E(t){const e=/[?&]list=([^#\&\?]+)/,r=t.match(e);return r?r[1]:null}function c(t,e){t.textContent=e,t.style.display="block"}function I(t){t.textContent="",t.style.display="none"}function y(t,e,r){t.classList.toggle("loading",r),e.disabled=r,t.disabled=r}async function m(t,e,r,s){const o=t.value.trim(),n=E(o);if(!n){c(e,"Invalid YouTube Playlist URL. Please check the URL and try again.");return}y(s,t,!0),I(e);try{const i=`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${b}&playlistId=${n}&key=${v}`,a=await fetch(i);if(!a.ok)throw new Error("Failed to fetch playlist data");const l=await a.json();l.items&&l.items.length>0?L(l.items,r):c(e,"No videos found in this playlist.")}catch(i){console.error("Error:",i),c(e,"Failed to load playlist. Please try again later.")}finally{y(s,t,!1)}}function L(t,e){e.innerHTML="",t.forEach(r=>{var l,f,p;const{videoId:s}=r.snippet.resourceId,{title:o,thumbnails:n}=r.snippet,i=((l=n.maxres)==null?void 0:l.url)||((f=n.high)==null?void 0:f.url)||((p=n.default)==null?void 0:p.url),a=w(s,o,i);e.appendChild(a)})}const d=document.getElementById("playlistUrl"),h=document.getElementById("error-message"),g=document.getElementById("videoContainer"),u=document.getElementById("loadButton");u.addEventListener("click",()=>{m(d,h,g,u)});d.addEventListener("keypress",t=>{t.key==="Enter"&&m(d,h,g,u)});
