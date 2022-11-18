import { parse } from 'next-useragent';

export const getUserAgent = (uaString: string) =>
  uaString ? parse(uaString) : parse(window.navigator.userAgent);
