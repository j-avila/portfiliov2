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
  .menu{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    h1{
      font-size: 1.2rem;
      margin: 1rem;
      position: sticky;
      margin-left: ${({ theme }) => theme.spacing.md};
    }
    i{
      margin-left: ${({ theme }) => theme.spacing.md};
      color: 'grey';
      &.active {
        color: ${({ theme }) => theme.colors.accent};
      }
      &:hover{
        cursor: pointer;
        color: white;
      }
    }
  }
  .portwrapper{
    display: grid;
    padding: 1rem;
    max-height: 60vh;
    overflow-y: scroll;
    gap: 20px;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 350px);
    box-sizing: border-box;
    .not-found{
      opacity: 0.5;
      text-align: center;
      font-size: 1.2rem;
      margin: 20% auto;
      i{
        font-size: ${({ theme }) => theme.fontSize.xl};
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    .portwrapper{
      grid-template-columns: repeat(auto-fill, 300px);
    }
  }
`
export const CardWrapper = styled.div`
  display: flex;
  box-sizing: content-box;
  flex-direction: column;
  /* width: 48%; */
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 0 0 0.8rem 0.8rem;
  h3{
    max-width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    i{
      margin-right: 8px;
    }
  }
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
  .info{
    span{
      margin-right: 12px; 
    }
    &.tags {
      display: flex;
      justify-content: start;
    }
  }

  .tag {
    padding: 6px 8px;
    margin: 2px 4px;
    font-size: small;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

`