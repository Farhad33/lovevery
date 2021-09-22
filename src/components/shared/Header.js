import { useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

export default function Header() {
    const [hamClicked, setHamClicked] = useState(false)

    const handleHamClick = () => {
        setHamClicked(!hamClicked)
    }
    return (
        <Container>
            <HamMenu onClick={handleHamClick} hamClicked={hamClicked}>
                <Line hamClicked={hamClicked} show={true} primary={true}/>
                <Line hamClicked={hamClicked} show={true}/>
                <Line show={!hamClicked}/>
            </HamMenu>
            <Items position={'left'} hamClicked={hamClicked}>
                <Item>The Play Kits</Item>
                <Item>Shop</Item> 
                <Item>About Us</Item>
            </Items>
            <Link to="/">
                <Logo><Image src={'https://cdn.shopify.com/s/files/1/2386/2119/t/12/assets/logo-green.svg'}/></Logo>
            </Link>
            <Items position={'right'} hamClicked={hamClicked}>  
                <Item>Sign In</Item>
                <Item>Cart<Cart>0</Cart></Item>
            </Items>
            <CartWrapper><Cart>0</Cart></CartWrapper>
            <BlueItems hamClicked={hamClicked}>
                <Item>The Looker</Item>
                <Item>The Charmer</Item>
                <Item>The Senser</Item>
                <Item>The Inspector</Item>
                <Item>The Explorer</Item>
                <Item>The Thinker</Item>
                <Item>The Play Kits</Item>
                <Item>Shop</Item> 
                <Item>About Us</Item>
                <Item>Help</Item>
                <Item>Sign In</Item>
                <Item>Cart<Cart show={true}>0</Cart></Item>
            </BlueItems>
        </Container>
    )
    
}

const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    box-shadow: 0 1px 10px 0 rgb(0 0 0 / 10%);
    display: grid;
    grid-template-columns: 40% 20% 40%;
    height: 70px;
    align-items: center;
    @media (max-width: 830px) {
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
    }
`
const Logo = styled.div`
    text-align: center;
`
const Image = styled.img`
    width: 167px;
    height: 18px;
`

const Items = styled.ul`
    ${({position}) => `padding-${position}: 2rem`};
    ${({position}) => `justify-content: flex-${position === 'right' ? 'end' : 'start'};`};
    color: #514f4e;
    @media (max-width: 1018px) {
        ${({position}) => `padding-${position}: 1rem`};
    }
    @media (max-width: 830px) {
        display: none;
    }
`

const Item = styled.li`
    padding: 0 20px;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;
    @media (max-width: 1018px) {
        padding: 0 10px;
    }
`

const CartWrapper = styled.div`
    display: none;
    @media (max-width: 830px) {
        display: block;
    }
`
const Cart = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 50%;
    width: 38px;
    height: 38px;
    margin-left: 10px;
    font-size: 16px;
    font-weight: 500;
`

const HamMenu = styled.div`
    display: none;
    width: 26px;
    height: 21px;
    ${({hamClicked}) => hamClicked ? 'padding-top: 10px': ''};
    @media (max-width: 830px) {
        display: block;
    }
`
const Line = styled.div`
    height: 1px;
    background-color: #514f4e;
    ${({hamClicked}) => !hamClicked ? 'margin-bottom: 9px': ''};
    ${({show}) => !show ? 'display: none;': ''};
    ${({hamClicked, primary}) => hamClicked ? `transform: rotate(${primary ? '-' : ''}45deg);`: ''};
    transition: transform 0.3s;
`

const BlueItems = styled.ul`
    display:${({hamClicked}) => !hamClicked ? 'none': 'flex'};
    flex-direction: column;
    align-items: flex-start;
    background-color: #536dc4;
    position: absolute;
    top: 70px;
    left: 0;
    padding: 2rem;
    width: 100vw;
    height: 90vh;
    color: #fff;
    overflow: scroll;
    li {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
    }
`