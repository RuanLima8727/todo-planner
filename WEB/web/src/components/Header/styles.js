import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
height: 12vh;
background-color:#161313;
border-bottom: solid #0C8346 5px;
`

export const LeftSide = styled.div`
display:flex;
width: 50%;
//background-color:red;
padding-left: 3%;
color: #FDFFFC;
align-items: center;

img {
    height: 70%;
}
`

export const RightSide = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
width: 50%;
//background-color:blue;
a{
    font-weight: bold;
    padding-right: 3%;
    color: #FDFFFC;
    &:hover {
        color: #0C8346;
    }

   &#notification{ 
    img {
        width: 40px;
    }
    span {
        background-color:  #FDFFFC;
        color: #161313;
        padding: 3px 7px;
        border-radius: 50%;
        position: relative;
        top: -20px;
        right: 12px;
    }
    &:hover {
            opacity:0.5;
        }
    }
}

`

