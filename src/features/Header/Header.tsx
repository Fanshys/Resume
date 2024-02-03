import { FC } from 'react';
import styles from './styles.module.scss';
import { getClassList } from "@utils/getClassList";

export const Header: FC = () => {
  const classList = getClassList([
    styles['header-wrap'],
    'container'
  ])

  return (
    <header className={styles.header}>
      <div className={classList}>
        header
      </div>
    </header>
  );
};
