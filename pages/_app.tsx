import '../styles/global.css';
import {AppProps} from 'next/app';
import '../styles/main.css';
import React from 'react';

const App = ({Component, pageProps} : AppProps): React.ReactElement => {
  return <Component {...pageProps} />;
};

export default App;
