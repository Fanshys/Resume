import { footerEmail, footerLinks } from '@features/Footer/constants';
import type { FC } from 'react';

import styles from './styles.module.scss';

export const Footer: FC = () => (
  <footer className={styles.footer}>
    <div className="container">
      <div className={styles['footer-wrap']}>
        <div className={styles['footer-column']}>
          <div className={styles['footer-title']}>
            Ссылки
          </div>

          <div className={styles['footer-content']}>
            <ul className={styles['footer-list']}>
              {footerLinks.map((link) => (
                <li
                  key={link.url}
                  className={styles['footer-list-item']}
                >
                  <a
                    href={link.url}
                    className={styles['footer-list-link']}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles['footer-column']}>
          <div className={styles['footer-title']}>
            Email
          </div>

          <div className={styles['footer-content']}>
            <a
              href={`mailto:${footerEmail}`}
              className={styles['footer-list-link']}
            >
              {footerEmail}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
