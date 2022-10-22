import React from 'react';
// @ts-ignore
import Istoria from 'istoria';

import ContextWrapper from '../../config/ContextWrapper';

const stories = import.meta.glob(['../../**/*.stories.{js,jsx,ts,tsx}', '../../**/stories.{js,jsx,ts,tsx}'], { eager: true });

const App = () => {
  return (
    <Istoria.Sandbox
      stories={stories}
      wrapper={ContextWrapper}
    />
  );
};

export default App;
