import styled from 'styled-components'

export const FaqContainer = styled.div`
    color: #fff;
    background: #f9f9f9;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const FaqWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 930px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const FaqRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-gap: 0 200px;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    width: 100%;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    color: #000;
`
export const TopLine = styled.p`
    color: #01bf71;
    font-size: 20px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 26px;
    

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`
export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`
