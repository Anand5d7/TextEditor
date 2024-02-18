import styled from 'styled-components'

export const Heading = styled.h1`
  color: #f8fafc;
  font-family: 'Roboto';
  text-align: center;
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 60px;
  margin-top: 20px;
`

export const Image = styled.img`
  height: 300px;
  width: 260px;
`
export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #334155;
  border-radius: 10px;
  height: 65vh;
  width: 21vw;
  background-color: #25262c;
`
export const ButtonContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.color};
`
export const ItalicButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.color};
`

export const UnderlineButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.color};
`
export const HrElement = styled.hr`
  border: 1px solid #334155;
  width: 100%;
  border-radius: 1px;
`
export const TextAreaElement = styled.textarea`
  border: none;
  outline: none;
  background-color: transparent;
  padding-left: 10px;
  color: #f1f5f9;
  font-size: 16px;
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
  font-weight: ${props => props.fontWeight};
`
export default Heading
