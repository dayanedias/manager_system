import React from 'react';

import Container from './components/container';
import { MainContextProvider } from './context';

export default () => {
  
    return(
        <MainContextProvider>
            <Container />
        </MainContextProvider>
    );
};