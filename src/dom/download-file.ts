/**
 * Let the browser start downloading a file
 */

export function downloadFile(src: string) {
  const frame: HTMLIFrameElement = document.createElement('iframe');

  frame.style.display = 'none';
  frame.src = src;

  frame.addEventListener(
    'load',
    () => {
      document.body.removeChild(frame);
    },
    false,
  );

  document.body.appendChild(frame);
}
