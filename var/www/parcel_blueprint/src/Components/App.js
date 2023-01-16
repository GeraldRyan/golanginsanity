import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

// hoook based context :: from default function export
import AppProvider from './AppContext';

const StyledApp = styled.div`
border: 1px solid #f00;`;

import { Dashboard } from './Dashboard';


export function App() {
    return (
        <StyledApp>
            <AppProvider>
                Halo Welt
                <Dashboard/>
            </AppProvider>
        </StyledApp>
    )
}

if (document.getElementById('react_root')) {
    ReactDOM.render(<App />, document.getElementById('react_root'));
}