import { FC } from 'react';
import { Intro } from "./components/Intro";
import { About } from "./components/About";

export const MainPage: FC = () => {
  return (
    <>
      <Intro />
      <About />
    </>
  );
};
