import React, {Suspense} from 'react';
import {createGlobalStyle} from 'styled-components';
import { Provider } from 'react-redux'
import Router from './components/Router';
import { store } from './store'
// const Counter = React.lazy(() => import('./components/counter'));


// Main page
export default function App() {
	return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <Router />
			</Suspense>
      <GlobalStyle />
    </Provider>
	);
};


// Global Style
const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }
  html {
    // removing scroll placeholder for smaller screens
    @media only screen and (max-width: 600px) {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
    }
  }

  body {
    // removing scroll placeholder for smaller screens
    @media only screen and (max-width: 600px) {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: -17px;
      overflow-y: scroll;
    }
    font-family: "Myriad Set Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    font-weight: 300;
    letter-spacing: 0.017em;
    color: #514F4E;
    font-size: 18px;
    line-height: 1.5;
  }
  ul {
    display: flex;
    align-items: center;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    list-style-type: none;
  }
`
