import React from 'react'
import styled from 'styled-components'
function Navbar() {
    return (
        <div>
            <Container>
                <LeftSide>
            <img src="/Assets/Group 220.png"/>
            <p>organic</p>
            </LeftSide>
            <RightSide>
                <li>Home</li>
                <li>Products</li>
                <li>Blog</li>
                <li>About Us</li>
                <li>Contact</li>
            </RightSide>
            </Container>
        </div>
    )
}

const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100vw;
height: 120px;
padding-left: 10vw;
padding-top: 4vh;

p {
    font-size: 42px;
    font-weight: bold;
    color: #374b5c;
    margin: 10px 10px; 
}
`;
const LeftSide = styled.div`
display: flex;
align-items: center;


`;
const RightSide = styled.div`
display: flex;
justify-content: center;
li {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 40px;
    font-size: 16px;    
    color: #374b5c;  
    
}
li:last-child {
    width: 151px;
    height: 56px;
    margin: 49px;
    padding: 12px 48px 13px 38px;
    border-radius: 10px;
    border: solid 2px #00dbd0;
  }
li:first-child {
    position: relative;
    left: 49px;
    &:after {
        content: "";
        width: 46.8px;
        height: 0;
        z-index: 100;
        position: relative;
        top: 15px;
        right: 44px;
        border: solid 1px #00dbd0;
    }
}
`;
export default Navbar
