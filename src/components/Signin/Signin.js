import styled from 'styled-components'

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #ffffff;
`
export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 8px;
`
export const FormButton = styled.button`
    background: #F55431;
    padding: 16px 0px;
    border: none;
    border-radius: 8px;
    color: #ffffff;
    font-size: 20px;
    cursor: pointer;
`
export const Text = styled.span`
    text-align: center;
    color: #ffffff;
    margin-top: 24px;
    font-size: 14px;
`

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #ffffff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`

export const Form = styled.form`
    background: #010101;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 8px;
    box-shadow: 0px 1px 3px rgba(0,0,0,0.9);

    @media (max-width: 480px){
        padding: 32px 32px; 
    }
`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 480px){
        padding: 10px;
    }
`


export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 400px){
        height: 80%;
    }
`

export const Container = styled.div`
    min-height: 692px;
    position: relative;
    padding-top: 120px;
    z-index: 0;
    background: linear-gradient(
        180deg,
        #C44427 0%,
        #F55431 100%
    );
`