import { React, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar.jsx';
import PostItem from '../components/PostItem.jsx';

import arrow from '../img/arrow.png';

const Post = () => {

    const [seen, setSeen] = useState(false);

    const togglePop = () => {
        setSeen(!seen);
    };

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
                <Link to='/community'><Arrow src={arrow} /></Link>
                <Button onClick={togglePop}>Upload</Button>
            </Top>
            </Feed>
            <Item>
                <Col>
                    <Image src='https://aritzia.scene7.com/is/image/Aritzia/f22_01_a01_83131_18914_on_a?wid=1500' />
                </Col>
                <Col>
                    <Desc>
                        <Title>Item Name</Title>
                        <Subtitle>Description</Subtitle>
                        <Sub>Color<br/>Size</Sub>
                        <Direct>Direct Link</Direct>
                        <Text>Comments &nbsp; ∨</Text>
                    </Desc>
                </Col>
            </Item>
            <Heading>Others also wear</Heading>
            <Images>
                {posts.map((post) => <PostItem image={post.image} />)}
            </Images>
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

const Header = styled.h1`
    text-align: center;
    font-size: 36px;
    font-family: 'Alegreya Sans', sans-serif;
    font-weight: 500;
`

const Feed = styled.div`
    width: 1200px;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`

const Button = styled.button`
    border-color: transparent;
    border-radius: 12px;
    font-size: 20px;
    font-family: 'Exo 2', sans-serif;
    text-align: center;
    color: white;
    padding: 12px 24px;
    background-color: black;
    cursor: pointer;
`

const Item = styled.div`
    display: flex;
    gap: 60px;
`

const Arrow = styled.img``

const Col = styled.div`
    flex: 50%;
`


const Images = styled.div`
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 30px;
`

const Image = styled.img`
    width: 390px;
    border-radius: 12px;
`

const Desc = styled.div`
`

const Title = styled.h4`
    font-size: 32px;
    font-weight: 500;
    font-family: 'Alegreya Sans', sans-serif;
`

const Subtitle = styled.h5`
    font-size: 24px;
    font-family: 'Exo 2', sans-serif;
    font-weight: 600;
`

const Sub = styled.h6`
    font-size: 24px;
    font-family: 'Exo 2', sans-serif;
    margin-top: -26px;
    font-weight: 400;
`

const Direct = styled.button`
    border-color: transparent;
    font-size: 24px;
    font-family: 'Exo 2', sans-serif;
    text-align: center;
    padding: 16px 34px;
    color: #969696;
    border-radius: 8px;
    cursor: pointer; 
    &:hover {
        background: black;
        color: white;
    }
`

const Text = styled.h4`
    font-size: 24px;
    font-family: 'Exo 2', sans-serif;
    font-weight: 400;
    text-align: center;
    margin-top: 30px;
`
const Heading = styled.h4`
    font-size: 24px;
    font-family: 'Exo 2', sans-serif;
    font-weight: 400;
    text-align: left;
    margin-top: 70px;
`