import React, { FC } from 'react';
require('@solana/wallet-adapter-react-ui/styles.css');

import './App.css';

import { Context } from './components/WalletConnection/WalletConnection';
import {NavAppBar} from './components/Navbar/Navbar';

export const App: FC = () => {

    return (
        <div>
            <Context>
                <div className='navbar-position'>        {/* className='navbar-position' */}
                    <NavAppBar  />
                </div>
    
            </Context>
            <div className="base-app-text">
                <h1>Solana-Base-App asdasd</h1>
                <div id="canvas"></div>
            </div>
            
            
        </div>
    );
};

