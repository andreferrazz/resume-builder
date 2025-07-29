import { error } from '@sveltejs/kit';
import { resume } from './shared.svelte.js';

export function load({ url }) {

    const id = url.searchParams.get('id')

    if (!id) {
        error(400, { message: 'Resume id was not provided' })
    }

    return { resume: resume[id] };
}