import puppeteer from 'puppeteer';
import { existsSync, mkdirSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const url   = process.argv[2] || 'http://localhost:3000/visualizer.html';
const label = process.argv[3] || '';

const outDir = join(__dirname, 'temporary screenshots');
if (!existsSync(outDir)) mkdirSync(outDir);

const existing = readdirSync(outDir).filter(f => f.endsWith('.png')).length;
const fileName = label
  ? `screenshot-${existing + 1}-${label}.png`
  : `screenshot-${existing + 1}.png`;
const outPath = join(outDir, fileName);

const browser = await puppeteer.launch({
  executablePath: 'C:/Users/natur/.cache/puppeteer/chrome/win64-133.0.6943.53/chrome-win64/chrome.exe',
  args: ['--no-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 900 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });
await page.screenshot({ path: outPath, fullPage: false });
await browser.close();

console.log('Saved:', outPath);
