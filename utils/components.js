import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { MenuIcon, Reactiflux } from '../assets/logos';

export const Header = styled.header`
  display: flex;
  padding: 24px 32px;
  max-width: 1440px;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  z-index: 2;
`;

export const Navigation = styled.nav`
  @media (max-width: 425px) {
    position: absolute;
    top: -100vh;
    left: 0;
    width: 100%;
    height: 100vh;
    background: white;
    overflow-y: hidden;
    transition: all 0.3s ease;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Logo = styled(Link)`
  display: inline-block;
  width: 59px;
  height: 52px;
  background: url(${Reactiflux});
  text-indent: -9999px;
  z-index: 3;
`;

export const MenuToggle = styled.span`
  display: none;
  width: 28px;
  height: 20px;
  color: #dd1d64;
  z-index: 3;
  background: url(${MenuIcon});
  background-repeat: no-repeat;
  @media (max-width: 425px) {
    display: inline;
  }
`;

export const StyledLink = styled(Link)`
  color: #dd1d64;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const NavigationLink = styled(StyledLink)`
  padding-bottom: 6px;
  margin-right: 40px;
  border-bottom: solid 4px rgba(255, 255, 255, 0);
  transition: all 175ms cubic-bezier(0.65, 0.05, 0.36, 1);
  &:hover {
    text-decoration: none;
    padding-bottom: 4px;
    border-bottom: 6px solid #02d8ff;
  }
  &:last-child {
    margin-right: 0px;
  }
  @media (max-width: 425px) {
    margin-right: 0px;
    font-size: 30px;
    line-height: 30px;
  }
`;

export const LinkList = styled.ul`
  flex-basis: 30%;
  margin-left: 0;
`;

export const FrontPage = styled.main`
  display: flex;
  flex-flow: column nowrap;
  @media (max-width: 425px) {
    align-items: center;
  }
`;

export const TitleBox = styled.div`
  position: relative;
  flex-basis: 100%;
  align-self: flex-start;
`;

export const Title = styled.h1`
  color: #02d8ff;
  font-size: 200px;
  line-height: 200px;
  letter-spacing: -13px;
  font-family: 'Space Mono', monospace;
  align-self: flex-start;
  flex-basis: 100%;
  min-height: 60px;
  @media (max-width: 1200px) {
    font-size: 180px;
    line-height: 180px;
  }
  @media (max-width: 1020px) {
    font-size: 140px;
    line-height: 140px;
  }
  @media (max-width: 700px) {
    font-size: 80px;
    line-height: 80px;
    letter-spacing: -8px;
  }
  @media (max-width: 420px) {
    font-size: 60px;
    line-height: 60px;
    letter-spacing: -6px;
  }
`;

export const SmallTitle = styled.h1`
  font-size: 6rem;
  line-height: 6rem;
  color: #02d8ff;
  letter-spacing: -10px;
  font-family: 'Space Mono', monospace;
  align-self: flex-start;
  flex-basis: 100%;
`;

export const Subtitle = styled.span`
  position: absolute;
  color: #dd1d64;
  font-size: 36px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  right: -40px;
  top: 37px;
  letter-spacing: 0px;
  text-transform: uppercase;
  @media (max-width: 1200px) {
    right: -60px;
    top: 34px;
  }
  @media (max-width: 1020px) {
    font-size: 26px;
    line-height: 26px;
    top: 23px;
    right: -40px;
  }
  @media (max-width: 760px) {
    font-size: 20px;
    line-height: 20px;
    right: 0px;
  }
  @media (max-width: 700px) {
    font-size: 15px;
    line-height: 15px;
    top: 12px;
    right: -30px;
  }
  @media (max-width: 420px) {
    font-size: 12px;
    line-height: 12px;
    top: 10px;
    right: -20px;
  }
`;

export const Text = styled.p`
  font-size: ${32/19}rem;
  font-weight: 500;
  line-height: 1.5;
  color: #52244f;
  letter-spacing: -1px;
  @media (max-width: 425px) {
    font-size: 19px;
  }
`;

export const Buttons = styled.div`
  display: inline-flex;
  min-height: 72px;
  @media (max-width: 425px) {
    flex-flow: column;
  }
`;

export const Button = styled(Link)`
  display: inline-block;
  height: ${72/19}rem;
  width: ${320/19}rem;
  border: 3px solid;
  margin-bottom: 20px;
  border-radius: 100px;
  border-color: #dd1d64;
  text-align: center;
  text-decoration: none;
  font-size: ${24/19}rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  line-height: ${66/19}rem;
  color: ${props => props.primary ? '#ffffff' : '#dd1d64'};
  background-color: ${props => props.primary ? '#dd1d64' : '#ffffff'};
  transition: all 175ms ease;
  &:hover {
    color: ${props => props.primary ? '#ffffff' : '#ffffff'};
    background-color: ${props => props.primary ? '#ba1853' : '#dd1d64'};
  }
  &:first-child {
    margin-right: 32px;
  }
  @media (max-width: 425px) {
    &:first-child {
      margin-right: 0;
    }
  }
`;

const MovedLink = styled.a`
  display: inline-block;
  vertical-align: middle;
  line-height: 0;
  position: relative;
  overflow: hidden;
  img {
    margin-bottom: 0;
  }
`;

export const IconLink = ({ to, title, src, alt }) =>
  <MovedLink href={to} title={title}>
    <img src={src} alt={alt}/>
  </MovedLink>

export const Footer = styled.footer`
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 0 24px;
  max-width: 1240px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 765px) {
    flex-flow: column;
  }
`;

export const Copyright = styled.p`
  color: #52244f;
  line-height: 19px;
  margin-bottom: 6px;
`;
export const Credits = styled.p`
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 6px;
  color: #52244f;
  font-family: 'Space Mono', monospace;
`;

export const SocialLinks = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 80px;
`;

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  ${''/* @media (max-width: 765px) {
    flex-flow: column;
    align-items: center;
  }*/}
`;

export const MarkdownContainer = styled.div`
  display: inline-flex;
  flex-flow: column;
  width: 100%;
`;
