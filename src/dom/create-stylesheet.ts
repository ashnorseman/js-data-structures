/**
 * Create a stylesheet and append to DOM
 */

export function createStylesheet(src: string): Promise<string> {
  const stylesheet: HTMLLinkElement = document.createElement('link');

  stylesheet.rel = 'stylesheet';
  stylesheet.type = 'text/css';
  stylesheet.href = src;

  const promise: Promise<string> = new Promise<string>((resolve, reject) => {
    stylesheet.addEventListener('load', () => resolve(src), false);
    stylesheet.addEventListener('reject', reject, false);
  });

  document.head.appendChild(stylesheet);

  return promise;
}
