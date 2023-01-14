import{ React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import PostItem from '../components/PostItem.jsx';
import Profile from '../components/Profile.jsx';

const SavedPosts = () => {

    const posts = [{image: 'https://i.ebayimg.com/images/g/C5IAAOSw-11fzafY/s-l1600.jpg'},
    {image: 'https://aritzia.scene7.com/is/image/Aritzia/f20_04_a06_79697_1274_on_a?wid=1200'},
    {image: 'https://aritzia.scene7.com/is/image/Aritzia/s21_03_a06_81788_1311_on_a?wid=1200'},
    {image: 'https://i.ebayimg.com/images/g/JP4AAOSwA~JfzafK/s-l500.jpg'},
    {image: 'https://aritzia.scene7.com/is/image/Aritzia/f20_03_a06_80214_15950_on_a?wid=1200'}]

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