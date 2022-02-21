import styled from "styled-components"

export const HeadContainer = styled.nav`
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  align-items: flex-start;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.md};
  span {
    width: 60vw;
    height: 640px;
    max-width: 50%;
    position: absolute;
    top: 0;
    right: -40px;
    z-index: -1;
    background: ${({ theme }) => theme.colors.secondary};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    span {
      top: 14%;
      left: 0%;
      height: 200px;
      width: 100%;
      max-width: unset;
    }
  }
`
