import { darken, lighten } from 'polished'
import styled from 'styled-components'

export const ContactBox = styled.footer`
  width: 100%;
  .contact{
    box-sizing: content-box;
    width: 800px;
    padding: 2rem;
    margin: 0 auto;
    text-align: center;
    box-sizing: border-box;
    background: ${props => props.theme.colors.secondary};
    p{
      margin: 2rem auto;
      max-width: 50%;
    }
    span{
      margin: 0 auto;
      display: block;
      max-width: fit-content;
      max-height: fit-content;
      position: relative;
      a.button{
        display: block;
        color: white;
        text-decoration: none;
        background: ${props => props.theme.colors.accent};
        position: relative;
        font-size: x-large;
        border: 0;
        padding: 1rem;
        z-index: 2;
        transition: all 0.3s ease-in-out;
      }
      &:after{
        content: '';
        display: block;
        width: 160px;
        height: 60px;
        margin: 0%;
        position: absolute;
        border: 1px solid white;
        transition: all 0.3s ease-in-out;
        top: 12px;
        left: 12px;
        z-index: 1;
      }
      &:hover{
        a.button {
          cursor: pointer;
          top: -8px;
          right: 8px;
          transition: all 0.3s ease-in-out;
          background: ${({ theme }) => darken(0.1, theme.colors.accent)};
        }
        &:after {
        top: 16px;
        left: 18px;
        transition: all 0.3s ease-in-out;
      }
      };
    }
    }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 0 auto;
    width: 88%;
    .contact{
      width: 100%;
      p{
        max-width: 100%;
      }
    }
  }
`

export const Footer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  margin: 2rem auto;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;
  font-size: xx-large;
  transition: all 0.3s ease-in-out;
  a{
    color: ${({ theme }) => lighten(0.2, theme.colors.secondary)};
    &:hover{
      transition: all 0.3s ease-in-out;
      color: white;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 80%;
  }
`