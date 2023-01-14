import { React, useCallback } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar.jsx';

const Upload = ({toggle}) => {

    const handleClick = useCallback(() => {
        toggle();
      }, [toggle]);

    return (
      <Wrapper>
        <Modal>
          <Close onClick={handleClick}>
            &times;
          </Close>
          <Header>Upload</Header>
        </Modal>
      </Wrapper>
    )
}

export default Upload

const Wrapper = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 130%;
  background-color: rgba(0, 0, 0, 0.25);
`

const Modal = styled.div`
  background-color: white;
  position: absolute;
  top: 20%;
  left: 30%;
  width: 40%;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid black;
`

const Close = styled.span`
  color: black;
  float: right;
  cursor: pointer;
`

const Header = styled.h1`
    text-align: center;
    font-size: 36px;
    font-family: 'Alegreya Sans', sans-serif;
    font-weight: 500;
`