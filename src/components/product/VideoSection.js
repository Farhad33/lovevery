import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

export default function VideoSection() {
    const {video} = useSelector((state) => state.selectedKit.kit)

    return (
        <Container>
            <Video
                src={video}
                controls 
                playsinline 
                allowfullscreen 
                type="video/mp4" 
                disableremoteplayback>
            </Video>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 3rem 0;
`
const Video = styled.video`
    max-width: 960px;
    width: 100%;
`