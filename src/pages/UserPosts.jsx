import{ React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import PostItem from '../components/PostItem.jsx';
import Profile from '../components/Profile.jsx';

const UserPosts = () => {

    const posts = [{image: 'https://aritzia.scene7.com/is/image/Aritzia/medium/f20_00_a06_78786_19269_on_a.jpg'},
    {image: 'https://aritzia.scene7.com/is/image/Aritzia/large/f20_00_a06_78786_19269_on_d.jpg'},
    {image: 'https://media.karousell.com/media/photos/products/2020/11/4/aritzia_babaton_canberra_cardi_1604530519_f15613ad_progressive.jpg'},]

    return (
        <Wrapper>
            <Profile />
            <Items>
                <Name style={{ textDecoration: 'underline' }}>Posts</Name>
                <Link to="/saves" style={{ textDecoration: "none" }}><Name style={{ color: '#787878' }}>Favorites</Name></Link>
            </Items>
            <Images>
                {posts.map((post) => <PostItem image={post.image} />)}
            </Images>
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
