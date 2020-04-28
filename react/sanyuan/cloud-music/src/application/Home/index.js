import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Top } from './style'
function Home(props){
    const {route} = props
  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">Web App</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>
    </div>
  );
}
 
export default React.memo(Home);