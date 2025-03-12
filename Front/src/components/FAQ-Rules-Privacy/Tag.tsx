import React from 'react'
import { Link } from 'react-router-dom'

const Tag = () => {
  return (
    <div className="w-full rounded-2xl flex gap-3 flex-row-reverse  bg-[#EDEDED] p-4" >
    <Link to={'/FAQ'}>سوالات متداول </Link>
    <Link to={'/FAQ'}>قوانین</Link>
    <Link to={'/FAQ'}> حریم خصوصی </Link>
    </div>
  )
}

export default Tag