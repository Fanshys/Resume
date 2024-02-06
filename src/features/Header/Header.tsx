import { FC } from 'react';
import styles from './styles.module.scss';
import { getClassList } from "@utils/getClassList";
import { HeaderMenu } from "./components/HeaderMenu";
import { headerMenuItems } from "./constants";
import { HeaderThemeToggler } from "./components/HeaderThemeToggler";

export const Header: FC = () => {
  const classList = getClassList([
    styles['header-wrap'],
    'container'
  ])

  return (
    <header className={styles.header}>
      <div className={classList}>
        <HeaderMenu items={headerMenuItems} />
        <HeaderThemeToggler />
      </div>
    </header>
  );
};
