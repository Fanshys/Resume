import { getClassList } from '@utils/getClassList';
import type { FC } from 'react';

import { HeaderMenu } from './components/HeaderMenu';
import { HeaderThemeToggler } from './components/HeaderThemeToggler';
import { headerMenuItems } from './constants';
import styles from './styles.module.scss';

export const Header: FC = () => {
  const classList = getClassList([
    styles['header-wrap'],
    'container',
  ]);

  return (
    <header className={styles.header}>
      <div className={classList}>
        <HeaderMenu items={headerMenuItems} />
        <HeaderThemeToggler />
      </div>
    </header>
  );
};
