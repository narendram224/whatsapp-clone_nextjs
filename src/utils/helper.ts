import { parse } from 'next-useragent';

export const getUserAgent = (uaString: string) =>
  uaString ? parse(uaString) : parse(window.navigator.userAgent);

export const getMinutesBetweenDates = (startDate: Date, endDate: Date) => {
  const diff = endDate.getHours() - startDate.getHours();
  const diffNegative = startDate.getHours() - endDate.getHours();

  const rtf = new Intl.RelativeTimeFormat('en', {
    style: 'short',
    // numeric: 'auto',
  });
  const messageTimeInMints =
    Math.floor(diff / 1000 / 60) < 60
      ? diffNegative
      : endDate.getHours() - startDate.getHours();
  const msgFormat = rtf.format(messageTimeInMints, diff > 60 ? 'hour' : 'hour');
  return msgFormat;
};

export const downloadMedia = async (e: any, originalFile: string) => {
  e.preventDefault();
  try {
    const response = await fetch(originalFile);
    const blob = await response.blob();
    const downloadUrl = URL.createObjectURL(blob);
    const fileName = originalFile.split('/').pop();
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = downloadUrl;
    a.download = `${fileName}`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(downloadUrl);
  } catch (error) {
    console.log('Error downloading', error);
  }
};

export const docChecker = (extension: string, fileName?: string) => {
  const match = ['jpeg', 'jpg', 'png', 'gif'];
  if (extension) return match.indexOf(extension) === -1;

  const extens: any = fileName?.split('.').pop();
  return match.indexOf(extens) === -1;
};
