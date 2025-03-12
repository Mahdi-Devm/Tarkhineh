import React from 'react'
import { Link, useLocation } from 'react-router-dom'
interface Props{
  name:string
}
const Tag = () => {
const location=useLocation()
const path=location.pathname
const links = [  
  { to: '/faq', label: 'سوالات متداول' },  
  { to: '/rules', label: 'قوانین' },  
  { to: '/privacy', label: 'حریم خصوصی' }  
];  

  return (
    <div className="w-full rounded-2xl flex gap-3 flex-row-reverse  bg-[#EDEDED] " >
     {links.map((link) => (  
                <Link  
                    key={link.to}  
                    className={`block py-4 mr-6 ${path === link.to ? ' border-b-2 border-green-700 text-green-700' : 'text-[#717171]'}`}  
                    to={link.to}  
                >  
                    {link.label}  
                </Link>  
            ))}  
    </div>
  )
}

export default Tag