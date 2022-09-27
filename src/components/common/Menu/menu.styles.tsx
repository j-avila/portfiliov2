import styled from "styled-components"

export const Menu = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
`
export const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    align-items: center;
    border-bottom: 1px solid white;
    li {
      margin: 0 0.5rem;
      a {
        text-decoration: none;
        color: white;
        text-transform: capitalize;
        &:hover {
          color: ${({ theme }) => theme.colors.accent};
        }
      }
    }
  }
`
