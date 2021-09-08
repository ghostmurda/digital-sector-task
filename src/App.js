/** React */
import React from 'react';

/** Styles */
import { GlobalStyles } from './App.styles';

/** Components */
import Header from './components/Header';
import Links from './containers/Links';


export default function App() {
    return (
        <div>
            <GlobalStyles />
            <Header />
            <Links />
        </div>
    );
}

