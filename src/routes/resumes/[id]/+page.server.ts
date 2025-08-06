import { error } from '@sveltejs/kit';
import { getResume } from '../../shared.svelte.js';

export function load({ params }) {

    const resume = getResume(Number(params.id))

    if (!resume) {
        error(404, { message: 'Resume not found' })
    }

    return { resume };
}
