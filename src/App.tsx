import React from 'react';

import Global from './ui/styles/global';

import SignIn from './pages/SignIn';

const App: React.FC = () => {
  return (
    <>
      <SignIn></SignIn>
      <Global />
    </>
  );
};

export default App;
