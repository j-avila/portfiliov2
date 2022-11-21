import styled from 'styled-components'

export const Container = styled.div<{ width: string, align: string }>`
  margin : 2rm auto;
  width: ${({ width }) => width};
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: ${({ align }) => align};
`