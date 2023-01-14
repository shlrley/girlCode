import{ React, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Navbar from './Navbar.jsx';

const Profile = () => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get('/api/users/current');
            setUserData(response.data);
          } catch (error) {
            console.error(error);
          }
        }
    
        fetchData();
      }, []);

    return (
        <Wrapper>
            <Navbar />
            <Pic src="https://aritzia.scene7.com/is/image/Aritzia/large/s20_01_a08_70962_6020_on_e.jpg" />
            <Name>Name {userData.name} </Name>
        </Wrapper>
    )
}

export default Profile

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Pic = styled.img`
    border-radius: 50%;
    width: 125px;
    height: 125px;
    object-fit: cover;
`

const Name = styled.h1`
    font-size: 28px;
    font-family: 'Alegreya Sans', sans-serif;
`

