import ReactDOM from 'react-dom';
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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);
