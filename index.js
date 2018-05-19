import React from 'react';
import { render } from 'react-dom';
import App from './src/App';

const Main = () => {
  return (
    <div>
      <App />
    </div>
  )
}

render(<Main/>, document.getElementById('root'));