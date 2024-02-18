import type { CookieOptions, SetCookieParams } from '@helpers/setCookie/types';

export const setCookie = ({ name, value, options }: SetCookieParams) => {
  const cookieOptions = {
    path: '/',
    // при необходимости добавьте другие значения по умолчанию
    ...options,
  };

  if (cookieOptions.expires instanceof Date) {
    cookieOptions.expires = cookieOptions.expires.toUTCString();
  }

  let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  Object.keys(cookieOptions).forEach((optionKey) => {
    updatedCookie += `; ${optionKey}`;

    const optionValue = cookieOptions[optionKey as keyof CookieOptions];

    if (optionValue !== true) {
      updatedCookie += `=${optionValue}`;
    }
  });

  document.cookie = updatedCookie;
};
