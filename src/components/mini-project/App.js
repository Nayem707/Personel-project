import React from 'react';
import Lazy from './lazy';
const App = () => {
  return (
    <div>
      {' '}
      <Suspense fallback={<div>wit...</div>}>
        <Lazy />
      </Suspense>
    </div>
  );
};

export default App;
