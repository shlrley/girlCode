import { React, useState, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Upload = ({toggle}) => {

    const handleClick = useCallback(() => {
        toggle();
      }, [toggle])

    const [selectedImage, setSelectedImage] = useState(null);
    const [caption, setCaption] = useState("");

    const handleDrop = (event) => {
      event.preventDefault();
      console.log(event.dataTransfer.files[0]);
      setSelectedImage(event.dataTransfer.files[0]);
    };
  
    const handleDragOver = (event) => {
      event.preventDefault();
    };

    const handleCaptionChange = (event) => {
      setCaption(event.target.value);
    };

    const handleUpload = async () => {
      try {
        const formData = new FormData();
        formData.append("image", selectedImage);
        formData.append("caption", caption);
        const response = await axios.post("/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <Wrapper>
        <Modal>
          <Close onClick={handleClick}>
            &times;
          </Close>
          <Header>Create a post</Header>
          <Photo onDrop={handleDrop} onDragOver={handleDragOver}>
            {selectedImage && (
              <Photo>
                <img alt="not found" width={"216px"} src={URL.createObjectURL(selectedImage)} />
                <button onClick={()=>setSelectedImage(null)}>Remove</button>
              </Photo>
            )}
            <br /><br /> 
            <input
              type="file"
              name="myImage"
              accept=".png, .jpg, .jpeg"
              onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
              }}
            />
            <input
              type="text"
              value={caption}
              onChange={handleCaptionChange}
              placeholder="Enter a caption"
            />
            <Button onClick={handleUpload}>Post</Button>
          </Photo>
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
  text-align: left;
  font-size: 36px;
  font-family: 'Alegreya Sans', sans-serif;
  font-weight: 500;
`

const Photo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const InputFile = styled.input`
`

const Button = styled.button`
  border-color: transparent;
  font-size: 20px;
  font-family: 'Exo 2', sans-serif;
  text-align: center;
  padding: 12px 25px;
  margin-top: 16px;
  color: #969696;
  border-radius: 8px;
  cursor: pointer; 
  &:hover {
      background: black;
      color: white;
  }
`