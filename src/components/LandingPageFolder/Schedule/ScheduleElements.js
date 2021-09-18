import styled from 'styled-components'

export const ScheduleContainer = styled.div`
    /* color: #fff; */
    /* background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')}; */
    background-image: url('https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60');
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const ScheduleWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 730px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const ScheduleRow = styled.div`
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

export const CarouselWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    color: #fff;
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

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 32px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 26px;
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: 24px;
    }
`

