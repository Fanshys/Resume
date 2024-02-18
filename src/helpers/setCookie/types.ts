export interface SetCookieParams {
  name: string;
  value: string;
  options?: CookieOptions;
}

export interface CookieOptions {
  expires?: Date | number | string;
  path?: string;
  domain?: string;
  secure?: boolean;
}
