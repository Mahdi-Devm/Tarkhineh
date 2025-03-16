import{u as d,o as m,a as p,j as e,N as h,q as u,O as f}from"./index-CdV-T1hA.js";import{g as w,a as j,h as b,e as N,i as g}from"./index-BceAg49x.js";import"./iconBase-D_6F5K19.js";function v(){const t=d(),x=m(),[i,a]=p.useState(!1),l=[{title:"پروفایل",icon:e.jsx(j,{}),path:"/profile"},{title:"پیگیری سفارشات",icon:e.jsx(b,{}),path:"/profile/Trackingorders"},{title:"علاقمندی‌ها",icon:e.jsx(N,{}),path:"/profile/Interests"},{title:"آدرس‌های من",icon:e.jsx(g,{}),path:"/profile/Addresses"}],n=()=>{a(!0)},o=()=>{a(!1),x("/")};return e.jsxs("div",{className:"mt-2 h-auto w-full space-y-1 sm:w-full",children:[l.map((s,c)=>{const r=t.pathname===s.path;return e.jsxs(h,{to:s.path,className:`flex h-[38px] w-full cursor-pointer items-center justify-between rounded-md p-2 transition duration-300 ${r?"bg-[#417F56] text-white":"hover:bg-[#E5F2E9]"}`,children:[e.jsx("h1",{className:"text-[16px] sm:text-sm",children:s.title}),e.jsx("div",{className:`h-[20px] w-[20px] text-[25px] ${r?"text-white":"text-[#417F56]"}`,children:s.icon})]},c)}),e.jsxs("div",{onClick:n,className:"flex h-[38px] w-full cursor-pointer items-center justify-between rounded-md bg-[#FFF2F2] p-2 text-red-600 transition duration-300",children:[e.jsx("h1",{className:"text-[16px] sm:text-sm",children:"خروج"}),e.jsx("div",{className:"h-[20px] w-[20px] text-[25px] text-white",children:e.jsx(w,{className:"text-red-600"})})]}),i&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md",children:e.jsxs("div",{className:"scale-in w-full max-w-[90%] rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 sm:p-8 md:w-[400px] lg:w-[500px]",children:[e.jsx("h1",{className:"mb-8 text-center text-3xl text-[#0C0C0C]",children:"خروج"}),e.jsx("h2",{className:"mb-4 text-center text-lg font-medium text-[#5c5b5b]",children:"آیا مایل به خروج از حساب کاربری خود هستید؟"}),e.jsxs("div",{className:"flex flex-col justify-around sm:flex-row",children:[e.jsx("button",{className:"mb-4 w-[117px] rounded-md bg-[#FFF2F2] px-4 py-2 text-xl text-red-600 shadow-sm transition-transform duration-200 hover:scale-105 sm:mb-0 sm:w-[140px]",onClick:()=>a(!1),children:"خیر"}),e.jsx("button",{className:"w-[117px] rounded-md bg-[#417F56] px-4 py-2 text-xl text-white shadow-sm transition-transform duration-200 hover:scale-105 sm:w-[140px]",onClick:o,children:"بله"})]})]})})]})}function C(){const{mobile:t}=u();return e.jsxs("div",{className:"mt-3 flex flex-row items-center justify-between gap-4 sm:gap-10",children:[e.jsxs("div",{className:"flex flex-col items-start justify-center gap-y-2 sm:gap-y-4",children:[e.jsx("h1",{className:"text-[16px] text-[#353535] sm:text-[18px]",children:"کاربر ترخینه"}),e.jsx("p",{className:"text-[10px] text-[#717171] sm:text-[12px]",children:t})]}),e.jsx("div",{className:"flex",children:e.jsx("img",{className:"h-[48px] w-[48px] rounded-full sm:h-[88px] sm:w-[88px]",src:"https://www.figma.com/file/a1A9NqKpy0fC9pQpVBkTaa/image/e2946bbdae579b021ad972a47e0370a956703380",alt:"user profile"})})]})}function y(){return e.jsxs("div",{className:"xs:h-[200px] xs:w-[200px] h-[342px] w-[288px] rounded-md border border-[#CBCBCB] p-2 sm:h-[280px] sm:w-[240px] md:h-auto md:w-[300px]",children:[e.jsx(C,{}),e.jsx("hr",{className:"w-full text-[#757575]"}),e.jsx(v,{})]})}function k(){return e.jsxs("div",{className:"flex flex-col-reverse items-center gap-5 md:flex-row md:justify-center",children:[e.jsx("div",{className:"xs:w-[90%] h-auto w-[330px] rounded-md border border-[#CBCBCB] sm:w-[80%] md:h-[494px] md:w-[912px]",children:e.jsx(f,{})}),e.jsx(y,{})]})}export{k as default};
