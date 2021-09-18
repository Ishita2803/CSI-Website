import React from 'react'
import { SponsorsContainer, SponsorsWrapper, SponsorsH1, SponsorsH2, SponsorsP, SponsorsCard, SponsorsIcon} from './SponsorsElements'
import Icon1 from './icons8-geeksforgeeks.svg'
import Icon2 from './icons8-geeksforgeeks.svg'
import Icon3 from './icons8-geeksforgeeks.svg'
import Icon4 from './collegepondicon.png'
import Icon5 from './collegepondicon.png'
import Icon6 from './collegepondicon.png'
import Icon7 from './download.png'
import Icon8 from './sashido.jfif'
import Icon9 from './wolfram.png'

const Sponsors = (props) => {
    return (
        <>
        <SponsorsContainer id={props.id}>
            <SponsorsH1>Technical Sponsors</SponsorsH1>
                
                <SponsorsWrapper>
                    <a style={{textDecoration: 'none', color: 'black'}} rel="noreferrer" href="https://www.geeksforgeeks.org/" target="_blank">
                    <SponsorsCard>
                        <SponsorsIcon src={Icon1}/>
                        <SponsorsH2>Geeks For Geeks</SponsorsH2>
                        <SponsorsP>A Computer Science portal for geeks. It contains well written, well thought and well explained computer science and programming articles.</SponsorsP>
                    </SponsorsCard>
                    </a>
                    <a style={{textDecoration: 'none', color: 'black'}} rel="noreferrer" href="https://www.geeksforgeeks.org/" target="_blank">
                    <SponsorsCard>
                        <SponsorsIcon src={Icon2}/>
                        <SponsorsH2>Geeks For Geeks</SponsorsH2>
                        <SponsorsP>A Computer Science portal for geeks. It contains well written, well thought and well explained computer science and programming articles, ...</SponsorsP>
                    </SponsorsCard>
                    </a>
                    <SponsorsCard>
                        <SponsorsIcon src={Icon3}/>
                        <SponsorsH2>Geeks for Geeks</SponsorsH2>
                        <SponsorsP>A Computer Science portal for geeks. It contains well written, well thought and well explained computer science and programming articles, ...</SponsorsP>
                    </SponsorsCard>
                    
                </SponsorsWrapper>

        </SponsorsContainer>
        
        <SponsorsContainer>
            <SponsorsH1>Educational Sponsors</SponsorsH1>
                
                <SponsorsWrapper>
                    <a style={{textDecoration: 'none', color: 'black'}} rel="noreferrer" href="https://collegepond.com/" target="_blank">
                    <SponsorsCard>
                        <SponsorsIcon src={Icon4}/>
                        <SponsorsH2>College Pond</SponsorsH2>
                        <SponsorsP>A Computer Science portal for geeks. It contains well written, well thought and well explained computer science and programming articles.</SponsorsP>
                    </SponsorsCard>
                    </a>
                    <SponsorsCard>
                        <SponsorsIcon src={Icon5}/>
                        <SponsorsH2>College Pond</SponsorsH2>
                        <SponsorsP>A Computer Science portal for geeks. It contains well written, well thought and well explained computer science and programming articles, ...</SponsorsP>
                    </SponsorsCard>
                    <SponsorsCard>
                        <SponsorsIcon src={Icon6}/>
                        <SponsorsH2>College Pond</SponsorsH2>
                        <SponsorsP>A Computer Science portal for geeks. It contains well written, well thought and well explained computer science and programming articles, ...</SponsorsP>
                    </SponsorsCard>
                </SponsorsWrapper>
            
            
        </SponsorsContainer>

        <SponsorsContainer>
            <SponsorsH1>Other Sponsors</SponsorsH1>
                
                <SponsorsWrapper>
                    <a style={{textDecoration: 'none', color: 'black'}} rel="noreferrer" href="https://infigon.edumilestones.com/" target="_blank">
                    <SponsorsCard>
                        <SponsorsIcon src={Icon7}/>
                        <SponsorsH2>Infigon</SponsorsH2>
                        <SponsorsP>Infigon Futures is India’s leading Artificial Intelligence-based education and career mentorship platform.</SponsorsP>
                    </SponsorsCard>
                    </a>
                    <a style={{textDecoration: 'none', color: 'black'}} rel="noreferrer" href="https://www.sashido.io/en/" target="_blank">
                    <SponsorsCard>
                        <SponsorsIcon src={Icon8}/>
                        <SponsorsH2>Sashido</SponsorsH2>
                        <SponsorsP>SashiDo.io is a serverless API development platform with scalable json rest and graphql apis, headless cms, built with nodejs, mongodb etc.</SponsorsP>
                    </SponsorsCard>
                    </a>
                    <a style={{textDecoration: 'none', color: 'black'}} rel="noreferrer" href="https://www.wolfram.com/" target="_blank">
                    <SponsorsCard>
                        <SponsorsIcon src={Icon9}/>
                        <SponsorsH2>Wolfram</SponsorsH2>
                        <SponsorsP>Wolfram uniquely unifies algorithms, data, linguistics and deployment—enabling powerful workflows across desktop, cloud, server and mobile.</SponsorsP>
                    </SponsorsCard>
                    </a>
                </SponsorsWrapper>
            
            
        </SponsorsContainer>
        </>
    )
}

export default Sponsors
