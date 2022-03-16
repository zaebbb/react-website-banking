import styled from 'styled-components'

export const ServicesContainer = styled.div`
    height: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #010606;

    @media (max-width: 768px){
        height: 2300px;
    }

    @media (max-width: 480px){
        height: 3000px;
    }
`
export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #ffffff;
    margin-bottom: 64px;
    text-align: center;

    @media (max-width: 480px){
        font-size: 2rem;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0px 50px;

    @media (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0px 20px;
    }
`

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0px 1px 3px rgba(0,0,0,0.2);
    transition: .5s;
    cursor: pointer;

    &:hover{
        transform: scale(1.05);
        box-shadow: 0px 0px 10px rgba(255,255,255,.5);
        background: #000;
        color: #fff;
    }
`

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`