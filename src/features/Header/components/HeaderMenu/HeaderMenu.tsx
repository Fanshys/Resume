"use client";

import { FC } from 'react';
import { HeaderMenuProps } from './types';
import styles from './styles.module.scss'
import Link from "next/link";
import { getClassList } from "@utils/getClassList";
import { usePathname } from "next/navigation";

export const HeaderMenu: FC<HeaderMenuProps> = (props) => {
  const { items } = props;
  const pathname = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className={styles['header-menu']}>
      <ul className={styles['header-menu-list']}>
        {items.map((item) => {
          const isActive = pathname === item.url;
          const classList = getClassList([
            styles['header-menu-link'],
            isActive && styles['active']
          ]);

          return (
            <li className={styles['header-menu-item']} key={item.url}>
              <Link className={classList} href={item.url}>
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  );
};
