import { React, useState, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Upload = ({toggle}) => {

  const navigate = useNavigate();

  function navigator() {
    navigate(`/community`)
  }
    const handleClick = useCallback(() => {
        toggle();
      }, [toggle])

    // const [userData, setUserData] = useState({
    //     image: null,
    //     description: ""
    // });

    // const handleChange = (event) => {
    //     setUserData({ ...userData, [event.target.name]: event.target.value });
    // };

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

    // const handleUpload = async (event) => {
    //   try {
    //     const formData = new FormData();
    //     formData.append("image", selectedImage);
    //     formData.append("description", caption);
    //     const response = await axios.post("/create", formData, {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     });
    //     console.log(response);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    const handleUpload = (event) => {
      event.preventDefault();
  
      // const formData = new FormData();
      // formData.append('image', selectedImage);
      // formData.append('description', caption);
      //formData.append('user_id', userData.user_id);
      axios({
        url: 'http://localhost:5000/create', 
        method: 'post',
        withCredentials: false,
        crossDomain: true,
        headers: {
          "Access-Control-Allow-Origin": '*',
          "Content-Type": "application/json" ,
        },
        data: { selectedImage, caption }
      })
      .then(response => {
          console.log(response);
          setSelectedImage(null);
          setCaption("");
          //setUserData({ image: null, description: "", user_id: "" });
          navigator();
      })
      .catch(error => {
          console.log(error);
      });
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
            <Label for="images">
            <Drop>Drop files here</Drop>or
              <InputFile
                type="file"
                id="images"
                name="myImage"
                accept=".png, .jpg, .jpeg"
                required
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setSelectedImage(event.target.files[0]);
                }}
              />
            </Label>
            <Sub>Identify the clothing article</Sub>
            <Input type="text" placeholder="Search..."/>
            <Sub>Description</Sub>
            <InputText
              type="text"
              value={caption}
              onChange={handleCaptionChange}
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
  top: 0;
  left: 0;
  //z-index: 1;
  width: 100%;
  overflow: auto;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  //max-height: calc(100vh - 210px);
  //overflow-y: auto;
`

const Sub = styled.h4`
  text-align: left;
  font-size: 20px;
  font-family: 'Alegreya Sans', sans-serif;
`

const Modal = styled.div`
  background-color: white;
  position: absolute;
  top: 5%;
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
  width: 350px;
  max-width: 100%;
  color: #444;
  padding: 5px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #555;

  &::file-selector-button { 
    margin-right: 20px;
    border: none;
    background: #CACACA;
    padding: 10px 20px;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    transition: background .2s ease-in-out;
    &:hover {
      background: black;
      color: white;
    }
  }
`

const Input = styled.input`
  font-family: 'Exo 2', sans-serif;
  font-size: 16px;
  width: 385px;
  padding: 10px;
  border-radius: 10px;
  border-color: transparent;
  background-color: #EAEAEA;
  margin-top: -15px;
`

const InputText = styled.textarea`
  font-family: 'Exo 2', sans-serif;
  font-size: 16px;
  width: 385px;
  padding: 10px;
  border-radius: 10px;
  border-color: transparent;
  background-color: #EAEAEA;
  margin-top: -15px;
`

const Label = styled.label`
  position: relative;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  padding: 20px;
  border-radius: 10px;
  border: 2px dashed #555;
  color: #444;
  cursor: pointer;
  transition: background .2s ease-in-out, border .2s ease-in-out;

  &:hover {
    background: #eee;
    border-color: #111;
    color: #222;
  }
`

const Drop = styled.span`
  color: #444;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  transition: color .2s ease-in-out;

`

const Button = styled.button`
  border-color: transparent;
  font-size: 20px;
  font-family: 'Exo 2', sans-serif;
  text-align: center;
  padding: 12px 25px;
  margin-top: 24px;
  border-radius: 8px;
  color: #969696;
  border-radius: 8px;
  cursor: pointer; 
  &:hover {
      background: black;
      color: white;
  }
`