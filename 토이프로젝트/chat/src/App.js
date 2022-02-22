import React from 'react';
import { StatusBar} from 'react-native';
import styled from 'styled-components/native';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Navigation from './navigations';
import {UserProvider,ProgressProvider} from "./contexts";
//ProgressProvider=기다리는동안 spinner보여주려고 만듦.
//UserProvider = 네비게이션 두개 사용해서 로그인 후 Profile넘어갈때 다른 네비게이션 쓰게하려고 만듦
const App=()=> {
  return (
    <ThemeProvider theme={theme}>
        <ProgressProvider>
        <UserProvider>
        <StatusBar backgroundColor={theme.background} barStyle='dark-content'/>
        <Navigation/>
        </UserProvider>
        </ProgressProvider>
    </ThemeProvider>
  );
};

export default App;