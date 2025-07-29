<script lang="ts">
    const { data } = $props();
    const { name, title, location, phone, email, linkedin, github, summary, experience, skills, languages, education } = data.resume;
</script>

<div class="w-[8.27in] m-auto">
    <section class="mb-(--spacing-lg)">
        <h1 class="text-(--accent-color) text-(length:--font-size-xl) font-bold text-center">{name}</h1>
        <h2 class="text-(length:--font-size-lg) text-center">{title}</h2>
        <p class="text-(length:--font-size) text-center">
            {location} • {phone} •
            <a target="_blank" href="mailto:{email}">{email}</a>
            •
            <a target="_blank" href={linkedin}>LinkedIn</a>
            •
            <a target="_blank" href={github}>GitHub</a>
        </p>
    </section>

    <section class="mb-(--spacing-lg)">
        <h3 class="text-(--accent-color) text-(length:--font-size-lg) font-bold">SUMMARY</h3>
        <div class="h-(--divider-weight) bg-(--divider-color) mb-(--spacing-lg)"></div>
        <div class="text-(length:--font-size)">{summary}</div>
    </section>

    <section class="mb-(--spacing-lg)">
        <h3 class="text-(--accent-color) text-(length:--font-size-lg) font-bold">EXPERIENCE</h3>
        <div class="h-(--divider-weight) bg-(--divider-color) mb-(--spacing-lg)"></div>
        {#each experience as e}
            <div class="mt-(--spacing-lg)">
                <div class="flex items-center justify-between">
                    <div class="text-(length:--font-size-lg) font-bold">{e.company}</div>
                    <div class="text-(length:--font-size)">{e.startDate} - {e.endDate}</div>
                </div>
                <div class="text-(length:--font-size) font-bold">{e.title}</div>
                <ul>
                    {#each e.topics as topic}
                        <li class="text-(length:--font-size) mt-(--spacing-sm)">• {topic}</li>
                    {/each}
                </ul>
            </div>
        {/each}
    </section>

    <section class="mb-(--spacing-lg)">
        <h3 class="text-(--accent-color) text-(length:--font-size-lg) font-bold">SKILLS</h3>
        <div class="h-(--divider-weight) bg-(--divider-color) mb-(--spacing-lg)"></div>
        <table class="text-(length:--font-size) border-separate border-spacing-y-(--spacing-sm)">
            <tbody>
                {#each skills as skill}
                    <tr>
                        <td class="w-[200px]"><strong>{skill.title}</strong></td>
                        <td>{skill.items}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </section>

    <section class="mb-(--spacing-lg)">
        <h3 class="text-(--accent-color) text-(length:--font-size-lg) font-bold">LANGUAGES</h3>
        <div class="h-(--divider-weight) bg-(--divider-color) mb-(--spacing-lg)"></div>

        <table class="text-(length:--font-size) leading-none border-separate border-spacing-y-(--spacing-sm)">
            <tbody>
                {#each languages as language}
                    <tr>
                        <td class="w-[200px]"><strong>{language.name}</strong></td>
                        <td>
                            {#if language.certificate}
                                <a href={language.certificate}>{language.level}</a>
                            {:else}
                                {language.level}
                            {/if}
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </section>

    <section class="mb-(--spacing-lg)">
        <h3 class="text-(--accent-color) text-(length:--font-size-lg) font-bold">EDUCATION</h3>
        <div class="h-(--divider-weight) bg-(--divider-color) mb-(--spacing-lg)"></div>
        <div class="mt-(--spacing-lg)">
            <div class="flex items-center justify-between">
                <div class="text-(length:--font-size-lg) font-bold">{education.area}</div>
                <div class="text-(length:--font-size)">{education.date}</div>
            </div>
            <div class="text-(length:--font-size) font-bold">{education.institution}</div>
        </div>
    </section>
</div>

<style>
    :root {
        --font-size: 12px;
        --font-size-lg: 14px;
        --font-size-xl: 20px;
        --spacing-sm: 8px;
        --spacing-lg: 16px;
        --divider-weight: 2px;
        --accent-color: #0d067f;
        --divider-color: var(--accent-color);
    }

    a {
        color: #1a0ca2;
    }
</style>
