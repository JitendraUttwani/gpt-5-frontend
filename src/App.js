import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';
import { useMemo } from 'react';
import { themeSettings } from './theme';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Toaster } from "react-hot-toast";
import Summary from './pages/Summary';
import Paragraph from './pages/Paragraph';
import Chatbot from './pages/Chatbot';
import JsConverter from './pages/JsConverter';
import ScifiImage from './pages/ScifiImage';

function App() {
  const theme = useMemo(() => createTheme(themeSettings(),[]));
  return (
    <>
      <ThemeProvider theme={theme}>

      <CssBaseline/>
      <Navbar/>
      <Toaster />
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/summary' element={<Summary/>}/>
        <Route path='/paragraph' element={<Paragraph/>}/>
        <Route path='/chatbot' element={<Chatbot/>}/>
        <Route path='/js-converter' element={<JsConverter/>}/>
        <Route path='/scifi-image' element={<ScifiImage/>}/>
        
      </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
