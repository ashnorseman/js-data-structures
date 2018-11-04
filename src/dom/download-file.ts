/**
 * Let the browser start downloading a file
 */

const id = `FRAME_DOWNLOAD_${Date.now()}`;

export function downloadFile(src: string) {
  const oldFrame: HTMLIFrameElement = document.getElementById(id) as HTMLIFrameElement;

  if (oldFrame) {
    document.body.removeChild(oldFrame);
  }

  const frame: HTMLIFrameElement = document.createElement('iframe');

  frame.id = id;
  frame.style.display = 'none';
  frame.src = src;

  document.body.appendChild(frame);
}
