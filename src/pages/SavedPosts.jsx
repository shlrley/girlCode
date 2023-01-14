import{ React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import PostItem from '../components/PostItem.jsx';
import Profile from '../components/Profile.jsx';

const SavedPosts = () => {

    const posts = [{image: 'https://aritzia.scene7.com/is/image/Aritzia/f22_01_a01_83131_18914_on_a?wid=1500'},
    {image: 'https://aritzia.scene7.com/is/image/Aritzia/f22_01_a01_83131_18914_on_a?wid=1500'},
    {image: 'https://aritzia.scene7.com/is/image/Aritzia/f22_01_a01_83131_18914_on_a?wid=1500'},
    {image: 'https://aritzia.scene7.com/is/image/Aritzia/f22_01_a01_83131_18914_on_a?wid=1500'},
    {image: 'https://aritzia.scene7.com/is/image/Aritzia/f22_01_a01_83131_18914_on_a?wid=1500'},
    {image: 'https://aritzia.scene7.com/is/image/Aritzia/f22_01_a01_83131_18914_on_a?wid=1500'}]

    return (
        <Wrapper>
            <Profile />
            <Items>
                <Link to="/posts" style={{ textDecoration: "none" }}><Name style={{ color: '#787878' }}>Posts</Name></Link>
                <Name style={{ textDecoration: 'underline' }}>Favorites</Name>
            </Items>
            <Images>
                {posts.map((post) => <PostItem image={post.image} />)}
            </Images>
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

const Images = styled.div`
    width: 800px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 30px;
    align-self: center;
    justify-content: center;
    margin-top: 18px;
`