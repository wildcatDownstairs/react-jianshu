/**
 * 头部样式
 * @param res
 */
import React, {Component} from "react";
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group';
import {actionCreators} from './store'
import {
  Addition,
  Button,
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoItem,
  SearchInfoList,
  SearchInfoSwitch,
  SearchInfoTitle,
  SearchWrapper
} from "./style";

class Header extends Component {

  getListArea() {
    const {focused, list, page, totalPage, mouseIn,　handleMouseEnter, handleMouseLeave, handlePageChange} = this.props;
    const newList = list.toJS();
    const pageList = [];

    if (newList.length) {
      // 第一次显示 0-9 条，第二次显示10-19条
      for (let i = (page - 1) * 10; i < page * 10; i++){
        pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }

    return (focused || mouseIn) ?
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜素
            <SearchInfoSwitch onClick={() => {handlePageChange(page, totalPage, this.spinIcon)}}>
              <i ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
              换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
      </SearchInfo> : null
  };

  render() {
    const {focused, list, handleInputFocus, handleInputBlur} = this.props;
    return (
      <HeaderWrapper>
        <Logo href='/'/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right login'>登录</NavItem>
          <NavItem className='right'><i className="iconfont Aa">&#xe601;</i></NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe606;</i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writing'>
            <i className="iconfont">&#xe616;</i>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // 等效于 state.get('header').get('focused')
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handlePageChange(page, totalPage, spin) {
      // 每次点击，旋转角度都加上360
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`;
      console.log(originAngle);
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)
