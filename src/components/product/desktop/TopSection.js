import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Description from '../Description'
import TryNow from '../TryNow'

export default function ProductDesktop() {
    const selectedKit = useSelector((state) => state.selectedKit)
    
    return (
        <TopSection>
            <TopSectionLeft>
                <MainImage src={selectedKit.kit.mainImg} />
            </TopSectionLeft>
            <TopSectionRight>
                <Title>{selectedKit.kit.title}</Title>
                <TimeFrame>{selectedKit.kit.timeFrame}</TimeFrame>
                <Description />
                <TryNow />
            </TopSectionRight>

        </TopSection>
    )
}


const TopSection = styled.section`
    display: flex;
    justify-content: space-evenly;
    background-color: #f9f7f4;
`
const TopSectionLeft = styled.div`
    width: 55vw;
`
const TopSectionRight = styled.div`
    width: 45vw;
    height: 100%;
    margin: auto;
`
const Title = styled.h1`
    font-size: 2.2rem;
`
const TimeFrame = styled.p`
    font-weight: 500;
    font-size: 1.2rem;
    margin-bottom: 1rem;
`

const MainImage = styled.img`
    min-width: 60%;
    max-width: 80%;
    height: 100%;
    object-fit: contain;
`