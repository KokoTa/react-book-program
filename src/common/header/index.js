import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  HeaderWrapper,
  HeaderWidth,
  Logo,
  Nav,
  NavItem,
  NavSearchWrapper,
  NavSearch,
  Addition,
  AddButton,
} from './style.js'; // 样式组件

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderWidth>
          <Logo></Logo>
          <Nav>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载</NavItem>
            <NavItem className='right'>登录</NavItem>
            <NavItem className='right'>
              <i className='iconfont'>&#xe636;</i>
            </NavItem>
            <NavSearchWrapper>
              <NavSearch></NavSearch>
              <i className='iconfont'>&#xe63d;</i>
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

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Header);