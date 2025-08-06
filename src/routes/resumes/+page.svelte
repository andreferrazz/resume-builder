<script lang="ts">
    const { data } = $props();

    const placeholder2 = `We expect you to have the following qualifications:
A true team player who loves working towards both team and individual goals with at least 5 years of experience in web development.
Experience designing and developing complex modern web applications
Experience with at least two different programming languages such as Go, Scala, Kotlin, or Java
Experience with SQL/NoSQL technology such as PostgreSQL, MySQL, DynamoDB, Redis, understanding common use cases and performance pitfalls
Experience dealing with event-driven architectures and message brokers such as Kafka, RabbitMQ, SNS, etc., and an in-depth understanding of their use cases and pitfalls
Experienced in implementing prototypes and in practices and concepts such as MVP, A/B testing, and feature toggles for rolling-out features to production
Experience applying computer science fundamentals: data structures, algorithm design, problem-solving, and complex analysis.
Experience with monitoring, observability, and KPIs tracking
Experience with microservices and high volume distributed systems
Experience with Cloud-based architectures in the AWS
Strong communication skills, including verbal and written English and Portuguese
Bachelor's degree in Computer Science, Computer Engineering, or related discipline or equivalent practical experience
You have the ability to work both autonomously and collaborate in a team environment
A self-starter who can multi-task and adapt to a fast-growing organization
You enjoy working on multiple priorities and projects
You are tenacious and goal-oriented`;
</script>

<div class="m-auto w-3xl py-10">
    <section class="mb-10">
        <p class="text-lg font-bold">Existing resumes</p>
        {#each data.resumes as resume}
            <li><a href="/resumes/{resume.id}" target="_blank">{resume.name} [{resume.id}]</a></li>
        {:else}
            <p>No resumes yet</p>
        {/each}
    </section>

    <section class="mb-10">
        <p class="mb-4 text-lg font-bold">Build a resume</p>

        <form class="flex flex-col" method="POST">
            <label for="jobDescription">Job Description</label>
            <textarea class="mb-4 h-[600px] rounded-xl border p-2" name="jobDescription">{placeholder2}</textarea>
            <button class="rounded-full bg-(--accent-color) px-4 py-2 text-sm leading-none font-bold text-white hover:cursor-pointer">Build</button>
        </form>
    </section>
</div>
