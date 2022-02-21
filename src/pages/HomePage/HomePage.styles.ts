import styled from "styled-components"

export const Homepage = styled.div`
  display: flex;
  margin: 0 auto;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  max-width: ${({ theme }) => theme.breakpoints.xl};
`
