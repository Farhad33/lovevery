import styled from 'styled-components'


export default function Footer() {
    return (
        <Container>
            <FooterContentContainer gridArea={'learn'}>
                <FooterHeader>Learn More</FooterHeader>
                <Items >
                    <Item><a href="/pages/about-us" >Our Story</a></Item>            
                    <Item><a href="https://lovevery.com/community/blog/" >Blog</a></Item>
                    <Item><a href="https://lovevery.com/pages/lovevery-commitment" >Sustainability</a></Item>
                    <Item><a href="/pages/about-us#research" >Research</a></Item>
                    <Item><a href="/pages/about-us#press" >Recent Press</a></Item>
                    <Item><a href="/pages/reviews" >Reviews</a></Item>
                    <Item><a href="https://lovevery.breezy.hr" >Careers</a></Item>
                    <Item><a href="/pages/refer" >Give $20, Earn $20</a></Item>
                    <Item><a href="http://www.shareasale.com/join/86345" >Affiliate Program</a></Item>
                    <Item><a href="https://lovevery-patents.s3-us-west-2.amazonaws.com/index.html" >Patents</a></Item>
                </Items>
            </FooterContentContainer>
            <FooterContentContainer gridArea={'products'}>
                <FooterHeader>Our Products</FooterHeader>
                <Items >
                    <Item><a href="/products/the-play-kits" >The Play Kits</a></Item>
                    <Item><a href="/products/the-play-gym" >The Play Gym</a></Item>
                    <Item><a href="/products/the-block-set" >The Block Set</a></Item>
                    <Item><a href="https://lovevery.com/collections/the-home-collection" >The Home Collection</a></Item>
                    <Item><a href="/products/the-montessori-playshelf" >The Montessori Shelf</a></Item>
                    <Item><a href="/collections/more-playthings" >More Playthings</a></Item>
                </Items>
            </FooterContentContainer>
            <FooterContentContainer gridArea={'gifting'}>
                <FooterHeader>Gifting/Registry</FooterHeader>
                <Items >
                    <Item><a href="https://gifting.lovevery.com/home" >Gift Lovevery</a></Item>
                    <Item><a href="https://gifting.lovevery.com/registry" >Register with Lovevery</a></Item>
                    <Item><a href="https://www.babylist.com/we-love/lovevery" >Register with Babylist</a></Item>
                </Items>
            </FooterContentContainer>
            <FooterContentContainer gridArea={'help'}>
                <FooterHeader>Support</FooterHeader>
                <Items >
                    <Item><a href="https://lovevery.zendesk.com/hc/en-us/requests/new" >Contact Us</a></Item>
                    <Item><a href="mailto:press@lovevery.com" >Press Inquiries</a></Item>
                    <Item><a href="/pages/help#setup" >Play Gym Setup</a></Item>
                    <Item><a href="/pages/help#faq" >FAQs</a></Item>
                    <Item><a href="/pages/help#returns" >Returns &amp; Exchanges</a></Item>
                    <Item><a href="https://lovevery.com/pages/coupons" >Offers &amp; Discounts</a></Item>
                    <Item><a href="https://lovevery.com/pages/where-to-buy" >Store Locator</a></Item>
                </Items>
            </FooterContentContainer>
            <FooterContentContainer gridArea={'podcast'}>
                <FooterHeader>My New Life™ Podcast</FooterHeader>
                <Items >
                    <Item><a href="https://podcasts.apple.com/us/podcast/my-new-life/id1505875687" >Apple Podcasts</a></Item>
                    <Item><a href="https://open.spotify.com/show/3IJS08nkuGvcfn5wNksnNh" >Spotify</a></Item>
                    <Item><a href="https://podcasts.google.com/feed/aHR0cHM6Ly9teW5ld2xpZmUubGlic3luLmNvbS9yc3M" >Google Podcasts</a></Item>
                </Items>
            </FooterContentContainer>
            <FooterContentContainer gridArea={'social'}>
                <FooterHeader>Follow Us</FooterHeader>
                <Items direction={'row'} >
                    <Item margin={'right'}>
                        <a href="https://instagram.com/lovevery" target="_blank" rel="noopener noreferrer"><img data-src="//cdn.shopify.com/s/files/1/2386/2119/t/12/assets/icon-instagram.svg?v=5826727675831511988" alt="instagram" src="//cdn.shopify.com/s/files/1/2386/2119/t/12/assets/icon-instagram.svg?v=5826727675831511988"/></a>
                    </Item>
                    <Item margin={'right'}>
                        <a href="https://facebook.com/lovevery" target="_blank" rel="noopener noreferrer"><img data-src="//cdn.shopify.com/s/files/1/2386/2119/t/12/assets/icon-facebook.svg?v=1040366987670955707" alt="facebook" src="//cdn.shopify.com/s/files/1/2386/2119/t/12/assets/icon-facebook.svg?v=1040366987670955707"/></a>
                    </Item>
                    <Item margin={'right'}>
                        <a href="https://www.youtube.com/channel/UC0poUqIxO3uTYTw1zVgzeKw" target="_blank" rel="noopener noreferrer"><img data-src="//cdn.shopify.com/s/files/1/2386/2119/t/12/assets/icon-youtube.svg?v=4134572006982476256" alt="youtube" src="//cdn.shopify.com/s/files/1/2386/2119/t/12/assets/icon-youtube.svg?v=4134572006982476256"/></a>
                    </Item>
                    <Item margin={'right'}>
                        <a href="https://pinterest.com/lovevery" target="_blank" rel="noopener noreferrer"><img data-src="//cdn.shopify.com/s/files/1/2386/2119/t/12/assets/icon-pinterest.svg?v=3245085134681233744" alt="pinterest" src="//cdn.shopify.com/s/files/1/2386/2119/t/12/assets/icon-pinterest.svg?v=3245085134681233744"/></a>
                    </Item>
                    <Item margin={'right'}>
                        <a href="https://vm.tiktok.com/ZMJHbxKWW/" target="_blank" rel="noopener noreferrer"><img data-src="//cdn.shopify.com/s/files/1/2386/2119/t/12/assets/icon-tiktok.svg?v=12046776588380320165" alt="tiktok" src="//cdn.shopify.com/s/files/1/2386/2119/t/12/assets/icon-tiktok.svg?v=12046776588380320165"/></a>
                    </Item>
                </Items>
            </FooterContentContainer>
        </Container>
    )
    
}

const Container = styled.footer`
    display: grid;
    grid-template-columns: repeat(6,1fr);
    grid-template-areas:
        "learn products gifting help podcast social";
    background-color: #fff;
    box-shadow: 0 1px 10px 0 rgb(0 0 0 / 10%);
    padding: 2rem 7rem;
    background-color: #f5f7fc;
    grid-gap: 1rem;
    @media (max-width: 1300px) {
        padding: 2rem;
    }
    @media (max-width: 1150px) {
        grid-template-columns: repeat(5,1fr);
        grid-template-areas: 
        "learn products gifting help podcast"
        "learn products gifting help social";
    }
    @media (max-width: 890px) {
        grid-template-columns: repeat(4,1fr);
        grid-template-areas: 
        "learn products help podcast"
        "learn gifting help social";
    }
    @media (max-width: 750px) {
        grid-template-columns: repeat(3,1fr);
        grid-template-areas: 
        "learn products help"
        "podcast gifting social";
    }
    @media (max-width: 600px) {
        grid-template-columns: repeat(2,1fr);
        grid-template-areas: 
        "learn products"
        "podcast help"
        "gifting social";
    }
    @media (max-width: 430px) {
        grid-template-columns: repeat(1,1fr);
        grid-template-areas: 
        "learn"
        "products"
        "help"
        "gifting"
        "podcast"
        "social";
    }
`

const FooterContentContainer = styled.div`
    display: flex;
    flex-direction: column;
${({gridArea}) => gridArea ? `grid-area: ${gridArea}` : ''};
`
const FooterHeader = styled.h2`
    text-transform: none;
    letter-spacing: normal;
    margin-bottom: .5rem;
    white-space: nowrap;
    font-size: 16px;
    font-weight: 400;
`
const Items = styled.ul`
    display: flex;
    flex-direction: ${({direction}) => direction === 'row' ? 'row' : 'column'};
    align-items: flex-start;
`
const Item = styled.li`
    ${({margin}) => margin ? 'margin-right: 1rem' : ''};
    cursor: pointer;
    a {
        color: #536dc4;
        line-height: 1.5em;
        text-decoration: none;
        font-weight: 400;
        font-size: 14px;
    }
`