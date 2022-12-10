import React, { useState } from 'react';
import './App.css';
import styled, { ThemeProvider } from "styled-components";
import {lightTheme, darkTheme, GlobalStyles } from "./themes";

const StyledApp = styled.div`
color ${(props) => props.theme.fontColor};
`;

function App() {
 const [theme, setTheme] = useState ("light");
 const themeToggler = () => {
  theme === "light" ? setTheme("dark") : setTheme ("light");
 }
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}> 
    <GlobalStyles/>  
      <StyledApp>
         <h3>Hello worlds</h3>
         <button onClick={() => themeToggler()}>Change Theme</button>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, in!</p>
         
         
         </StyledApp>
       
        </ThemeProvider>
   
  );
}

export default App;
