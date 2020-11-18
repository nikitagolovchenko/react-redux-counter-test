import React from 'react';

export default function Author() {
  const author = process.env.REACT_APP_AUTHOR;

  return (
    <div className='author'>
      <span>{ author }</span>
    </div>
  );
}
