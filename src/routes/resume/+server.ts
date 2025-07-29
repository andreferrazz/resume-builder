import { json } from '@sveltejs/kit';
import puppeteer from 'puppeteer-core';
import Fs from 'node:fs/promises';
import { resume } from './shared.svelte.js';
import { randomUUID } from 'node:crypto';

export async function POST({ request, url }) {
    const id = randomUUID();
    resume[id] = await request.json();

    await Fs.rm('static/resume.pdf', { force: true });
    const browser = await puppeteer.launch({ channel: 'chrome', headless: true });
    const page = await browser.newPage();
    await page.goto(`${url.href}?id=${id}`, { waitUntil: 'networkidle2' });
    await page.pdf({
        path: 'static/resume.pdf',
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
    return json({ id }, { status: 201 });
}
