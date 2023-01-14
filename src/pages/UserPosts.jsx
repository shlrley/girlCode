import{ React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Profile from '../components/Profile.jsx';

const UserPosts = () => {
    return (
        <Wrapper>
            <Profile />
            <Items>
                <Name style={{ textDecoration: 'underline' }}>Posts</Name>
                <Link to="/saves" style={{ textDecoration: "none" }}><Name style={{ color: '#787878' }}>Favorites</Name></Link>
            </Items>
        </Wrapper>
    )
}

export default UserPosts

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
`

const Name = styled.h1`
    font-size: 28px;
    font-family: 'Alegreya Sans', sans-serif;
`

const Items = styled.div`
    display: flex;
    gap: 200px;
`