import{j as t,r as i}from"./index-C8NdgHJU.js";import{b as x,c as m}from"./index-BaLfM6_6.js";const c=({direction:s,onClick:l})=>t.jsx("button",{onClick:l,className:`absolute top-1/2 ${s==="left"?"left-2 sm:left-4":"right-2 sm:right-4"} z-20 flex -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full border-none bg-black/50 p-2 text-xl text-white transition-all hover:bg-black/70 sm:p-3 sm:text-2xl`,children:s==="left"?t.jsx(x,{}):t.jsx(m,{})}),u=({totalSlides:s,currentIndex:l,onChange:r})=>t.jsx("div",{className:"absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 transform space-x-2 sm:bottom-4",children:Array.from({length:s}).map((o,e)=>t.jsx("div",{onClick:()=>r(e),className:`h-2 w-2 cursor-pointer rounded-full transition-all sm:h-3 sm:w-3 ${e===l?"bg-blue-500":"bg-gray-300"}`},e))}),f=({image:s,text:l,isActive:r})=>t.jsxs("div",{className:`absolute inset-0 h-full w-full transition-opacity duration-500 ${r?"z-10 opacity-100":"z-0 opacity-0"}`,children:[t.jsx("img",{src:s,alt:"Slide",loading:"lazy",className:"h-full w-full object-cover"}),r&&t.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/30 p-4 text-center text-white",children:t.jsx("h2",{className:"text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl",children:l})})]}),d="/assets/s1-DMSEwNAb.jpg",h="/assets/s2-CXr6sZ53.jpg",g="/assets/s3-DB8rxmXI.jpg",a=[d,h,g],j=["تجربه غذای سالم و گیاهی به سبک ترخینه","لذت غذای خوشمزه و با کیفیت","محیطی دلنشین برای صرف غذا"],w=()=>{const[s,l]=i.useState(0),r=()=>{l(e=>e===0?a.length-1:e-1)},o=()=>{l(e=>e===a.length-1?0:e+1)};return i.useEffect(()=>{const e=setInterval(()=>{o()},3e3);return()=>clearInterval(e)},[s]),t.jsx("div",{className:"relative mx-auto flex w-full max-w-[1400px] flex-col items-center justify-center",children:t.jsxs("div",{className:"relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg shadow-lg sm:h-[400px] md:h-[500px] lg:h-[336px]",children:[t.jsx(c,{direction:"left",onClick:r}),t.jsx("div",{className:"relative h-full w-full",children:a.map((e,n)=>t.jsx(f,{image:e,text:j[n],isActive:n===s},n))}),t.jsx(c,{direction:"right",onClick:o}),t.jsx(u,{totalSlides:a.length,currentIndex:s,onChange:l})]})})};export{w as S};
