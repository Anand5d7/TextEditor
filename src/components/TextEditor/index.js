import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'

import {GoItalic} from 'react-icons/go'

import {AiOutlineUnderline} from 'react-icons/ai'

import {
  Heading,
  Image,
  EditorContainer,
  ButtonContainer,
  Button,
  ItalicButton,
  UnderlineButton,
  HrElement,
  TextAreaElement,
} from './style'
import './index.css'

class TextEditor extends Component {
  state = {
    textToBold: false,
    textToItalic: false,
    textToUnderline: false,
  }

  bold = () => {
    this.setState(prevState => ({textToBold: !prevState.textToBold}))
  }

  italic = () => {
    this.setState(prevState => ({textToItalic: !prevState.textToItalic}))
  }

  underline = () => {
    this.setState(prevState => ({textToUnderline: !prevState.textToUnderline}))
  }

  render() {
    const {textToBold, textToItalic, textToUnderline} = this.state

    const color = textToBold === false ? '#f1f5f9' : '#faff00'

    const italicButtonColor = textToItalic === false ? '#f1f5f9' : '#faff00'

    const underlineButtonColor =
      textToUnderline === false ? '#f1f5f9' : '#faff00'

    const fontWeight = textToBold === false ? 'normal' : 'bold'

    const fontStyle = textToItalic === false ? 'normal' : 'italic'

    const textDecoration = textToUnderline === false ? 'normal' : 'underline'

    return (
      <div className="app-container">
        <div className="container">
          <div className="image-container">
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </div>
          <EditorContainer>
            <ButtonContainer>
              <li className="list-item">
                <Button
                  color={color}
                  data-testid="bold"
                  type="button"
                  onClick={this.bold}
                >
                  <VscBold size={25} />
                </Button>
              </li>
              <li className="list-item">
                <ItalicButton
                  color={italicButtonColor}
                  data-testid="italic"
                  type="button"
                  onClick={this.italic}
                >
                  <GoItalic size={25} />
                </ItalicButton>
              </li>
              <li className="list-item">
                <UnderlineButton
                  color={underlineButtonColor}
                  data-testid="underline"
                  type="button"
                  onClick={this.underline}
                >
                  <AiOutlineUnderline size={25} />
                </UnderlineButton>
              </li>
            </ButtonContainer>
            <HrElement />
            <TextAreaElement
              fontWeight={fontWeight}
              fontStyle={fontStyle}
              textDecoration={textDecoration}
            />
          </EditorContainer>
        </div>
      </div>
    )
  }
}

export default TextEditor
