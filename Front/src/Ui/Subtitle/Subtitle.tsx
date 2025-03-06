import React from 'react';

// تعریف نوع props
interface SubtitleProps {
  children: React.ReactNode; // برای محتوای داخل کامپوننت
}

const Subtitle: React.FC<SubtitleProps> = (props) => {
  return <h2>{props.children}</h2>;
};

export default Subtitle;