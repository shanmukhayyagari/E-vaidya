import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function Body(){
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}
ReactDom.render(<Body></Body>,document.getElementById('root'));