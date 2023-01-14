import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar.jsx';
import PostItem from '../components/PostItem.jsx';
import Upload from '../components/Upload.jsx';

const Community = () => {

    const test = [{image: 'https://aritzia.scene7.com/is/image/Aritzia/f20_03_a06_80351_19564_on_a?wid=1200'},
    {image: 'https://aritzia.scene7.com/is/image/Aritzia/large/f20_01_a06_79467_14808_on_c.jpg'},
    {image: 'https://aritzia.scene7.com/is/image/Aritzia/f20_03_a06_80214_15950_on_a?wid=1200'},
    {image: 'https://aritzia.scene7.com/is/image/Aritzia/f20_04_a06_79697_1274_on_a?wid=1200'},
    {image: 'https://aritzia.scene7.com/is/image/Aritzia/s21_03_a06_81788_1311_on_a?wid=1200'},
    {image: 'https://aritzia.scene7.com/is/image/Aritzia/medium/f20_00_a06_78786_19269_on_a.jpg'},
    {image: 'https://i.ebayimg.com/images/g/JP4AAOSwA~JfzafK/s-l500.jpg'},
    {image: 'https://aritzia.scene7.com/is/image/Aritzia/large/f20_00_a06_78786_19269_on_d.jpg'},
    {image: 'https://i.ebayimg.com/images/g/C5IAAOSw-11fzafY/s-l1600.jpg'},]

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