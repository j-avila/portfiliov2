import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 2rem auto;
  box-sizing: content-box;
  .bio{
    padding: 2rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`
export const PortWrapper = styled.div`
  
  background-color: ${({ theme }) => theme.colors.secondary};
  h1{
    font-size: 1.2rem;
    margin: 1rem;
    position: sticky;
  }
  .portwrapper{
    display: flex;
    padding: 1rem;
    flex-direction: row;
    flex-wrap: wrap;
    max-height: 60vh;
    overflow-y: scroll;
    box-sizing: border-box;
    justify-content: space-between;
  }
`
export const CardWrapper = styled.div`
  display: flex;
  box-sizing: content-box;
  flex-direction: column;
  width: 48%;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 0 0 0.8rem 0.8rem;
  picture{
    display: block;
    height: fit-content;
    overflow: hidden;
    img{
      width: 100%;
    }
  }
  .card-text{
    padding: 1rem;
    a{
      text-transform: capitalize;
      color: ${({ theme }) => theme.colors.accent};
      text-decoration: none;;
      font-size: larger;
      h3{
        margin: 0;
      }
    }
  }

`