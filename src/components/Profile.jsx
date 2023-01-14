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

    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');

    return (
        <Wrapper>
            <Navbar />
            <Pic src="https://aritzia.scene7.com/is/image/Aritzia/large/s20_01_a08_70962_6020_on_e.jpg" />
            <Name>{name.substring(1, name.length-1)}</Name>
            <Sub>{email.substring(1, email.length-1)}</Sub>
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

const Sub = styled.h4`
    font-size: 18px;
    font-family: 'Exo 2', sans-serif;
    font-weight: 400;
    margin-top: -20px;
  `