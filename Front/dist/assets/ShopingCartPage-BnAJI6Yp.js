import{j as e,L as i,p as t,u as o,n as d,at as p,f as m,N as h,Y as u,au as j,q as f}from"./index-D-9hKb6s.js";import{P as g}from"./PaymentBreadcrumb-arL3agYV.js";const b="/assets/spiderweb-BHTfCQfC.svg",w=()=>e.jsxs("main",{className:"mx-auto my-6 flex h-[435px] max-w-[1224px] items-center justify-center rounded-xl border border-[#cbcbcb] md:my-12 md:h-[554px]",children:[e.jsxs("div",{className:"flex flex-col items-center gap-8",children:[e.jsx("h2",{className:"text-[16px] text-[#656565] lg:text-xl",children:"شما درحال حاضر هیچ سفارشی ثبت نکرده اید"}),e.jsxs(i,{className:"rounded-lg border border-green-800 px-7 py-2 text-[12px] font-semibold text-green-800 lg:text-[16px]",to:"/menu",children:["منوی رستوران"," "]})]}),e.jsx("img",{className:"absolute z-[-2] max-w-[70%]",src:b,alt:"web"})]}),v=({items:l})=>{const{total:n}=t(s=>s.cardReducer),{discount:r}=t(s=>s.cardReducer);console.log(r);const a=o();return e.jsxs("main",{className:"mx-auto my-6 flex max-w-[1224px] flex-col items-center gap-3 rounded-md border-zinc-400 text-[#353535] lg:flex-row-reverse",children:[e.jsx("div",{className:"max-h-[400px] w-full space-y-3 self-start overflow-y-auto rounded-xl border border-zinc-400 p-3",children:l.map(s=>{var c,x;return e.jsxs("div",{className:"flex h-[150px] flex-row-reverse overflow-hidden rounded-xl border border-zinc-300",children:[e.jsx("div",{className:"aspect-square w-[150px] bg-green-200 max-md:hidden",children:e.jsx("img",{className:"w-full h-full object-cover",src:s.image_url,alt:s.name})}),e.jsxs("div",{className:"flex w-full flex-col justify-between p-3",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("button",{className:"text-zinc-500 hover:text-green-700",onClick:()=>a(p(s)),children:e.jsx(d,{})}),e.jsx("h2",{children:s.name})]}),e.jsxs("div",{className:"flex items-center justify-between max-md:hidden",children:[s.coupon&&e.jsxs("div",{className:"mt-2 flex w-fit text-[14px] text-red-800",children:[(c=s.coupon)==null?void 0:c.percent,"%",e.jsx("span",{className:"ml-2 text-zinc-300 line-through",children:s.price})]}),e.jsx("p",{className:"w-full overflow-hidden text-right text-[14px]",children:s.description})]}),e.jsx("div",{className:"flex flex-row-reverse justify-between",children:e.jsxs("div",{className:"flex w-full items-center justify-between text-[16px]",children:[e.jsxs("p",{className:"text-[14px] text-[#353535] sm:text-[18px]",children:[e.jsxs("span",{children:[s.coupon?+s.price-+s.price*(((x=s.coupon)==null?void 0:x.percent)/100):s.price," "]}),e.jsx("span",{children:"تومان"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("div",{className:"space-x-2 rounded-md bg-green-100 max-md:mt-2",children:[e.jsx("button",{className:"p-1 hover:bg-green-300",onClick:()=>a(m(s)),children:"+"}),e.jsx("span",{children:s.qty}),e.jsx("button",{className:"p-1 hover:bg-green-300",onClick:()=>a(h(s)),children:"-"})]}),e.jsx("p",{className:"max-md:hidden",children:"starplace"})]})]})})]})]},s.id)})}),e.jsxs("div",{className:"divide h-fit min-h-[330px] w-full divide-y-2 divide-zinc-300 rounded-xl border border-zinc-400 px-4 py-3 max-sm:border-t sm:py-5 md:text-[16px] lg:max-w-[500px] lg:self-start",children:[e.jsxs("div",{className:"flex w-full justify-between py-3",children:[e.jsx("button",{className:"text-zinc-500 hover:text-green-700",onClick:()=>a(u()),children:e.jsx(d,{})}),e.jsxs("span",{children:["سبد خرید (",l.length,")"]})]}),e.jsxs("div",{className:"flex w-full justify-between py-3",children:[e.jsxs("span",{children:[r.toLocaleString(),"تومان"]}),e.jsx("span",{children:"تخفیف محصولات"})]}),e.jsxs("div",{className:"flex w-full flex-wrap justify-between py-3",children:[e.jsx("span",{children:"0 تومان"}),e.jsx("span",{children:"هزینه ارسال"}),e.jsx("span",{className:"w-full text-right text-[12px]",children:"هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما محاسبه و به این مبلغ اضافه خواهد شد."})]}),e.jsxs("div",{className:"flex w-full flex-wrap justify-between py-3",children:[e.jsxs("span",{children:["تومان ",n.toLocaleString()]}),e.jsx("span",{children:"مبلغ قابل پرداخت"}),e.jsx(j,{children:e.jsxs(i,{to:"/cart/completion-info",className:"mt-2 w-full rounded-lg bg-green-700 p-2 text-center text-white transition-all ease-in hover:bg-green-700/80",children:["تکمیل اطلاعات"," "]})})]})]})]})};function z(){const l=t(r=>r.cardReducer.products),{pathname:n}=f();return console.log("in shoping",l),e.jsxs(e.Fragment,{children:[e.jsx(g,{pathName:n}),l.length>0?e.jsx(v,{items:l}):e.jsx(w,{})]})}export{z as default};
