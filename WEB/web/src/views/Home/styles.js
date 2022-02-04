import styled from 'styled-components'

export const Container = styled.div`

`
export const FilterCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2% 2% 0px 2%;
    flex-wrap: wrap;

    button {
        background: none;
        border: none;
    }
`

export const TaskCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2% 2% 0px 2%;
    flex-wrap: wrap;
`
export const Title = styled.div`
    width: 100%;
    border-bottom: 3px solid #161313;
    display: flex;
    justify-content: center;
    margin: 1% 0%;

    h3 {
        color:#161313;
        position: relative;
        background: #fff;
        top: 12px;
        padding: 0px 20px;
    }
`;
