/**
 *
 * @param res
 */
import styled from "styled-components";
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
`;

export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    padding-right: 20px;
    box-sizing: border-box;
    margin:0 auto;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
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

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    margin-top: 9px;
    padding: 0 20px;
    margin-left: 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background-color: #eee;
    font-size: 14px;
    &::placeholder {
      color: #999;
    }
`;

export const Addition = styled.div`
    position:absolute;
    top: 0;
    right: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    line-height: 38px;
    border-radius: 19px;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
      color: #ec6149;
    }
    &.writing {
      color: #fff;
      background-color: #ec6149;
    }
`;
