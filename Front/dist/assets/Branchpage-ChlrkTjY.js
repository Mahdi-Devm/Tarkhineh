import{u as P,r as n,e as b,f as S,j as e,g as A,h as B,i as O,k as V,B as T}from"./index-B-yqNhxt.js";import{S as j,P as v,A as y,a as N,b as $}from"./SliderNext-DBa-dpXv.js";import{S as C,A as E,N as k,M as F,K as z}from"./pagination-DNvFleiO.js";import"./proxy-DkOErG3r.js";const _=({data:o,isLoading:i})=>{const d=P(),[m,c]=n.useState(window.innerWidth>=1300?5:4),x=b.get("accessToken")||"",[u,a]=n.useState(!1),[h,l]=n.useState("");n.useEffect(()=>{const s=()=>{window.innerWidth<640?c(2):window.innerWidth<1300?c(4):c(5)};return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]);const p=Array.from({length:m}),r=S({mutationFn:s=>fetch(`https://tarkhine-app.onrender.com/api/v1/client/likes/${s}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${x}`},method:"POST"}).then(t=>t.json())});n.useEffect(()=>{var s,t;((s=r.data)==null?void 0:s.message)=="Product liked !"?(l("محصول به علاقه‌مندی‌ها اضافه شد"),a(!0)):((t=r.data)==null?void 0:t.message)=="product disliked !"?(l("محصول از علاقه مندی ها برداشته شد"),a(!0)):r.isError&&(l("خطا در افزودن محصول به علاقه‌مندی‌ها"),a(!0))},[r.isSuccess,r.isError]);const g=(s,t)=>{t!=="clickaway"&&a(!1)},w=s=>{a(!1)};console.log(r.data);const f={320:{slidesPerView:2,spaceBetween:10},640:{slidesPerView:3,spaceBetween:15},768:{slidesPerView:4,spaceBetween:15},1300:{slidesPerView:5,spaceBetween:20}};return e.jsxs("section",{className:"mx-auto my-10 flex w-full flex-col items-center justify-center",children:[e.jsx(C,{open:u,autoHideDuration:3e3,onClose:g,anchorOrigin:{vertical:"top",horizontal:"center"},children:e.jsx(E,{onClose:w,severity:"success",sx:{width:"100%",bgcolor:"#417F56",color:"white"},children:h})}),e.jsxs("div",{className:"mx-auto w-full rounded-2xl bg-[#417F56] p-10",children:[e.jsx("div",{className:"flex justify-end",children:e.jsx("h1",{className:"mr-8 mb-4 border-b-1 border-[#6c6969] py-2 text-right text-2xl font-semibold text-[#ffffff]",children:"غذای ایرانی"})}),e.jsx("div",{className:"relative mx-auto w-full max-w-full",children:i?e.jsx("div",{className:"grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",children:p.map((s,t)=>e.jsxs("div",{className:"animate-pulse overflow-hidden rounded-lg border border-gray-200 bg-[#f0f0f0] shadow-lg",children:[e.jsx("div",{className:"h-60 w-full bg-gray-300"}),e.jsxs("div",{className:"p-4",children:[e.jsx("div",{className:"mb-2 h-4 w-3/4 rounded bg-gray-300"}),e.jsx("div",{className:"mb-2 h-3 w-1/2 rounded bg-gray-300"}),e.jsx("div",{className:"mt-4 h-8 w-full rounded bg-gray-300"})]})]},t))}):e.jsxs("div",{className:"slider-container",children:[e.jsx(j,{modules:[k,v,F,z,y],spaceBetween:20,slidesPerView:m,navigation:!0,pagination:{clickable:!0,el:".swiper-pagination"},mousewheel:!0,keyboard:!0,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},breakpoints:f,className:"mySwiper",children:o.map(s=>e.jsx(N,{children:e.jsxs("div",{className:"overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-transform duration-300 hover:scale-105",children:[e.jsx("img",{className:"h-55 w-full rounded-t-xl object-cover",src:`${s.image_url}`,alt:s.name}),e.jsxs("div",{className:"flex flex-col justify-between gap-2 p-3",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("div",{className:"flex space-x-1"}),e.jsx("div",{className:"text-right text-xs font-semibold",children:s.name})]}),e.jsxs("div",{className:"flex items-center justify-between gap-1",children:[e.jsxs("button",{onClick:()=>r.mutate(s.id),className:"flex items-center gap-1 rounded-md border border-gray-300 px-2 py-0.5 text-xs text-gray-600 transition hover:bg-gray-100",children:["❤️ ",e.jsx("span",{children:"علاقه‌مندی"})]}),e.jsx("button",{onClick:()=>{d(B(s)),l("محصول با موفقیت به سبد خرید اضافه شد!"),a(!0)},className:"group flex-1 cursor-pointer rounded-md border border-transparent bg-[#417F56] px-4 py-0.5 text-xs text-white transition-all duration-300 hover:border-[#417F56] hover:bg-white",children:e.jsx(A,{className:"mx-auto text-xl transition-all duration-300 group-hover:text-[#417F56]"})})]})]})]})},s.id))}),e.jsx("div",{className:"swiper-pagination mt-8"})]})})]})]})},M=({data:o,isLoading:i})=>{const d=P(),[m,c]=n.useState(window.innerWidth>=1300?5:4),x=b.get("accessToken")||"",[u,a]=n.useState(!1),[h,l]=n.useState("");n.useEffect(()=>{const s=()=>{window.innerWidth<640?c(2):window.innerWidth<1300?c(4):c(5)};return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]);const p=Array.from({length:m}),r=S({mutationFn:s=>fetch(`https://tarkhine-app.onrender.com/api/v1/client/likes/${s}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${x}`},method:"POST"}).then(t=>t.json())});n.useEffect(()=>{var s,t;((s=r.data)==null?void 0:s.message)=="Product liked !"?(l("محصول به علاقه‌مندی‌ها اضافه شد"),a(!0)):((t=r.data)==null?void 0:t.message)=="product disliked !"?(l("محصول از علاقه مندی ها برداشته شد"),a(!0)):r.isError&&(l("خطا در افزودن محصول به علاقه‌مندی‌ها"),a(!0))},[r.isSuccess,r.isError]);const g=(s,t)=>{t!=="clickaway"&&a(!1)},w=()=>{a(!1)};console.log(r.data);const f={320:{slidesPerView:2,spaceBetween:10},640:{slidesPerView:3,spaceBetween:15},768:{slidesPerView:4,spaceBetween:15},1300:{slidesPerView:5,spaceBetween:20}};return e.jsxs("section",{className:"mx-auto my-10 flex w-full flex-col items-center justify-center",children:[e.jsx(C,{open:u,autoHideDuration:3e3,onClose:g,anchorOrigin:{vertical:"top",horizontal:"center"},children:e.jsx(E,{onClose:w,severity:"success",sx:{width:"100%",bgcolor:"#417F56",color:"white"},children:h})}),e.jsxs("div",{className:"mx-auto w-full rounded-2xl",children:[e.jsx("div",{className:"flex justify-end",children:e.jsx("h1",{className:"mr-8 mb-4 border-b-1 border-[#417F56] py-2 text-right text-2xl font-semibold text-[#313231]",children:"غذای ایرانی"})}),e.jsx("div",{className:"relative mx-auto w-full max-w-full",children:i?e.jsx("div",{className:"grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",children:p.map((s,t)=>e.jsxs("div",{className:"animate-pulse overflow-hidden rounded-lg border border-gray-200 bg-[#f0f0f0] shadow-lg",children:[e.jsx("div",{className:"h-60 w-full bg-gray-300"}),e.jsxs("div",{className:"p-4",children:[e.jsx("div",{className:"mb-2 h-4 w-3/4 rounded bg-gray-300"}),e.jsx("div",{className:"mb-2 h-3 w-1/2 rounded bg-gray-300"}),e.jsx("div",{className:"mt-4 h-8 w-full rounded bg-gray-300"})]})]},t))}):e.jsxs("div",{className:"slider-container",children:[e.jsx(j,{modules:[k,v,F,z,y],spaceBetween:20,slidesPerView:m,navigation:!0,pagination:{clickable:!0,el:".swiper-pagination"},mousewheel:!0,keyboard:!0,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},breakpoints:f,className:"mySwiper",children:o.map(s=>e.jsx(N,{children:e.jsxs("div",{className:"overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-transform duration-300 hover:scale-105",children:[e.jsx("img",{className:"h-55 w-full rounded-t-xl object-cover",src:`${s.image_url}`,alt:s.name}),e.jsxs("div",{className:"flex flex-col justify-between gap-2 p-3",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("div",{className:"flex space-x-1"}),e.jsx("div",{className:"text-right text-xs font-semibold",children:s.name})]}),e.jsxs("div",{className:"flex items-center justify-between gap-1",children:[e.jsxs("button",{onClick:()=>r.mutate(s.id),className:"flex items-center gap-1 rounded-md border border-gray-300 px-2 py-0.5 text-xs text-gray-600 transition hover:bg-gray-100",children:["❤️ ",e.jsx("span",{children:"علاقه‌مندی"})]}),e.jsx("button",{onClick:()=>{d(B(s)),l("محصول با موفقیت به سبد خرید اضافه شد!"),a(!0)},className:"group flex-1 cursor-pointer rounded-md border border-transparent bg-[#417F56] px-4 py-0.5 text-xs text-white transition-all duration-300 hover:border-[#417F56] hover:bg-white",children:e.jsx(A,{className:"mx-auto text-xl transition-all duration-300 group-hover:text-[#417F56]"})})]})]})]})},s.id))}),e.jsx("div",{className:"swiper-pagination mt-8"})]})})]})]})},W=({data:o,isLoading:i})=>{const d=P(),[m,c]=n.useState(window.innerWidth>=1300?5:4),x=b.get("accessToken")||"",[u,a]=n.useState(!1),[h,l]=n.useState("");n.useEffect(()=>{const s=()=>{window.innerWidth<640?c(2):window.innerWidth<1300?c(4):c(5)};return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]);const p=Array.from({length:m}),r=S({mutationFn:s=>fetch(`https://tarkhine-app.onrender.com/api/v1/client/likes/${s}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${x}`},method:"POST"}).then(t=>t.json())});n.useEffect(()=>{var s,t;((s=r.data)==null?void 0:s.message)=="Product liked !"?(l("محصول به علاقه‌مندی‌ها اضافه شد"),a(!0)):((t=r.data)==null?void 0:t.message)=="product disliked !"?(l("محصول از علاقه مندی ها برداشته شد"),a(!0)):r.isError&&(l("خطا در افزودن محصول به علاقه‌مندی‌ها"),a(!0))},[r.isSuccess,r.isError]);const g=(s,t)=>{t!=="clickaway"&&a(!1)},w=s=>{a(!1)};console.log(r.data);const f={320:{slidesPerView:2,spaceBetween:10},640:{slidesPerView:3,spaceBetween:15},768:{slidesPerView:4,spaceBetween:15},1300:{slidesPerView:5,spaceBetween:20}};return e.jsxs("section",{className:"mx-auto my-10 flex w-full flex-col items-center justify-center",children:[e.jsx(C,{open:u,autoHideDuration:3e3,onClose:g,anchorOrigin:{vertical:"top",horizontal:"center"},children:e.jsx(E,{onClose:w,severity:"success",sx:{width:"100%",bgcolor:"#417F56",color:"white"},children:h})}),e.jsxs("div",{className:"mx-auto w-full rounded-2xl",children:[e.jsx("div",{className:"flex justify-end",children:e.jsx("h1",{className:"mr-8 mb-4 border-b-1 border-[#417F56] py-2 text-right text-2xl font-semibold text-[#313231]",children:"غذای ایرانی"})}),e.jsx("div",{className:"relative mx-auto w-full max-w-full",children:i?e.jsx("div",{className:"grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",children:p.map((s,t)=>e.jsxs("div",{className:"animate-pulse overflow-hidden rounded-lg border border-gray-200 bg-[#f0f0f0] shadow-lg",children:[e.jsx("div",{className:"h-60 w-full bg-gray-300"}),e.jsxs("div",{className:"p-4",children:[e.jsx("div",{className:"mb-2 h-4 w-3/4 rounded bg-gray-300"}),e.jsx("div",{className:"mb-2 h-3 w-1/2 rounded bg-gray-300"}),e.jsx("div",{className:"mt-4 h-8 w-full rounded bg-gray-300"})]})]},t))}):e.jsxs("div",{className:"slider-container",children:[e.jsx(j,{modules:[k,v,F,z,y],spaceBetween:20,slidesPerView:m,navigation:!0,pagination:{clickable:!0,el:".swiper-pagination"},mousewheel:!0,keyboard:!0,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},breakpoints:f,className:"mySwiper",children:o.map(s=>e.jsx(N,{children:e.jsxs("div",{className:"overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-transform duration-300 hover:scale-105",children:[e.jsx("img",{className:"h-55 w-full rounded-t-xl object-cover",src:`${s.image_url}`,alt:s.name}),e.jsxs("div",{className:"flex flex-col justify-between gap-2 p-3",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("div",{className:"flex space-x-1"}),e.jsx("div",{className:"text-right text-xs font-semibold",children:s.name})]}),e.jsxs("div",{className:"flex items-center justify-between gap-1",children:[e.jsxs("button",{onClick:()=>r.mutate(s.id),className:"flex items-center gap-1 rounded-md border border-gray-300 px-2 py-0.5 text-xs text-gray-600 transition hover:bg-gray-100",children:["❤️ ",e.jsx("span",{children:"علاقه‌مندی"})]}),e.jsx("button",{onClick:()=>{d(B(s)),l("محصول با موفقیت به سبد خرید اضافه شد!"),a(!0)},className:"group flex-1 cursor-pointer rounded-md border border-transparent bg-[#417F56] px-4 py-0.5 text-xs text-white transition-all duration-300 hover:border-[#417F56] hover:bg-white",children:e.jsx(A,{className:"mx-auto text-xl transition-all duration-300 group-hover:text-[#417F56]"})})]})]})]})},s.id))}),e.jsx("div",{className:"swiper-pagination mt-8"})]})})]})]})},L=async()=>{const o=b.get("accessToken");try{return(await V.get(`${T}/client/products/5?page=1`,{method:"GET",headers:{Accept:"*/*",Authorization:`Bearer ${o}`}})).data.products}catch(i){throw console.error(i),new Error("Failed to fetch products")}},R=()=>{const{data:o,isLoading:i}=O({queryKey:["fetchProducts"],queryFn:L}),d=o??[];return e.jsxs("section",{className:"flex flex-col items-center justify-center",children:[e.jsx(W,{data:d,isLoading:i}),e.jsx(_,{data:d,isLoading:i}),e.jsx(M,{data:d,isLoading:i})]})},D=[{name:"محمد رضایی",text:"واقعا از خدمات شما راضی بودم. تجربه‌ای بی‌نظیر! تحویل سریع و برخورد حرفه‌ای تیم، منو شگفت‌زده کرد. پیشنهاد می‌کنم حتماً امتحان کنید.",img:"https://randomuser.me/api/portraits/men/1.jpg"},{name:"سارا احمدی",text:"پشتیبانی عالی و ارسال سریع! محصولی که سفارش داده بودم دقیقا همونی بود که می‌خواستم. حتماً دوباره از این فروشگاه خرید می‌کنم!",img:"https://randomuser.me/api/portraits/women/2.jpg"},{name:"علی کریمی",text:"محصولات باکیفیت و قیمت مناسب. واقعا از کیفیت محصولات راضی‌ام، حتی از چیزی که فکر می‌کردم بهتر بود. تحویل هم بی‌نظیر سریع انجام شد.",img:"https://randomuser.me/api/portraits/men/3.jpg"},{name:"نسترن رضوی",text:"بهترین فروشگاه آنلاین که تا حالا دیدم! طراحی سایت زیبا، روند خرید راحت و محصولات بی‌نظیر. واقعاً تجربه‌ای متفاوت بود.",img:"https://randomuser.me/api/portraits/women/4.jpg"}],I=()=>{const o=n.useRef(null);return e.jsx("div",{className:"mx-auto h-[300px] w-[350px] rounded-xl bg-gradient-to-br from-white to-[#326141] p-4 text-white shadow-2xl sm:h-[400px] sm:w-[370px] md:h-[300px] md:w-[1100px]",children:e.jsxs("div",{className:"relative h-[300px] overflow-hidden rounded-lg sm:h-[400px] md:h-[300px]",children:[e.jsx(j,{onSwiper:i=>o.current=i,modules:[k,v,y],spaceBetween:0,slidesPerView:1,navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"},pagination:{clickable:!0,el:".swiper-pagination",bulletActiveClass:"swiper-pagination-bullet-active",bulletClass:"swiper-pagination-bullet"},loop:!0,grabCursor:!0,autoplay:{delay:5e3,disableOnInteraction:!1},className:"h-full w-full testimonials-swiper",children:D.map((i,d)=>e.jsx(N,{children:e.jsxs("div",{className:"flex h-full flex-col items-center justify-center px-4",children:[e.jsx("img",{src:i.img,alt:i.name,className:"mb-2 h-24 w-24 transform rounded-full border-2 border-[#326141] shadow-lg transition-transform duration-500 hover:scale-110 sm:h-16 sm:w-16 md:h-24 md:w-24"}),e.jsx("h4",{className:"text-lg font-bold drop-shadow-md sm:text-base md:text-lg",children:i.name}),e.jsxs("p",{className:"mt-2 max-w-[700px] text-center text-base leading-relaxed text-gray-800 sm:max-w-[250px] sm:text-sm md:max-w-[700px] md:text-base",children:['"',i.text,'"']})]})},d))}),e.jsx("div",{className:"swiper-button-prev absolute top-1/2 left-2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-[#326141] p-2 text-white shadow-lg transition-transform duration-300 hover:bg-[#1d3926] sm:p-1 md:p-2",children:"❮"}),e.jsx("div",{className:"swiper-button-next absolute top-1/2 right-2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-[#326141] p-2 text-white shadow-lg transition-transform duration-300 hover:bg-[#1d3926] sm:p-1 md:p-2",children:"❯"}),e.jsx("div",{className:"swiper-pagination mt-5 flex justify-center space-x-1 sm:mt-4 md:mt-10"})]})})};function Q(){return e.jsxs("div",{children:[e.jsx($,{}),e.jsx(R,{}),e.jsx(I,{})]})}export{Q as default};
