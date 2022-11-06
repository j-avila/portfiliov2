import styled from "styled-components"

export const TagWarrper = styled.div`
  border: ${({ theme }) => `2px solid ${theme.colors.secondary}`};
  padding: 0.2rem;
  border-radius: 8px;
  width: min(80vw, 600px);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5em;

  .close {
    height: 20px;
    font-size: 18px;
    margin-left: 0.5em;
    align-items: center;
    border-radius: 50px;
    display: inline-block;
    justify-content: center;
    background: rgb(48, 48, 48);
    color: ${({ theme }) => theme.error};
  }

  input {
    flex-grow: 1;
    padding: 0.5em 0;
    color: ${({ theme }) => theme.colors.text};
    border: none;
    outline: none;
    background: none;
  }
`

export const TagItem = styled.span`
  background: ${({ theme }) => theme.secondary};
  display: inline-block;
  padding: 0.5em 0.75em;
  border-radius: 20px;
`
