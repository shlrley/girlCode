import React from 'react';
import styled from 'styled-components';

import Navbar from '../components/Navbar.jsx';
import Post from '../components/Post.jsx';

const Community = () => {

    const posts = [{image: 'https://aritzia.scene7.com/is/image/Aritzia/f22_01_a01_83131_18914_on_a?wid=1500'},
    {image: 'https://aritzia.scene7.com/is/image/Aritzia/f22_01_a01_83131_18914_on_a?wid=1500'},
    {image: 'https://aritzia.scene7.com/is/image/Aritzia/f22_01_a01_83131_18914_on_a?wid=1500'},
    {image: 'https://aritzia.scene7.com/is/image/Aritzia/f22_01_a01_83131_18914_on_a?wid=1500'},
    {image: 'https://aritzia.scene7.com/is/image/Aritzia/f22_01_a01_83131_18914_on_a?wid=1500'},
    {image: 'https://aritzia.scene7.com/is/image/Aritzia/f22_01_a01_83131_18914_on_a?wid=1500'}]

    return (
        <Wrapper>
            <Navbar />
            <Feed>
                <Top>
                    <Header>Community Feed</Header>
                    <Upload>Upload</Upload>
                </Top>
                <Images>
                    {posts.map((post) => <Post image={post.image} />)}
                </Images>
            </Feed>
        </Wrapper>
    )
}

export default Community

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
`

const Header = styled.h1`
    text-align: center;
    font-size: 36px;
    font-family: 'Alegreya Sans', sans-serif;
    font-weight: 500;
`

const Feed = styled.div`
    width: 1200px;
    align-self: center;
`

const Images = styled.div`
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 30px;
    margin-top: 20px;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Upload = styled.button`
    border-color: transparent;
    border-radius: 12px;
    font-size: 20px;
    font-family: 'Exo 2', sans-serif;
    text-align: center;
    color: white;
    padding: 12px 24px;
    background-color: black;
`