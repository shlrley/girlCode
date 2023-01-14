import { React, useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import logo from '../img/logo.png'

const Signup = () => {

    const navigate = useNavigate();

    function navigator() {
        navigate(`/community`);
    }

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userData);
        setUserData({ name: "", email: "", password: "" });
        navigator();
    };

    useEffect(() => {
        // storing input name
        localStorage.setItem("name", JSON.stringify(userData.name));
        localStorage.setItem("email", JSON.stringify(userData.email));
      }, [userData]);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     axios.post('/signup', userData)
    //     .then(response => {
    //         console.log(response);
    //         setUserData({ name: "", email: "", password: "" });
    //         navigator();
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    // };

    return (
        <Wrapper>
            <Icon src={logo} />
            <Header>Join a community of fashion enthusiasts.</Header>
            <Sign>
                <Sub>Create an account</Sub>
                <Form onSubmit={handleSubmit}>
                    <Input
                    label="Name"
                    type="text" 
                    placeholder="Name"
                    name="name" 
                    value={userData.name}
                    required
                    onChange={handleChange} />
                    <Input
                    label="Email"
                    type="email" 
                    placeholder="Email"
                    name="email"
                    value={userData.email}
                    required
                    onChange={handleChange} />
                    <Input
                    label="Password"
                    type="password" 
                    placeholder="Password"
                    name="password" 
                    value={userData.password}
                    required
                    onChange={handleChange} />
                    <Submit type="submit">Create account</Submit>
                </Form> 
                <Sub style={{ textAlign: 'center', fontSize: '20px', marginTop: '25px' }}>Have an account? <Link to="/signin" style={{ textDecoration: "none" }}>Sign in</Link></Sub>
            </Sign>
        </Wrapper>
    )
}

export default Signup

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 46px;
    margin-bottom: 40px;
`

const Header = styled.h1`
    text-align: center;
    font-size: 36px;
    font-family: 'Alegreya Sans', sans-serif;
    font-weight: 500;
`

const Sub = styled.h3`
    text-align: left;
    font-size: 24px;
    font-weight: 500;
    font-family: 'Exo 2', sans-serif;
`

const Sign = styled.div`
    align-self: center;
    display: flex;
    flex-direction: column;
    width: 600px;
`

const Input = styled.input`
    border: 1px solid black;
    text-color: #969696;
    padding: 24px;
    font-size: 22px;
    font-family: 'Exo 2', sans-serif;
    border-radius: 8px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: -6px;
    gap: 30px;
`

const Submit = styled.button`
    border-color: transparent;
    font-size: 24px;
    font-family: 'Exo 2', sans-serif;
    text-align: center;
    padding: 24px;
    margin-top: 16px;
    color: #969696;
    border-radius: 8px;
    cursor: pointer; 
    &:hover {
        background: black;
        color: white;
    }
`

const Icon = styled.img`
    width: 70px;
    align-self: center;
`