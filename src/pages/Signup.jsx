import { React, useState, useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { DetailsContext } from '../App.js'
import { useNavigate } from 'react-router-dom';


const Signup = () => {


    const navigate = useNavigate();

    function navigator(event) {
        navigate(`/${event.currentTarget.id}`)
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
      };

    return (
        <Wrapper>
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
                    onChange={handleChange} />
                    <Input
                    label="Email"
                    type="email" 
                    placeholder="Email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange} />
                    <Input
                    label="Password"
                    type="password" 
                    placeholder="Password"
                    name="password" 
                    value={userData.password}
                    onChange={handleChange} />
                    {/* <Link to="/community" style={{ textDecoration: "none" }}> */}
                        <Submit type="submit">Create account</Submit>
                    {/* </Link> */}
                </Form> 
                <Sub style={{ textAlign: 'center', fontSize: '20px', marginTop: '25px' }}>Have an account? <Ahref>Sign in</Ahref></Sub>
            </Sign>
        </Wrapper>
    )
}

export default Signup

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 75px;
    margin-bottom: 40px;
`

const Ahref = styled.a``

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
    text-color: #969696;
    border-radius: 8px;
`