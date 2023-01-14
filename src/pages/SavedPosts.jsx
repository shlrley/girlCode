import{ React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Profile from '../components/Profile.jsx';

const SavedPosts = () => {
    return (
        <Wrapper>
            <Profile />
            <Items>
                <Link to="/posts" style={{ textDecoration: "none" }}><Name style={{ color: '#787878' }}>Posts</Name></Link>
                <Name style={{ textDecoration: 'underline' }}>Favorites</Name>
            </Items>
        </Wrapper>
    )
}

export default SavedPosts

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