import styled from 'styled-components';


export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 200px;
width: 230px;
background-color: #FDFFFC;
border-radius: 10px;
cursor: pointer;
box-shadow: 0px 0px 12px -5px rgba(0,0,0,1);

&:hover{
    opacity: 0.7;
    transition: all 0.3s ease;
}

`;

export const IconContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 80%;
padding-top: 5%;
color:#161313;
img {
    width: 80px;
    padding-bottom: 2%;
}
`;

export const InfoContainer = styled.div`
display: flex;
justify-content: space-between;
padding: 0px 7% 0px 7%;
height: 20%;
font-weight: bold;
color: #0C8346;
`;