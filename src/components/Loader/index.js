import React from 'react';
import loaderSrc from '../assets/loading.jpg';

const Loader = (props) => {
  return (
  <div>
    <img
    style={"width: 75px"}
    alt="loading..."
    src={loaderSrc}/>
  </div>)
}
export default Loader;
