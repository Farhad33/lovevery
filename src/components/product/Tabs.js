import { useEffect, useState } from 'react'
import styled from 'styled-components'


export default function Tabs({children}) {
    const [activeTab, setActiveTab] = useState(0)


    return (
        <Container>
            <TitleContainer>
                {children.map((Child, index) => (
                    <TabTitle 
                        key={index}
                        onClick={() => setActiveTab(index)}
                        activeTab={activeTab === index} 
                    >
                        {Child.props.title}
                    </TabTitle>
                ))}
            </TitleContainer>
            <BodyContainer>
                {children.map((Child, index) => (
                    <TabBody 
                        key={index}
                        onClick={() => setActiveTab(index)}
                        activeTab={activeTab === index} 
                    >
                        {Child}
                    </TabBody>
                ))}
            </BodyContainer>
        </Container>
    )
}

const TitleContainer = styled.div`
    display: flex;
    max-width: 1128px;
    margin: 1rem auto;
`
const BodyContainer = styled.div`
    display: flex;
    max-width: 1128px;
    margin: 0 auto;
`
const Container = styled.section`
    background-color: #fff;
`
const TabTitle = styled.h2`
    width: 540px;
    height: 50px;
    font-weight: 500;
    font-size: 1.6rem;
    margin: 1rem;
    @media only screen and (max-width: 990px) {
        margin: 1rem 0;
    }
    text-align: center;
    cursor: pointer;
    border-bottom: 4px solid ${({activeTab}) => activeTab ? '#536dc4' : '#f5f7fc'};
`
const TabBody = styled.div`
    display: ${({activeTab}) => activeTab ? 'block' : 'none'};
`