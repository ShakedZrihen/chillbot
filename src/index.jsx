import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import SendSongPage from './SendSongPage';
import SongHugPage from './SongHugPage';
import theme from './theme';
import './style.scss';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <SongHugPage />
  </ThemeProvider>,
  document.querySelector('#root'),
);
