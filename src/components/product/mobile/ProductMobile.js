import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import TopSection from './TopSection'
import Tabs from '../Tabs'
import LookInsideTab from '../desktop/LookInsideTab'
import VideoSection from '../VideoSection'
import ParentTab from '../ParentTab'
import Related from '../Related'
import Description from '../Description'


export default function ProductMobile() {
    const {lookInside, forParents} = useSelector((state) => state.selectedKit.kit)
    
    return (
        <Container>
            <TopSection />
            <Tabs>
                <Description title="About" />
                <ParentTab title="For Parents" />
            </Tabs>
            <VideoSection />
            <Related />
        </Container>
    )
}



const Container = styled.div`
    padding-top: 70px;
    width: 100%;
    min-height: 650px;
`
const Tab = styled.div`
`