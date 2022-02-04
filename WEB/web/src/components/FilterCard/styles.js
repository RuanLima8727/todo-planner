import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 80px;
    width: 210px;
    border-radius: 10px;
    cursor: pointer;
    background-color: ${props => props.actived ? '#0C8346' : '#161313'};
    :hover {
        background-color: #0C8346;
    }   
`

export const FilterCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    color: #FFF;
    padding: 5%;

    img{
        height:25px;
        width: 25px;
    }

    p{
        font-size: 20px;
        color: #FDFFFC;
        align-self: flex-end;
        font-weight: bold;
    }
`
