import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import heart from '../img/heart.png'
import person from '../img/person.png'
import search from '../img/search.png'
import google from '../img/google.png'

const Navbar = () => {

    return (
        <Wrapper>
            <Link to ="/community"><Icon src={google} /></Link>
            <Icons>
                <Icon src={search} />
                <Icon src={heart} />
                <Icon src={person} />
            </Icons>
        </Wrapper>
    )
}

export default Navbar

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    width: 1200px;
`

const Icons = styled.div`
    display: flex;
    gap: 25px;
`

const Icon = styled.img``