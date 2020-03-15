import React from 'react';
import loaderSrc from '../assets/loading.jpg';

const Loader = (props) => (
    <div>
      <img
      style={{width: 75}}
      alt="Loading..."
      src={loaderSrc}/>
    </div>
  )

export default Loader;
