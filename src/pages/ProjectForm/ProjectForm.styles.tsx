import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    margin-top: 1rem;
    width: 100%;
  }
`

export const ThumbCard = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  padding: 1rem;
  max-width: 150px;
  max-height: 150px;
  position: relative;
  span {
    width: 100%;
    max-height: 150px;
    display: block;
    overflow: hidden;
  }
  .remove {
    z-index: 2;
    position: absolute;
    top: -8px;
    right: -8px;
    background: red;
    padding: 8px;
    border-radius: 50%;
  }
  img {
    width: 100%;
  }
`

export const InputField = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  padding: 0.2rem;
  border-radius: 8px;
  justify-content: space-between;
  label {
    margin-right: 1rem;
  }
  input[type="file"] {
    border: 0;
  }
  input,
  textarea {
    padding: 0.5rem;
    background: none;
    color: ${({ theme }) => theme.colors.text};
    border: ${({ theme }) => `2px solid ${theme.colors.secondary}`};
  }
`
