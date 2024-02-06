import { FC } from 'react';
import styles from './styles.module.scss';

export const About: FC = () => {
  return (
    <div className={styles['about']}>
      <h2 className={styles['about-title']}>
        Обо мне
      </h2>

      <p className={styles['about-description']}>
        Занимаюсь веб-разработкой с 2019 года. <br/>
        Начинал со сборки сайтов на Bitrix, но быстро понял, что душа лежит к Frontend&lsquo;у. <br/> <br/>
        Получаю удовольствие, создавая продуманные интерфейсы. Постоянно стараюсь открывать для себя что-то новое -
        слежу за новинками в сообществе, читаю книги, статьи на Хабре и не только, слушаю подкасты, в общем, поглощаю информацию :)
      </p>

      <div className={styles['about-grid']}>
        <div className={styles['about-grid-item']}>
          <h3 className={styles['about-grid-item-title']}>
            Стек
          </h3>

          <p className={styles['about-grid-item-description']}>
            Некоторые из технологий, которые я использую в своей работе
          </p>

          <ul className={`${styles['about-grid-item-list']} ${styles['columns']}`}>
            <li className={styles['about-grid-item-list-item']}>Javascript/Typescript</li>
            <li className={styles['about-grid-item-list-item']}>HTML</li>
            <li className={styles['about-grid-item-list-item']}>CSS/SCSS/LESS</li>
            <li className={styles['about-grid-item-list-item']}>React</li>
            <li className={styles['about-grid-item-list-item']}>Next.js</li>
            <li className={styles['about-grid-item-list-item']}>Redux</li>
            <li className={styles['about-grid-item-list-item']}>Node.js</li>
            <li className={styles['about-grid-item-list-item']}>Vue</li>
            <li className={styles['about-grid-item-list-item']}>Vuex/Pinia</li>
            <li className={styles['about-grid-item-list-item']}>Jest</li>
            <li className={styles['about-grid-item-list-item']}>Webpack/Gulp/Vite</li>
            <li className={styles['about-grid-item-list-item']}>Git</li>
            <li className={styles['about-grid-item-list-item']}>Gitlab CI/CD</li>
          </ul>
        </div>

        <div className={styles['about-grid-item']}>
          <h3 className={styles['about-grid-item-title']}>
            Опыт работы
          </h3>

          <p className={styles['about-grid-item-description']}>
            Хронология моей работы по компаниям
          </p>

          <ul className={styles['about-grid-item-list']}>
            <li className={`${styles['about-grid-item-list-item']} ${styles['grid']}`}>
              <time className={styles['about-grid-item-list-item-time']}>2019&nbsp;-&nbsp;2022</time>

              <div className={styles['about-grid-item-list-item-content']}>
                <span className={styles['about-grid-item-list-item-company']}>Amado</span>
                <span className={styles['about-grid-item-list-item-position']}>Программист</span>
                <span className={styles['about-grid-item-list-item-description']}>
                  Тут я начинал со сборки сайтов на Bitrix, постепенно переходя к разработке
                  полноценных web-приложений, углубляясь во Frontend.<br/> <br/>
                  Последние полгода в компании провел в должности Team Lead&lsquo;a, команды из 4 человек
                  - обучал стажеров, помогал менее опытным ребятам.
                </span>
              </div>
            </li>
            <li className={`${styles['about-grid-item-list-item']} ${styles['grid']}`}>
              <time className={styles['about-grid-item-list-item-time']}>2022&nbsp;-&nbsp;...</time>

              <div className={styles['about-grid-item-list-item-content']}>
                <span className={styles['about-grid-item-list-item-company']}>РБК</span>
                <span className={styles['about-grid-item-list-item-position']}>Frontend-разработчик</span>
                <span className={styles['about-grid-item-list-item-description']}>
                  Тут я начинал со сборки сайтов на Bitrix, постепенно переходя к разработке
                  полноценных web-приложений, углубляясь во Frontend.<br/>
                  Последние полгода в компании провел в должности Team Lead&lsquo;a, команды из 4 человек
                  - обучал стажеров, помогал менее опытным ребятам.
                </span>
              </div>
            </li>
          </ul>
        </div>

        <div className={styles['about-grid-item']}>
          <h3 className={styles['about-grid-item-title']}>
            Стек
          </h3>

          <p className={styles['about-grid-item-description']}>
            Некоторые из технологий, которые я использую в своей работе
          </p>

          <ul className={styles['about-grid-item-list']}>
            <li className={styles['about-grid-item-list-item']}>Javascript/Typescript</li>
            <li className={styles['about-grid-item-list-item']}>HTML</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
