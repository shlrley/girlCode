import { React, useState}  from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import save from '../img/heart.png'
import saved from '../img/filled.png'

const PostItem = (props) => {

    const [selected, setSelected] = useState(false)
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseOver = () => {
        setIsHovering(true);
    }

    const handleMouseOut = () => {
        setIsHovering(false);
    }

    const saveChangeHandler = () => {
        if(!selected) {
            setSelected(true)
        } else {
            setSelected(false)
        }
    }

    return (
        <Link to='/post'>
            <Wrapper onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <Image src={props.image} />
                {isHovering && (<Save src={!selected ? save : saved} onClick={saveChangeHandler} />)}
            </Wrapper>
        </Link>
    )
}

export default PostItem

const Wrapper = styled.div`
    position: relative;
    top: 0;
    left: 0;
`

const Image = styled.img`
    position: relative;
    width: 216px;
    top: 0;
    left: 0;
`

const Save = styled.img`
    position: absolute;
    width: 28px;
    top: 12px;
    left: 176px;
    cursor: pointer;
`