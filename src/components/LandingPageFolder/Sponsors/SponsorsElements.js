import styled from 'styled-components'

export const SponsorsContainer = styled.div`
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
    border-bottom: 2px solid gray;
    box-shadow: 0px 24px 3px -24px gray;

    @media screen and (max-width: 768px) {
        height: 1600px;

    }

    @media screen and (max-width: 480px) {
        height: 1800px;
    }
`

export const SponsorsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding-top: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

`

export const SponsorsCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const SponsorsIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const SponsorsH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const SponsorsH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    text-decoration: none;
    @media screen and (max-width: 480px) {
        font-size: 0.9rem;
    }
`

export const SponsorsP = styled.p`
    font-size: 1rem;
    text-align: center;
    text-decoration: none !important;
    @media screen and (max-width: 480px) {
        font-size: 0.9rem;
    }
`