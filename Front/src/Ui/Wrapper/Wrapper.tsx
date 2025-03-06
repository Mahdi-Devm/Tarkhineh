import React from 'react';
import './Wrapper.css';

// تعریف نوع props
interface WrapperProps {
  children: React.ReactNode; // برای محتوای داخل کامپوننت
}

const Wrapper: React.FC<WrapperProps> = (props) => {
  return <div className="Container">{props.children}</div>;
};

export default Wrapper;