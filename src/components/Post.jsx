import { React, useState}  from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import save from '../img/save.png'
import saved from '../img/saved.png'

const Post = (props) => {

    const saving = { save, saved }
    const [selected, setSelected] = useState(false)

    const saveChangeHandler = () => {
        if(!selected) {
            setSelected(true);
        } else {
            setSelected(false)
        }
    };

    return (
        <Wrapper>
            <Image src={props.image} />
            <Save src={!selected ? save : saved} onClick={saveChangeHandler}/>
        </Wrapper>
    )
}

export default Post

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
    width: 30px;
    top: 12px;
    left: 178px;
`