import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'


export default function Description() {
    const selectedKit = useSelector((state) => state.selectedKit)
    
    return (
        <Container>
            <Content>{selectedKit.kit.description.content}</Content>
            <Items>
                {selectedKit.kit.description.options.map((item, index) => (
                    <Item key={index}>
                        {item}        
                    </Item>
                ))}
            </Items>
        </Container>
    )
}


const Content = styled.p`
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 400;
    
    @media only screen and (max-width: 990px) {
        padding: 0 1rem;
    }
`

const Items = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1rem 0 1rem 2.3rem;
`
const Item = styled.li`
    list-style-type: none;
    background-image: url('https://cdn.shopify.com/s/files/1/2386/2119/t/12/assets/checkmark-icon.png');
    background-repeat: no-repeat;
    line-height: 30px;
    padding-left: 45px;
    padding-bottom: 4px;
    margin-left: -40px;
`