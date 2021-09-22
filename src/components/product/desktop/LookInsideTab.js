import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

export default function LookInsideTab() {
    const items = useSelector((state) => state.selectedKit.kit.lookInside.options)

    return (
        <Items >
            {items.map((item, index) => ((
                <Item key={index}>
                    <Image src={item.img} />
                    <Body>
                        <Title>{item.title}</Title>
                        <Content>{item.description}</Content>
                    </Body>
                </Item>
            )))}
        </Items>
    )
}

const Items = styled.ul`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 8px;
`
const Item = styled.li`
    display: flex;
    align-items: center;
    width: 560px;
    height: 204px;
    padding: 5px;
`
const Image = styled.img`
    height: 176px;
    width: 176px;
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
`