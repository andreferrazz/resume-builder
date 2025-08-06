import { error } from '@sveltejs/kit';
import { addResume, getAllResumes } from '../shared.svelte.js';
import {
    allCloudDevops,
    allDatabases,
    allObservability,
    allProgramming,
    allSystemDesign,
    getTemplate
} from '$lib/template.js';

export function load({ url }) {
    return { resumes: getAllResumes(), href: url.href };
}

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const jobDescription = data.get('jobDescription') as string;

        if (!jobDescription) {
            error(400, 'Invalid input');
        }

        const jobDesc = jobDescription.toLocaleLowerCase();

        const jobDescriptionIncludes = (e: string) => {
            return (
                jobDesc.includes(` ${e.toLocaleLowerCase()} `) ||
                jobDesc.includes(` ${e.toLocaleLowerCase()}. `) ||
                jobDesc.includes(`${e.toLocaleLowerCase()}. `) ||
                jobDesc.includes(` ${e.toLocaleLowerCase()}, `) ||
                jobDesc.includes(`${e.toLocaleLowerCase()}, `) ||
                jobDesc.includes(` ${e.toLocaleLowerCase()}; `) ||
                jobDesc.includes(`(${e.toLocaleLowerCase()} `) ||
                jobDesc.includes(` ${e.toLocaleLowerCase()})`) ||
                jobDesc.includes(` ${e.toLocaleLowerCase()}/`) ||
                jobDesc.includes(`/${e.toLocaleLowerCase()} `) ||
                jobDesc.includes(`/${e.toLocaleLowerCase()}/`) ||
                jobDesc.includes(` ${e.toLocaleLowerCase()}\r`) ||
                jobDesc.includes(` ${e.toLocaleLowerCase()}\n`) ||
                jobDesc.includes(` ${e.toLocaleLowerCase()}\r\n`)
            );
        };

        const setItems = (skill: any, items: any[]) => {
            if (items.length === 0) {
                return;
            }

            for (let item of skill.requiredItems) {
                if (!items.includes(item)) {
                    items.push(item);
                }
            }

            skill.items = items;
        };

        const template = getTemplate();
        const programming = allProgramming.filter(jobDescriptionIncludes);
        const databases = allDatabases.filter(jobDescriptionIncludes);
        const cloudDevops = allCloudDevops.filter(jobDescriptionIncludes);
        const systemDesign = allSystemDesign.filter(jobDescriptionIncludes);
        const observability = allObservability.filter(jobDescriptionIncludes);

        setItems(template.skills.programming, programming);
        setItems(template.skills.databases, databases);
        setItems(template.skills.cloudDevops, cloudDevops);
        setItems(template.skills.systemDesign, systemDesign);
        setItems(template.skills.observability, observability);

        addResume(template);
    }
};
