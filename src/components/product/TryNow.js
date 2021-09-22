import styled from 'styled-components'

export default function TryNow() {
    return (
        <Container>
            <TopContent>Ships Every 2 Months | $80 per Play Kit</TopContent>
            <TryNowButton>Try Now</TryNowButton>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 400;
`

const TopContent = styled.p`
    font-size: 1.1rem;
`

const TryNowButton = styled.button`
    padding: 1rem;
    max-width: 320px;
    width: 100%;
    height: 50px;
    color: #fff;
    background-color: #536dc4;
    font-size: 18px;
    border-radius: 4px;
`