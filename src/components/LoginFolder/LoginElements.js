import styled from 'styled-components'

export const LoginContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #01bf71;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const LoginCard = styled.div`
    
    /* width: 500px; */
    
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    background: white;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;

    .front {
        width: 400px;
            @media (max-width: 480px) {
            width: 300px;
        }
    }

    .input:focus {
        outline: none;
        box-shadow: none;
    }

    .back {
        width: 400px;
            @media (max-width: 480px) {
            width: 300px;
        }
    }

    .btn:focus {
        outline: none;
        box-shadow: none;
    }
`

export const ImageCard = styled.img`
    height: 600px;
    width: 500px;
    background: white;
    padding: 30px;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;

    @media (max-width: 1000px) {
        display: none;
    }
`

