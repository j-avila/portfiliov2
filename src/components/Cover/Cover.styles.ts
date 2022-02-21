import styled from "styled-components"

export const CoverContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 2rem;
  .title{
    z-index: 1;
    width: 70vw;
    h1{
      font-size: 4rem;
    }
  }
  .photo{
    position: relative;
    left: -10%;
  }
  .stats{
    width: 500px;
    position: relative;
    left: -100px;
    h2{
      font-size: 4rem;
      margin: 0;
      color: ${props => props.theme.colors.accent};
    }
    p{
      margin: 0;
      text-transform: capitalize;

    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    positiob: relative;
    .title{
      width: 50vw;
      margin-left: 1rem;
      h1{
        font-size: 2rem;
      }
    }
    .photo{
      left: 30%;
      max-width: 350px; 
      position: absolute;
      img{width: 100%;}

    }
    .stats{
      left: unset;
      width: 90%;
      display: grid;
      margin: 0 auto;
      margin-top: 100px;
      text-align: center;
      grid-template-columns: 1fr 1fr 1fr;
    }
  } 
`
