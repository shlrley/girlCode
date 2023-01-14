import { React, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar.jsx';
import PostItem from '../components/PostItem.jsx';
import Upload from '../components/Upload.jsx';

import arrow from '../img/arrow.png';

const Post = () => {

    const [seen, setSeen] = useState(false);

    const togglePop = () => {
        setSeen(!seen);
    };

    const posts = [{image: 'https://aritzia.scene7.com/is/image/Aritzia/large/f20_01_a06_79467_14808_on_c.jpg'},
    {image: 'https://aritzia.scene7.com/is/image/Aritzia/f20_03_a06_80214_15950_on_a?wid=1200'},
    {image: 'https://aritzia.scene7.com/is/image/Aritzia/f20_04_a06_79697_1274_on_a?wid=1200'},
    {image: 'https://aritzia.scene7.com/is/image/Aritzia/s21_03_a06_81788_1311_on_a?wid=1200'},
    {image: 'https://aritzia.scene7.com/is/image/Aritzia/medium/f20_00_a06_78786_19269_on_a.jpg'},
    {image: 'https://i.ebayimg.com/images/g/JP4AAOSwA~JfzafK/s-l500.jpg'}]

    const name = localStorage.getItem('name');

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
                    <Image src='https://aritzia.scene7.com/is/image/Aritzia/f20_03_a06_80351_19564_on_a?wid=1200' />
                </Col>
                <Col2>
                    <Desc>
                        {/* <Title>Contour Longsleeve</Title>*/}
                        <Subtitle>{name.substring(1, name.length-1)}</Subtitle> 
                        <Sub>My fit check for today!!</Sub>
                        <Subtitle>Clothing articles</Subtitle> 
                        <Articles>
                            <Article>
                                <Img src='https://aritzia.scene7.com/is/image/Aritzia/f20_03_a06_80351_19564_off_a?wid=1500' />
                                <SmallT onClick={(e)=> {
                                    window.open("https://www.aritzia.com/en/product/cozy-fleece-mega-sweatpant/91896.html?dwvar_91896_color=19451_2", '_blank')
                                }}>Cozy Fleece Mega Sweatpant</SmallT>
                                <SmallT style={{ fontSize: '14px', marginTop: '-10px'}}>Color: Chrome</SmallT>
                            </Article>
                            <Article>
                                <Img src='https://aritzia.scene7.com/is/image/Aritzia/s23_03_a01_95025_4425_off_a?wid=1500' />
                                <SmallT onClick={(e)=> {
                                    window.open("https://www.aritzia.com/en/product/ribbed-waist-t-shirt/95025.html?dwvar_95025_color=4425", '_blank')
                                }}>Ribbed Waist T-Shirt</SmallT>
                                <SmallT style={{ fontSize: '14px', marginTop: '-10px'}}>Color: Chrome</SmallT>
                            </Article>
                        </Articles>
                        <Text>Comments &nbsp; ∨</Text>
                    </Desc>
                </Col2>
            </Item>
            <Heading>Others also wear</Heading>
            <Images>
                {posts.map((post) => <PostItem image={post.image} />)}
            </Images>
            {seen ? <Upload toggle={togglePop} /> : null}
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
    flex: 40%;
`

const Col2 = styled.div`
    flex: 60%;
`

const Images = styled.div`
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 30px;
`

const Articles = styled.div`
    display: flex;
    gap: 36px;
    margin-top: -15px;
`

const Article = styled.div`
    width: 160px;
`

const Img = styled.img`
    width: 160px;
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
    margin-top: -1px;
`

const Sub = styled.h6`
    font-size: 24px;
    font-family: 'Exo 2', sans-serif;
    margin-top: -26px;
    font-weight: 400;
    margin-bottom: 30px;
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
`

const SmallT = styled.p`
    font-size: 16px;
    font-family: 'Exo 2', sans-serif;
    font-weight: 400;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`

const Heading = styled.h4`
    font-size: 24px;
    font-family: 'Exo 2', sans-serif;
    font-weight: 400;
    text-align: left;
    margin-top: 70px;
`