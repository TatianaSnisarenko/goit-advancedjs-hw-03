import{i as h,S as p}from"./assets/vendor-BrddEoy-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const u=document.querySelector(".gallery"),g="46273703-9deead499e428c74e7f57dd27",w="https://pixabay.com/api/?",L="q",C=new URLSearchParams({key:g,orientation:"horizontal",image_type:"photo",safesearch:!0});function y(t){const e=v(t);C.set(L,e);const r=w+C.toString();return fetch(r).then(i=>{if(!i.ok)throw new Error(`Error fetching images with status ${i.status} and response ${i.statusText}`);return i.json()})}function v(t){const e=t.split(/\s+/);let r="";for(const i of e){if((r+"+"+i).length>100)break;r+=(r?"+":"")+i}return r}const f=3e3,m="topRight";new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cpath%20d='M3.75001%2012C3.74979%2010.5518%204.13082%209.12893%204.85482%207.87459C5.57882%206.62026%206.62026%205.57861%207.87445%204.85437C9.12865%204.13013%2010.5514%203.74881%2011.9997%203.74876C13.448%203.7487%2014.8708%204.1299%2016.125%204.85405C16.2972%204.95193%2016.5011%204.97775%2016.6922%204.92586C16.8833%204.87397%2017.0462%204.74858%2017.1452%204.57707C17.2442%204.40555%2017.2714%204.20183%2017.2208%204.01036C17.1702%203.81888%2017.0459%203.65521%2016.875%203.55505C15.0163%202.48192%2012.8554%202.05208%2010.7275%202.33219C8.59964%202.61229%206.62362%203.5867%205.10594%205.10428C3.58826%206.62186%202.61373%208.59782%202.33349%2010.7257C2.05324%2012.8536%202.48294%2015.0145%203.55595%2016.8733C4.62896%2018.732%206.28531%2020.1848%208.26813%2021.0063C10.2509%2021.8278%2012.4494%2021.9721%2014.5226%2021.4168C16.5958%2020.8615%2018.4278%2019.6377%2019.7345%2017.9351C21.0413%2016.2325%2021.7497%2014.1463%2021.75%2012C21.75%2011.8011%2021.671%2011.6104%2021.5303%2011.4697C21.3897%2011.3291%2021.1989%2011.25%2021%2011.25C20.8011%2011.25%2020.6103%2011.3291%2020.4697%2011.4697C20.329%2011.6104%2020.25%2011.8011%2020.25%2012C20.25%2014.1881%2019.3808%2016.2865%2017.8336%2017.8337C16.2865%2019.3809%2014.188%2020.25%2012%2020.25C9.81198%2020.25%207.71356%2019.3809%206.16638%2017.8337C4.61921%2016.2865%203.75001%2014.1881%203.75001%2012Z'%20fill='white'/%3e%3cpath%20d='M23.031%205.03097C23.1007%204.96124%2023.156%204.87846%2023.1938%204.78735C23.2315%204.69624%2023.2509%204.59859%2023.2509%204.49997C23.2509%204.40135%2023.2315%204.3037%2023.1938%204.2126C23.156%204.12149%2023.1007%204.0387%2023.031%203.96897C22.9612%203.89924%2022.8785%203.84392%2022.7873%203.80619C22.6962%203.76845%2022.5986%203.74902%2022.5%203.74902C22.4014%203.74902%2022.3037%203.76845%2022.2126%203.80619C22.1215%203.84392%2022.0387%203.89924%2021.969%203.96897L12%2013.9395L8.03097%209.96897C7.96124%209.89924%207.87846%209.84392%207.78735%209.80619C7.69624%209.76845%207.59859%209.74902%207.49997%209.74902C7.40136%209.74902%207.3037%209.76845%207.2126%209.80619C7.12149%209.84392%207.0387%209.89924%206.96897%209.96897C6.89924%2010.0387%206.84392%2010.1215%206.80619%2010.2126C6.76845%2010.3037%206.74902%2010.4014%206.74902%2010.5C6.74902%2010.5986%206.76845%2010.6962%206.80619%2010.7873C6.84392%2010.8785%206.89924%2010.9612%206.96897%2011.031L11.469%2015.531C11.5386%2015.6008%2011.6214%2015.6562%2011.7125%2015.694C11.8036%2015.7318%2011.9013%2015.7513%2012%2015.7513C12.0986%2015.7513%2012.1963%2015.7318%2012.2874%2015.694C12.3785%2015.6562%2012.4613%2015.6008%2012.531%2015.531L23.031%205.03097Z'%20fill='white'/%3e%3c/svg%3e",import.meta.url).href,new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%3e%3cpath%20d='M31.708%2025.708c-0-0-0-0-0-0l-9.708-9.708%209.708-9.708c0-0%200-0%200-0%200.105-0.105%200.18-0.227%200.229-0.357%200.133-0.356%200.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13%200.048-0.252%200.124-0.357%200.228%200%200-0%200-0%200l-9.708%209.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057%200.229l-4.586%204.586c-0.286%200.286-0.361%200.702-0.229%201.057%200.049%200.13%200.124%200.252%200.229%200.357%200%200%200%200%200%200l9.708%209.708-9.708%209.708c-0%200-0%200-0%200-0.104%200.105-0.18%200.227-0.229%200.357-0.133%200.355-0.057%200.771%200.229%201.057l4.586%204.586c0.286%200.286%200.702%200.361%201.057%200.229%200.13-0.049%200.252-0.124%200.357-0.229%200-0%200-0%200-0l9.708-9.708%209.708%209.708c0%200%200%200%200%200%200.105%200.105%200.227%200.18%200.357%200.229%200.356%200.133%200.771%200.057%201.057-0.229l4.586-4.586c0.286-0.286%200.362-0.702%200.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z'%20fill='white'%20/%3e%3c/svg%3e",import.meta.url).href,new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cg%20clip-path='url(%23clip0_72015_47)'%3e%3cpath%20d='M6.81%200.219C6.95056%200.0787966%207.14097%204.21785e-05%207.3395%200L16.6605%200C16.859%204.21785e-05%2017.0494%200.0787966%2017.19%200.219L23.781%206.81C23.9212%206.95056%2024%207.14097%2024%207.3395V16.6605C24%2016.859%2023.9212%2017.0494%2023.781%2017.19L17.19%2023.781C17.0494%2023.9212%2016.859%2024%2016.6605%2024H7.3395C7.14097%2024%206.95056%2023.9212%206.81%2023.781L0.219%2017.19C0.0787966%2017.0494%204.21785e-05%2016.859%200%2016.6605L0%207.3395C4.21785e-05%207.14097%200.0787966%206.95056%200.219%206.81L6.81%200.219ZM7.65%201.5L1.5%207.65V16.35L7.65%2022.5H16.35L22.5%2016.35V7.65L16.35%201.5H7.65Z'%20fill='%23FAFAFB'/%3e%3cpath%20d='M6.969%206.969C7.03867%206.89915%207.12143%206.84374%207.21255%206.80593C7.30366%206.76812%207.40135%206.74866%207.5%206.74866C7.59865%206.74866%207.69633%206.76812%207.78745%206.80593C7.87857%206.84374%207.96133%206.89915%208.031%206.969L12%2010.9395L15.969%206.969C16.0387%206.89927%2016.1215%206.84395%2016.2126%206.80621C16.3037%206.76847%2016.4014%206.74905%2016.5%206.74905C16.5986%206.74905%2016.6963%206.76847%2016.7874%206.80621C16.8785%206.84395%2016.9613%206.89927%2017.031%206.969C17.1007%207.03873%2017.156%207.12151%2017.1938%207.21262C17.2315%207.30373%2017.2509%207.40138%2017.2509%207.5C17.2509%207.59861%2017.2315%207.69626%2017.1938%207.78737C17.156%207.87848%2017.1007%207.96127%2017.031%208.031L13.0605%2012L17.031%2015.969C17.1007%2016.0387%2017.156%2016.1215%2017.1938%2016.2126C17.2315%2016.3037%2017.2509%2016.4014%2017.2509%2016.5C17.2509%2016.5986%2017.2315%2016.6963%2017.1938%2016.7874C17.156%2016.8785%2017.1007%2016.9613%2017.031%2017.031C16.9613%2017.1007%2016.8785%2017.156%2016.7874%2017.1938C16.6963%2017.2315%2016.5986%2017.2509%2016.5%2017.2509C16.4014%2017.2509%2016.3037%2017.2315%2016.2126%2017.1938C16.1215%2017.156%2016.0387%2017.1007%2015.969%2017.031L12%2013.0605L8.031%2017.031C7.96127%2017.1007%207.87848%2017.156%207.78737%2017.1938C7.69626%2017.2315%207.59861%2017.2509%207.5%2017.2509C7.40138%2017.2509%207.30373%2017.2315%207.21262%2017.1938C7.12151%2017.156%207.03873%2017.1007%206.969%2017.031C6.89927%2016.9613%206.84395%2016.8785%206.80621%2016.7874C6.76847%2016.6963%206.74905%2016.5986%206.74905%2016.5C6.74905%2016.4014%206.76847%2016.3037%206.80621%2016.2126C6.84395%2016.1215%206.89927%2016.0387%206.969%2015.969L10.9395%2012L6.969%208.031C6.89915%207.96133%206.84374%207.87857%206.80593%207.78745C6.76812%207.69633%206.74866%207.59865%206.74866%207.5C6.74866%207.40135%206.76812%207.30366%206.80593%207.21255C6.84374%207.12143%206.89915%207.03867%206.969%206.969Z'%20fill='%23FAFAFB'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_72015_47'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",import.meta.url).href;function d(t){h.warning({message:t,timeout:f,position:m,close:!1})}function S(t){h.error({message:t,timeout:f,position:m,close:!1})}function x(t){if(t.length===0){S("Sorry, there are no images matching your search query. Please try again!");return}u.innerHTML=$(t)}const $=t=>t.map(e=>`<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      data-source="${e.largeImageURL}"
      data-likes = "${e.likes}"
      data-views = "${e.views}"
      data-comments = "${e.comments}"
      data-downloads = "${e.downloads}"
      alt="${e.tags}"
    />
  </a>
  <ul class="stats">
  <li class="stats-item">
  <p  class="stats-item-header">Likes</p>
  <p class="stats-item-value">${e.likes}</p>
  </li>
    <li class="stats-item">
  <p  class="stats-item-header">Views</p>
  <p class="stats-item-value">${e.views}</p>
  </li>
    <li class="stats-item">
  <p class="stats-item-header">Comments</p>
  <p class="stats-item-value">${e.comments}</p>
  </li>
    <li class="stats-item">
  <p  class="stats-item-header">Downloads</p>
  <p class="stats-item-value">${e.downloads}</p>
  </li>
  </ul>
</li>
`).join(""),l=document.querySelector(".search-form"),c=document.querySelector(".loader");l.addEventListener("submit",P);function P(t){t.preventDefault();const e=l.elements.query.value.trim();if(e==="")return d("Please enter a valid query!");u.innerHTML="",c.classList.remove("is-hidden"),y(e).then(r=>{x(r.hits),l.reset(),c.classList.add("is-hidden"),n.refresh()}).catch(r=>{c.classList.add("is-hidden"),d("Sorry, something went wrong. Please try again!")}),l.reset()}let n=new p(".gallery a",{captionsData:"alt",captionDelay:250});n.on("show.simplelightbox",function(){});n.on("close.simplelightbox",function(){});
//# sourceMappingURL=index.js.map
