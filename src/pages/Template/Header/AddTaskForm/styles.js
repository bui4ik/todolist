import styled, { css } from 'styled-components'

const btn = (light, dark) => css`
  white-space: nowrap;
  display: inline-block;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 16px;
  color: white;
  &:visited {
    color: white;
  }
  background-image: linear-gradient(${light}, ${dark});
  border: 1px solid ${dark};
  &:hover {
    background-image: linear-gradient(${light}, ${dark});
    &[disabled] {
      background-image: linear-gradient(${light}, ${dark});
    }
  }
  &:visited {
    color: black;
  }
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const btnDefault = css`
  ${btn('#ffffff', '#d5d5d5')} color: #555;
`

const btnPrimary = btn('#4f93ce', '#285f8f')

export default styled.div`
  font-family: sans-serif;

  h1 {
    text-align: center;
    color: #222;
  }

  & > div {
    text-align: center;
  }

  a {
    display: block;
    text-align: center;
    color: #222;
  }

  form {
    max-width: 500px;
    margin: 10px auto;
    border: 1px solid #ccc;
    padding: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 3px;

    & > div {
      display: flex;
      flex-flow: row nowrap;
      line-height: 2em;
      margin: 5px;
      & > label {
        color: #333;
        width: 110px;
        font-size: 1em;
        line-height: 32px;
      }
      & > input,
      & > select,
      & > textarea {
        flex: 1;
        padding: 3px 5px;
        font-size: 1em;
        margin-left: 15px;
        border: 1px solid #ccc;
        border-radius: 3px;
      }
      & > input[type='checkbox'] {
        margin-top: 7px;
      }
      & > div {
        margin-left: 16px;
        & > label {
          display: block;
          & > input {
            margin-right: 3px;
          }
        }
      }
    }
    & > .buttons {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      margin-top: 15px;
    }
    button {
      margin: 0 10px;
      &[type='submit'] {
        ${btnPrimary};
      }
      &[type='button'] {
        ${btnDefault};
      }
    }
    pre {
      border: 1px solid #ccc;
      background: rgba(0, 0, 0, 0.1);
      box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
      padding: 20px;
    }
  }
`

export const FormContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 450px;
  height: 280px;;
  top: 10%;
  left: 35%;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  padding: 20px;
  border-radius: 5px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const ExitButton = styled.button`
  border: none;
  background-color:#fff;
  font-size: 25px;
  margin-left: auto;
`

export const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
`

export const TaskName = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

export const Button = styled.button`
  border-radius: 15px;
  background-color: #5584ff;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  width: 100px;
  height: 30px;
  margin-right: 15px;
  border: 2px solid #5584ff;
`

export const Priority = styled.div`
  display: flex;
  margin-bottom: 10px;
`

export const PriorityLabel = styled.label`
  margin-right: 10px;
`

export const PriorityItem = styled.label`
  margin-right: 10px;
`
