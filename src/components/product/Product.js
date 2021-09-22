import { useEffect, useState } from 'react'
import ProductDesktop from './desktop/ProductDesktop'
import ProductMobile from './mobile/ProductMobile'

export default function Product() {
    const [width, setWidth] = useState(window.innerWidth)

    const resize = () => {
        setWidth(window.innerWidth)
    }
    
    useEffect(() => {
        addEventListener('resize', resize, false)
        return function cleanUp() {
            removeEventListener('resize', resize)
        }
    }, [])

    return window.innerWidth < 990 ? <ProductMobile /> : <ProductDesktop />
}