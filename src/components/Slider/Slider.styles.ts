import styled from 'styled-components'

export const SliderContainer = styled.div`
  width: 100%;
  .slider-item {
    width: 100%;
    display: flex;
    margin: 2rem auto;
    justify-content: space-around;
    overflow-x: auto;
    box-sizing: border-box;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    .slider-item {
      flex-wrap: wrap;
      width: 90%;
    }
  }
`;