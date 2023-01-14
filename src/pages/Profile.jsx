import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar.jsx';

const Profile = () => {
    return (
        <Wrapper>
            <Navbar />
            <h1>Profile</h1>
        </Wrapper>
    )
}

export default Profile

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
`