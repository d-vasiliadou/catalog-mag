import{r as a,j as u,a as t,F as d,H as f,R as m,b as i,c as h,d as p}from"./vendor-e6774799.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();function g({item:o}){return a.useEffect(()=>{console.log(o)},[o]),u("div",{className:"flex flex-row  h-screen items-center",children:[t("div",{className:"flex flex-col h-full",children:t("div",{className:"ml-5 mr-5 mt-auto mb-auto w-10",children:o.text})}),t("div",{className:"ml-auto md:mr-auto flex flex-col h-screen p-auto",children:t("div",{className:" mt-auto mb-auto",children:t("img",{src:o.img,alt:"",className:"max-w-[60vw] max-h-[80vh]"})})})]})}function x(){const[o,s]=a.useState(null);return a.useEffect(()=>{(async()=>{try{const e=await(await fetch("magazines.json")).json();s(e)}catch(n){console.log("Error fetching data:",n)}})()},[]),a.useEffect(()=>{},[o]),o?t("div",{className:"h-full w-full flex flex-col",children:o.items.map(c=>t(g,{item:c}))}):t("div",{children:t("h1",{children:"Loading . . . "})})}function y(){return t(d,{children:t(f,{children:t(m,{children:t(i,{path:"/",element:null,children:t(i,{index:!0,element:t(x,{})})})})})})}h.createRoot(document.getElementById("root")).render(t(p.StrictMode,{children:t(y,{})}));