import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import { findRelatedKits } from '../../utils/kit'
import { selectKit } from '../../features/kitSlice'


export default function Related() {
    const kits = useSelector((state) => state.kits.kits)
    const kit = useSelector((state) => state.selectedKit.kit)
    const [relatedKits, setRelatedKits] = useState([])
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        let relatedKits = findRelatedKits(kits, kit)
        relatedKits = Object.values(relatedKits)
        setRelatedKits(relatedKits)
    }, [])

    const itemOnclick = (selectedRalatedKit) => {
        let path = selectedRalatedKit.title.toLocaleLowerCase().split(' ').join('-')
        path = `/products/${path}`
        history.push(path);
        let selectedKit = {kit: selectedRalatedKit, msg: ''}
        dispatch(selectKit(selectedKit))
    }

    return (
        <Container>
            <TopTitles>Related Play Kits</TopTitles>
            <Items>
            {relatedKits.map((kit, index) => (
                <Item key={index} onClick={() => itemOnclick(kit)}>
                    <Image src={kit.mainImg} />
                    <ItemTitle>{kit.title}</ItemTitle>
                    <ItemTime>{kit.timeFrame}</ItemTime>
                </Item>
            ))}
            </Items>
        </Container>
    )
}

const Image = styled.img`
    width: 100%;
`
const Container = styled.section`
    max-width: 1145px;
    margin: 7rem auto;
`
const Items = styled.ul`
    justify-content: space-between;
    @media only screen and (max-width: 990px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
const Item = styled.li`
    width: 480px;
    height: 534px;
`
const TopTitles = styled.h1`
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
    margin-left: 1rem;
`
const ItemTime = styled.p`
    font-weight: 400;
`
const ItemTitle = styled.h3`
    font-weight: 500;
`