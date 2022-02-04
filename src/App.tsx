import React, { FC } from 'react';
require('@solana/wallet-adapter-react-ui/styles.css');

import './App.css';

import { Context } from './components/WalletConnection/WalletConnection';
import { BioElement } from './components/BioElement/BioElement';;
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
                <h1>Solana-Base-App</h1>
            </div>
            
        </div>
    );
};

