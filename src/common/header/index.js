import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../login/store';
import { 
  HeaderWrapper,
  HeaderWidth,
  Logo,
  Nav,
  NavItem,
  NavSearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoChange,
  SearchInfoList,
  SearchItem,
  Addition,
  AddButton,
} from './style.js'; // 样式组件

class Header extends Component {

  constructor(props) {
    super(props);
    this.spin = React.createRef();
  }

  showPanel = () => {
    const { focused, hot_keys, page, totalPage, handleMouseEnter, handleMouseLeave, mouseIn, handlePageChange } = this.props;
    const jsKeys = hot_keys.toJS(); // immutable对象 转 普通JS对象
    const newKeys = jsKeys.slice(page * 10, (page + 1) * 10);
    
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门
            <SearchInfoChange
              onClick={() => handlePageChange(page, totalPage, this.spin.current)}
            >
              <i ref={this.spin} className='iconfont spin'>&#xe851;</i>
              换一批
            </SearchInfoChange>
          </SearchInfoTitle>
          <SearchInfoList>
            { 
              newKeys.map((item) => {
                return <SearchItem key={item}>{item}</SearchItem>
              })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    }

    return null;
  }
  
  render() {
    const { inputValue, handleChange, handleFocus, handleBlur, hot_keys, loginStatus, loginOut } = this.props;
    
    return (
      <HeaderWrapper>
        <HeaderWidth>
          <Link to='/'>
            <Logo></Logo>
          </Link>

          <Nav>
            <Link to='/'>
              <NavItem className='left active'>首页</NavItem>
            </Link>
            <Link to='/'>
              <NavItem className='left'>下载</NavItem>
            </Link>
            {
              loginStatus ?
              (
                <Link to='/' onClick={loginOut}>
                  <NavItem className='right'>退出</NavItem>
                </Link>
              ) :
              (
                <Link to='/login'>
                  <NavItem className='right'>登录</NavItem>
                </Link>
              )
            }
            <Link to='/'>
              <NavItem className='right'>
                <i className='iconfont'>&#xe636;</i>
              </NavItem>
            </Link>
            <NavSearchWrapper>
              <NavSearch value={inputValue} onFocus={() => handleFocus(hot_keys)} onBlur={handleBlur} onChange={handleChange}></NavSearch>
              <i className='iconfont search-icon'>&#xe63d;</i>
              { this.showPanel() }
            </NavSearchWrapper>
          </Nav>

          <Addition>
            <AddButton className='write'>
              <i className='iconfont' style={{marginRight: '5px'}}>&#xe61c;</i>
              写文章
            </AddButton>
            <AddButton className='reg'>注册</AddButton>
          </Addition>
        </HeaderWidth>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  inputValue: state.getIn(['header', 'inputValue']),
  focused: state.getIn(['header', 'focused']),
  mouseIn: state.getIn(['header', 'mouseIn']),
  hot_keys: state.getIn(['header', 'hot_keys']),
  page: state.getIn(['header', 'page']),
  totalPage: state.getIn(['header', 'totalPage']),

  loginStatus: state.getIn(['login', 'loginStatus'])
});

const mapDispatchToProps = (dispatch) => ({
  handleChange(e) {
    dispatch(actionCreators.getInputValue(e.target.value));
  },
  handleFocus(hot_keys) {
    (hot_keys.size === 0) && dispatch(actionCreators.getHotKey());
    dispatch(actionCreators.focusInput());
  },
  handleBlur() {
    dispatch(actionCreators.blurInput());
  },
  handleMouseEnter() {
    dispatch(actionCreators.mouseEnter());
  },
  handleMouseLeave() {
    dispatch(actionCreators.mouseLeave());
  },
  handlePageChange(page, totalPage, spin) {
    const originDeg = spin.style.transform.replace(/[^0-9]/ig, '');
    spin.style.transform = `rotate(${Number(originDeg) + 360}deg)`;

    dispatch(actionCreators.pageChange((++page) % totalPage));
  },

  loginOut() {
    dispatch(loginActionCreators.logoutAccount())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);