import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar.jsx';
import PostItem from '../components/PostItem.jsx';
import Upload from '../components/Upload.jsx';

const Community = () => {

    const test = [{image: 'https://aritzia.scene7.com/is/image/Aritzia/f22_01_a01_83131_18914_on_a?wid=1500'},
    {image: 'https://aritzia.scene7.com/is/image/Aritzia/f22_01_a01_83131_18914_on_a?wid=1500'},
    {image: 'https://aritzia.scene7.com/is/image/Aritzia/f22_01_a01_83131_18914_on_a?wid=1500'},
    {image: 'https://aritzia.scene7.com/is/image/Aritzia/f22_01_a01_83131_18914_on_a?wid=1500'},
    {image: 'https://aritzia.scene7.com/is/image/Aritzia/f22_01_a01_83131_18914_on_a?wid=1500'},
    {image: 'https://aritzia.scene7.com/is/image/Aritzia/f22_01_a01_83131_18914_on_a?wid=1500'}]

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    const [seen, setSeen] = useState(false);

    const togglePop = () => {
        setSeen(!seen);
    };

    return (
        <Wrapper>
            <Navbar />
            <Feed>
                <Top>
                    <Header>Community Feed</Header>
                    <Button onClick={togglePop}>Upload</Button>
                </Top>
                <Images>
                    {test.map((post) => <PostItem key={post.id} image={post.image} />)}
                </Images>
            </Feed>
            {seen ? <Upload toggle={togglePop} /> : null}
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