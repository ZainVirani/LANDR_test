import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.scss';
import { Contacts } from './pages/contacts';
import { ThemeProvider } from '@mui/system';
import { theme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Contacts />
    </ThemeProvider>
  );
};

// @ts-ignore
ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
