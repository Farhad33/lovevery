import { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { getKits } from '../features/kitsSlice'
import Home from './Home'
import Header from './shared/Header'
import Footer from './shared/Footer'
import Product from './product/Product'

export default function Router() {
  const kits = useSelector((state) => state.kits.kits)
  const dispatch = useDispatch()

  useEffect(() => {
    if(kits.legth) {
      dispatch(getKits())
    }
  },[])

  return (
    <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/"><Home /></Route>
          {kits.map((kit, index) => {
            let path = kit.title.toLocaleLowerCase().split(' ').join('-')
            path = `/products/${path}`
            return (
              <Route exact path={path} key={index}>
                <Product />
              </Route>
            )
          })}
        </Switch>
        <Footer />
    </BrowserRouter>
  );
}