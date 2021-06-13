import React from 'react'
import styled from 'styled-components'
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';

function Reviews() {
    return (
        <div>
            <Container>
                <Top>
                    <Comma src="/Assets/Group 86.png" />
                    <Profile src="/Assets/profile.png" />
                    <h1>Jane Doe</h1>
                    <Star>
                    <CustomStar />
                    <CustomStar />
                    <CustomStar />
                    <CustomStar />
                    <CustomStar />
                    </Star>
                    <p>Thank you for all the amazing produce and products you deliver each week…
                        you make my life so easy an bring goodness into our family eating. 
                        I’ve been roasting a lot of brussel sprouts and</p>
                    <Circle>
                        
                        <FiberManualRecordRoundedIcon />
                        <CustomCircle />
                        <CustomCircle />
                        <CustomCircle />
                    </Circle>
                </Top>
                <Leaves src="/Assets/Group 134.png" />
                <Bottom>
                 <h1>Subscribe to Our Newsletter</h1>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.</p>
                 <Email>
                 <input type="text" id="lname" name="lastname" placeholder="Enter your email address"/>
                 <button>
                    SUBMIT
                 </button>
                 </Email>
                </Bottom>
                <Blog>
                    <img src="Assets/group 114.png"/>
                    <h1>Read Our Blog</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua.</p>
                </Blog>
                <BlogPost>
                    <li>
                        <img src="/Assets/Blogpost1.png" />
                        <h1>Blog Post One</h1>
                        <p>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed
                            do eiusmod.</p>
                        <span>Read More</span>
                    </li>
                    <li>
                        <img src="/Assets/Blogpost2.png" />
                        <h1>Blog Post One</h1>
                        <p>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed
                            do eiusmod.</p>
                        <span>Read More</span>
                    </li>
                    <li>
                        <img src="/Assets/Blogpost4.png" />
                        <h1>Blog Post One</h1>
                        <p>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed
                            do eiusmod.</p>
                        <span>Read More</span>
                    </li>
                </BlogPost>
            </Container>
            
        </div>
    )
}

const Container = styled.div`
display: flex;
justify-content: center;
width: 100vw;
height: 100%;
overflow: hidden;

flex-direction: column;

`;
const Top = styled.div`
display: flex;
flex-direction: column;
align-items: center;
p {
  width: 542px;
  height: 101px;
  font-size: 16px;
  line-height: 2.5;
  text-align: center;
  color: #374b5c;
} 
`;
const Comma = styled.img`
width: 60px;
height: 50px;
margin-top: 23px;
`;
const Profile = styled.img`
width: 70px;
height: 70px;
border-radius: 50%;
margin-top: 50px;
`;
const Star = styled.div``;
const CustomStar = styled(StarOutlineIcon)`
width: 19.7px;
height: 19.9px;
color: #00dbd0;
margin: 10px 0;
`;

const Circle = styled.div`
margin-top: 40px;
color: #00dbd0;
`;
const CustomCircle = styled(FiberManualRecordOutlinedIcon)`

`;
const Leaves = styled.img `
  width: 1000px;
  height: 1200px;
  overflow-y: hidden;
  z-index: -2;
  position: absolute;
  right: 80vw;
  top: 160vh;
`;

const Bottom = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 100px;
h1 {
    font-weight: normal;
    font-size: 36px;
    line-height: 1.33;
    text-align: left;
    color: #374b5c;
}
p {
    width: 568px;
    height: 42px;
    text-align: center;
    font-size: 16px;
    margin-top: 16px;
}
`;

const Email = styled.div`
margin: 50px 0;
width: 569px;
height: 109px;
display: flex;
input {
    width: 499px;
    height: 69px;
    border: none;
    &::placeholder {
        font-size: 18px;
        padding: 10px;
    }
}
button {
    margin-left: 20px;
    width: 167px;
    height: 69px;
    color: white;
    font-size: 18px;
    border: none;
    font-weight: 400;
    padding: 21px 45.5px 24px;
    border-radius: 30px;
    background-color: #00dbd0;
    cursor: pointer;
}
`;

const Blog = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #374b5c;
h1 {
    font-size: 36px;
    font-weight: 400;
    padding: 8px 0;
}
p {
  width: 568px;
  height: 42px;
  font-size: 14px;
  font-weight: 200;
  line-height: 1.31;
  letter-spacing: normal;
  text-align: center;
}
`;

const BlogPost = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 40px;

li {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 50px;
    &:after {
        content: "";
        width: 36px;
        height: 3px;
        position: relative;
        top: 20px;
        background: #00dbd0;
    }
}
img {
    width: 278px;
    height: 195px;
    border-radius: 50px 50px 0 0;
}
p {
    width: 190px;
    height: 57px;
    margin: 9px 44px 11px;
    font-size: 14px;
    line-height: 1.36;
    letter-spacing: normal;
    text-align: center;
    color: #374b5c;
}
h1 {

  margin: 18px 83px 9px;
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color:  #00dbd0;
}
span {
  font-size: 14px;
  text-align: center;
  color: #374b5c;
}

`;
export default Reviews
