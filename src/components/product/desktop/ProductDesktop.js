import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import TopSection from './TopSection'
import Tabs from '../Tabs'
import LookInsideTab from './LookInsideTab'
import VideoSection from '../VideoSection'
import ParentTab from '../ParentTab'
import Related from '../Related'


export default function ProductDesktop() {
    const {lookInside, forParents} = useSelector((state) => state.selectedKit.kit)
    
    return (
        <Container>
            <TopSection />
            <Tabs>
                <LookInsideTab title={lookInside.tabTitle} />
                <ParentTab title={forParents.tabTitle} />
            </Tabs>
            <VideoSection />
            <Related />
        </Container>
    )
}



const Container = styled.main`
    padding-top: 70px;
    width: 100%;
    min-height: 650px;
`
const Tab = styled.div`
`