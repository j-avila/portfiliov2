import styled from 'styled-components'


export const Popper = styled.div<{ direction: string, background: string }>`
  position: relative;
  cursor: pointer;
  span{
    display: none;
    position: absolute;
    top: ${({ direction }) => direction === 'top' ? '-50%' : '100%'};
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    height: fit-content; 
    background: ${({ background }) => background};
    text-align: center;
    border-radius: 15px;
    padding: 8px;
    width: max-content;
    height: min-content;
    p{
      padding: 0;
    }
  }
  &:hover {
    span{
      display: block;
    }
  }
`