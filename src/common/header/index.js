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
    return this.props.focused ? <SearchInfo>
      <SearchInfoTitle>
        热门搜素
        <SearchInfoSwitch>换一批</SearchInfoSwitch>
      </SearchInfoTitle>
      <SearchInfoList>
        {
          this.props.list.map((item) => {
            return <SearchInfoItem key={item}>{item}</SearchInfoItem>
          })
        }
      </SearchInfoList>
    </SearchInfo> : null
  };

  render() {
    return (
      <HeaderWrapper>
        <Logo href='/'/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'><i className="iconfont">&#xe601;</i></NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.props.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={this.props.focused ? 'focused' : ''}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
              />
            </CSSTransition>
            <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe606;</i>
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
    list: state.getIn(['header', 'list'])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)
