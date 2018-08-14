import styled from 'styled-components';
import logo from '../../static/logo.png';

export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const HeaderWidth = styled.div`
  position: relative;
  height: 100%;
  width: 1400px;
  margin: 0 auto;
`;

export const Logo = styled.a.attrs({ href: '/' })`
  height: 100%;
  width: 100px;
  position: absolute;
  top: 0; left: 0;
  background: url(${logo});
  background-size: contain;
`;
export const Nav = styled.div`
  height: 100%;
  width: 1000px;
  margin: 0 auto;
`;

export const NavItem = styled.a.attrs({ href: '/' })`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  text-decoration: none;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const NavSearchWrapper = styled.div`
  float: left;
  position: relative;
  .search-icon {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    transition: all .5s ease;
  }
`;

export const NavSearch = styled.input.attrs({ placeholder: '搜索' })`
  width: 140px;
  height: 38px;
  padding: 0 40px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  border: none;
  border-radius: 19px;
  outline: none;
  background: #eee;
  font-size: 14px;
  color: #666;
  transition: all .5s ease;
  &::placeholder {
    color: #999;
  }
  &:focus {
    width: 200px;
    & + i {
      color: #fff;
      background: gray;
    }
  }
`;

export const SearchInfo = styled.div`
  width: 240px;
  position: absolute;
  top: 56px; left: 20px;
  padding: 0 20px;
  box-shadow: 0 0 5px lightgray;
  padding-bottom: 5px;
  &:before {
    content: '';
    display: block;
    height: 20px; width: 20px;
    transform: rotate(45deg);
    background: #fff;
    position: absolute;
    top: -5px;
  }
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  font-size: 14px;
  color: #787878;
`;

export const SearchInfoChange = styled.span`
  float: right;
  font-size: 12px;
  &:hover { cursor: pointer; }
  .spin {
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease;
    display: block;
    float: left;
    transform-origin: center center;
  }
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`;

export const SearchItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 2px;
  &:hover { cursor: pointer; }
`;

export const Addition = styled.div`
  height: 100%;
  width: 200px;
  position: absolute;
  top: 0; right: 0;
`;

export const AddButton = styled.button`
  float: right;
  margin-top: 9px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
    background: #fff;
  }
  &.write {
    color: #fff;
    background: #ec6149;
  }
  &:nth-child(2) {
    margin-right: 20px;
  }
`;