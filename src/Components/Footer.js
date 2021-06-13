import React from 'react'
import styled from 'styled-components'
function Footer() {
    return (
        <div>
            <Container >
                {/* <Background src="/Assets/group 229.png" /> */}
                <Row>
                <ColumnOne>
                <img src="/Assets/Group 225.png" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiusmod tempor </p>
                <span>© Copyright 2020 Nature</span>
                </ColumnOne>
                <ColumnTwo>
                    <h1>Information</h1>
                    <hr />
                    <div>
                    <ul>
                    <li>
                        About Us
                    </li>
                    <li>
                        Products
                    </li>
                    <li>
                        Contact Us
                    </li>
                    <li>
                        Terms of Service
                    </li>
                    </ul>
                    <ul>
                    <li>
                        About Us
                    </li>
                    <li>
                        Products
                    </li>
          
                    </ul>
                    </div>
                </ColumnTwo>
                <ColumnThree>
                <h1>Follow Us</h1>
                <ul>
                <li>
                    <img src="/Assets/S1.png"/>
                </li>
                <li>
                    <img src="/Assets/S2.png"/>
                </li>
                <li>
                    <img src="/Assets/S3.png"/>
                </li>
                <li>
                    <img src="/Assets/S1.png"/>
                </li>
                </ul>
                
                </ColumnThree>
                </Row>
            </Container>
        </div>
    )
}
const Container = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/Assets/Group 229.png");
  height: 400px;
  background-position: top;
  margin-top: 70px;
`;


const ColumnOne = styled.div`
padding: 10px;
img {
    margin: 20px 30px;
}
p {
    margin: 20px 30px;
    width: 19.938rem;
    height: 2.75rem;
    color: white;
    font-size: 0.875rem;
}
span {
    margin: 20px 30px;
      color: white;
      font-weight: bold;
}
`;
const ColumnTwo = styled.div`
width: 47.588rem;
height: 16.524rem;
color: white;
h1 {
    font-size: 1rem;
    margin: 30px 40px;
}
li {
    list-style: none;
    margin: 10px 40px;
}
hr {
    width: 100px;
    height: 4px;
    position: relative;
    bottom: 10px;
    left: 40px;
    background: #00dbd0;
    border: none;
    border-radius: 10px;
}

div {
    display: flex;
}
`;
const ColumnThree = styled.div`
color: white;
position: relative;
right: 100px;
top: 25px;
ul {
    display: flex;
    
}
li {
    margin-top: 20px;
    padding-right: 20px;
    list-style:none;

}
`;
const Row = styled.div`
display: flex;
justify-content: center;
position: relative;
top: 100px;
left: 30px;
background: url("Group 229.jpg");
background-size: contain;
background-repeat: no-repeat;
`;
export default Footer
