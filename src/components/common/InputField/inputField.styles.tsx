import styled from "styled-components"

export const InputWrap = styled.div`
  input {
    padding: 0.8em;
    border: 0;
  }
  label {
    margin-right: 1em;
  }
  &.inline {
    label {
      display: inline;
    }
  }
  &.block {
    label {
      display: block;
    }
  }
`
