import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 80vh;
    width: 70%;
    justify-content: space-around;
`;

export const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    button {
        background: none;
        border: none;
    }
img {
    cursor: pointer;
    padding:3% 0% 3% 0%;
    width: 70px;
    &:hover {
        opacity: 0.5;
    }
   
    &.inative {
        opacity: 0.6;
        :hover {
        opacity: 0.5;
    }
    }
}
`;
export const FormContainer = styled.div`
`;

export const Form = styled.form`
    height: 55vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color:#0C8346;

    input {
        border: none;
        border-bottom: solid 1.5px #0C8346;
    }

    textarea {
        height: 100px;
        border: none;
        border: solid 1.5px #0C8346;
    }

    label {
        font-weight: bold;
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items:center;
        cursor: pointer;
        #isDoneLabel {
            cursor: pointer;
            padding-left:5px;
        }
    }

    #excludeText {
        cursor: pointer;
        font-weight: bold;
        color: #161313;
        :hover {
            opacity: 0.5;
        }
    }

    button {
        align-self: center;
        font-weight: bold;
        color: #FDFFFC;
        background-color: #0C8346;
        height: 34px;
        border-radius: 50px;
        width: 28%;
        border: none;
        cursor: pointer;
    }
`;

export const SomeInputsStyle = styled.div`
    display: flex;
    border: none;
    border-bottom: solid 1.5px #0C8346;
    input {
        padding-left: 2%;
        width: 100%;
        border: none;
    }
    img {
        width: 20px;
        padding-bottom: 5px;
    }
`;
