import styled from "styled-components"

export const Head = styled.head`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  max-width: 80vw;
  margin: 0 auto;
`
export const GridList = styled.div<{ isLoading: boolean }>`
  gap: 20px;
  display: grid;
  padding: 1rem 0.2rem;
  max-width: 80vw;
  margin: 0 auto;
  box-sizing: border-box;
  justify-content: center;
  background: ${({ theme }) => theme.colors.secondary};
  grid-template-columns: ${({ isLoading }) =>
    isLoading ? "1fr" : "repeat(auto-fill, 25%)"};
  .spinner {
    font-size: 10vh;
    margin: 25% auto;
  }
  .not-found {
    opacity: 0.5;
    text-align: center;
    font-size: 1.2rem;
    margin: 20% auto;
    i {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
`
