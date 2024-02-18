import { getClassList } from '@utils/getClassList';
import type { FC } from 'react';

import { getMedia } from './helpers/getMedia';
import styles from './styles.module.scss';
import type { PictureProps } from './types';

export const Picture: FC<PictureProps> = (props) => {
  const {
    src,
    srcRetina,
    alt,
    className,
    imgClassName,
    sources,
  } = props;

  if (!src) {
    return null;
  }

  const classList = getClassList([
    styles.picture,
    className,
  ]);

  const imgClassList = getClassList([
    styles['picture-image'],
    imgClassName,
  ]);

  return (
    <picture className={classList}>
      {sources?.map((source) => {
        const media = getMedia({ from: source.from, to: source.to });
        const srcSet = `${source.src}${source.srcRetina ? `, ${source.srcRetina} 2x` : ''}`;

        return (
          <source
            key={source.src}
            srcSet={srcSet}
            media={media}
          />
        );
      })}

      <img
        src={src}
        srcSet={srcRetina ? `${srcRetina} 2x` : ''}
        alt={alt}
        className={imgClassList}
      />
    </picture>
  );
};
