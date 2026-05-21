import puppeteer from '/home/noe/.npm/_npx/7d92d9a2d2ccc630/node_modules/puppeteer/lib/puppeteer/puppeteer.js';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = 'file://' + resolve(__dirname, 'public/og-render.html');

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
await page.goto(file, { waitUntil: 'networkidle0' });
await page.screenshot({ path: resolve(__dirname, 'public/og-image.png'), clip: { x: 0, y: 0, width: 1200, height: 630 } });
await browser.close();

console.log('og-image.png generated');
