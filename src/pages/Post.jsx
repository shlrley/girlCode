import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar.jsx';

const Post = () => {
    return (
        <Wrapper>
            <Navbar />
            <h1>Posts</h1>
        </Wrapper>
    )
}

export default Post

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
`