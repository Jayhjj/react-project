import React, { useEffect } from 'react';
// import Slider from '../../components/slider/';
// import Scroll from '../../baseUI/scroll/index';
// import {forceCheck} from 'react-lazyload';
import { connect } from "react-redux";
import * as actionTypes from './store/actionCreators';
import {} from './style.js';
// import { Content } from './style';
// 将状态 map UI connect prop

// 函数表征型组件
function Recommend(props){
  const { bannerList } = props;

  const { getBannerDataDispatch } = props;
  // / =>  HOME
  // console.log(props)  react props如果在router 之中，
  // 那么他会包含history, location route(当前route.routes)
  // const { route } = props;
  // console.log(props.bannerList);
  useEffect(() => {
    if(!bannerList.size){
      getBannerDataDispatch();
    }
  }, [])
  // const bannerListJS = bannerList ? bannerList.toJS() : [];
  return (
  //   <Content>
  //   <Scroll onScroll={forceCheck}>
  //     <div>
  //       <Slider bannerList={bannerListJS}></Slider>  
  //     </div>
  //   </Scroll>
    
  // </Content> 
  <div>recommend</div>

);
}
console.log()
const mapStateToProps = (state) => ({
  // 不要再这里将数据toJS,不然每次diff比对props的时候都是不一样的引用，还是导致不必要的重渲染, 属于滥用immutable
  bannerList: state.getIn(['recommend', 'bannerList'])
});
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      // vuex  action-types  
      dispatch(actionTypes.getBannerList());
      // console.log(data)
    },
  }

}

// React.memo  性能优化， props 更新时才会重绘
// HOC 组件 高阶组件 装饰器
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend));