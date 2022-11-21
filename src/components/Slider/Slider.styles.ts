import styled from 'styled-components'

export const SliderContainer = styled.div`
  width: 100%;
  .slider-item {
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    margin: 2rem auto;
    justify-content: flex-start;
    /* overflow-x: auto; */
    box-sizing: border-box;
    svg {
      padding: .4rem;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    .slider-item {
      flex-wrap: wrap;
      width: 90%;
    }
  }
`;