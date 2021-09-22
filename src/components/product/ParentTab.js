import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

export default function ParentTab() {
    const {mainItem, options} = useSelector((state) => state.selectedKit.kit.forParents)

    return (
        <Container>
            <ContainerTitle>Parent Resources</ContainerTitle>

            <Item selectItem>
                <ImageTop src={mainItem.img} />
                <Body>
                    <Title>{mainItem.title}</Title>
                    <Content>{mainItem.description}</Content>
                </Body>
            </Item>
            <Items >
                {options.map((item, index) => ((
                    <Item key={index}>
                        <ImageBottom src={item.img} />
                        <Body>
                            <Title>{item.title}</Title>
                            <Content>{item.description}</Content>
                        </Body>
                    </Item>
                )))}
            </Items>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
`

const ContainerTitle = styled.h1`
    margin-bottom: 3rem;
    font-size: 2rem;
    font-weight: 500;
`

const Items = styled.ul`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 8px;
    @media only screen and (max-width: 990px) {
        grid-template-columns: repeat(1,1fr);
    }
`
const Item = styled.li`
    display: flex;
    ${({selectItem}) => selectItem ? 'align-items: center;' : ''};
    width: ${({selectItem}) => selectItem ? '' : '560px'};
    height: 204px;
    padding: 5px;
    @media only screen and (max-width: 990px) {
        ${({selectItem}) => selectItem ? 'height: 370px;' : ''};
        ${({selectItem}) => selectItem ? 'flex-direction: column;' : ''};
        ${({selectItem}) => selectItem ? 'margin-bottom: 3rem;' : ''};
        align-items: unset;
        width: unset;
    }
`
const ImageTop = styled.img`
    height: 300px;
    width: 300px;
    @media only screen and (max-width: 990px) {
        height: 150px;
        width: 150px;
    }
`
const ImageBottom = styled.img`
    height: 60px;
    width: 60px;
`
const Title = styled.h2`
    font-weight: 500;
    font-size: 1.5rem;
`
const Content = styled.p`
    font-weight: 400;
    font-size: 1.1rem;
`
const Body = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 5px;
    width: 55%;
    @media only screen and (max-width: 600px) {
        width: 100%;
        padding: unset;
    }
`