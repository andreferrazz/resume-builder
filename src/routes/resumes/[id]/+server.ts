import { json } from '@sveltejs/kit';
import puppeteer from 'puppeteer-core';
import Fs from 'node:fs/promises';

// TODO: make this endpoint answer with a pdf file
export async function GET({ params, url }) {
    await Fs.rm('static/resume.pdf', { force: true });
    const browser = await puppeteer.launch({ channel: 'chrome', headless: true });
    const page = await browser.newPage();
    await page.goto(`${url.href}`, { waitUntil: 'networkidle2' });
    await page.pdf({
        path: `static/resume-${params.id}.pdf`,
        format: 'a4',
        printBackground: true,
        margin: {
            top: '1in',
            right: '1in',
            bottom: '1in',
            left: '1in'
        },
    });
    await browser.close();
    return json({ id: params.id }, { status: 201 });
}
