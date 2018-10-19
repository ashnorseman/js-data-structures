/**
 * Create a script and append to DOM
 */

export function createScript(src: string): Promise<string> {
  const script: HTMLScriptElement = document.createElement('script');

  script.src = src;

  const promise: Promise<string> = new Promise<string>((resolve, reject) => {
    script.addEventListener('load', () => resolve(src), false);
    script.addEventListener('reject', reject, false);
  });

  document.head.appendChild(script);

  return promise;
}
