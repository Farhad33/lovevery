import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import { findRelatedKits } from '../../../utils/kit'
import { selectKit } from '../../../features/kitSlice'
import TryNow from '../TryNow'

export default function TopSection() {
    const selectedKit = useSelector((state) => state.selectedKit.kit)
    const kits = useSelector((state) => state.kits.kits)
    const [relatedKits, setRelatedKits] = useState({})
    const [images, setImages] = useState([])
    const [currentImage, setCurrentImage] = useState({img: selectedKit.mainImg})
    let history = useHistory()
    let dispatch = useDispatch()

    useEffect(() => {
        let mainImg = {
            title: '',
            description: '',
            img: selectedKit.mainImg
        }
        setImages([mainImg, ...selectedKit.lookInside.options])
        setRelatedKits(findRelatedKits(kits, selectedKit))
    }, [])

    const arrowOnClick = (direction) => {
        if(direction === 'left' && relatedKits.previous) {
            changePage(relatedKits.previous)
        } else if(direction === 'right' && relatedKits.next) {
            changePage(relatedKits.next)
        }
    }
    const changePage = (targetkit) => {
        let path = targetkit.title.toLocaleLowerCase().split(' ').join('-')
        path = `/products/${path}`
        history.push(path);
        targetkit = {kit: targetkit, msg: ''}
        dispatch(selectKit(targetkit))
    }

    return (
        <Container>
            <GrayBanner>
            <Arrow
                direction="left" 
                onClick={() => arrowOnClick('left')}
                show={relatedKits.previous}
            />
            <KitTitleContainer>
                <KitTitle>{selectedKit.title}</KitTitle>
                <KitTimeFrame>{selectedKit.timeFrame}</KitTimeFrame>
            </KitTitleContainer>
            <Arrow
                direction="right" 
                onClick={() => arrowOnClick('right')}
                show={relatedKits.next}
            />
            </GrayBanner>
            <SlideShowContainer>
                <ImageSlider>
                    <Image src={currentImage.img} />
                    <LookInsideTitle>{currentImage.title}</LookInsideTitle>
                    <LookInsideBody>{currentImage.description}</LookInsideBody>
                </ImageSlider>
                <Dotts>
                    {images.map((image, index) => (
                        <Dott
                            key={index}
                            onClick={() => setCurrentImage(image)}
                            active={currentImage.img === image.img}
                        />
                    ))}
                </Dotts>
            </SlideShowContainer>
            <TryNow />
        </Container>
    )
}

const Image = styled.img`
    width: 350px;
    height: 350px;
`
const ImageSlider = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 430px;
`
const LookInsideTitle = styled.p`
    font-weight: 500;
    font-size: 1.5rem;
    `
const LookInsideBody = styled.p`
    font-weight: 400;
    font-size: 1rem;
    margin: 0 1rem;
`

const Dotts = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem 0;
`
const Dott = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: .5rem;
    border: 1px solid black;
    background-color: ${({active}) => active ? '#514f4e' : 'transparent'};
`
const SlideShowContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Arrow = styled.p`
    display: flex;
    visibility: ${({show}) => show ? 'visible' : 'hidden'};
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    font-size: 1.7rem;
    font-weight: 400;
    cursor: pointer;
    :after {
        content: ${({direction}) => direction === "left" ? "'<'" : "'>'"};
    }
`
const KitTitle = styled.h3`
`
const KitTimeFrame = styled.p`
    font-weight: 400;
`
const KitTitleContainer = styled.div`
    text-align: center;
    margin: 0 2rem;
    width: 300px;
`
const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
const GrayBanner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    height: 100px;
    background-color: #eef1fa;
    width: 100%;
`