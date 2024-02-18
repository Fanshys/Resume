import type { FC } from 'react';

import { About } from './components/About';
import { Intro } from './components/Intro';

export const MainPage: FC = () => (
  <>
    <Intro />
    <About />
  </>
);
