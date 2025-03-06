import React from 'react'

// تعریف نوع props
interface TitleProps {
  children: React.ReactNode // برای محتوای داخل کامپوننت
}

const Title: React.FC<TitleProps> = (props) => {
  return <h1>{props.children}</h1>
}

export default Title
