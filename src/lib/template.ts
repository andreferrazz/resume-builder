export function getTemplate() {
    return JSON.parse(JSON.stringify(template));
}

const template = Object.freeze({
    name: 'André Ferraz',
    title: 'Software Engineer',
    location: 'São Paulo, Brazil',
    phone: '+55 31 997102160',
    email: 'oandreferraz@gmail.com',
    linkedin: 'https://www.linkedin.com/in/oandreferraz',
    github: 'https://github.com/andreferrazz',
    // summary: 'Software Engineer with 5+ years of experience designing and delivering scalable, high-performance systems using Java, Spring Boot, Angular, and AWS. Proven ability to lead complex engineering efforts across logistics, financial security, and community management, specializing in microservices, distributed systems, and cloud-native solutions. Known for translating real-world business challenges into reliable, production-ready services that improve performance, reduce risk, and enhance operational outcomes. Passionate about clean code, system observability, and automation, with a mindset geared toward continuous learning, technical excellence, and cross-functional collaboration. Now seeking to apply my engineering expertise to build intelligent, resilient systems that help empower users, platforms, and enterprises at global scale.',
    summary: 'Software Engineer with 5+ years of experience designing and delivering scalable, high-performance systems using Flutter, Java, PostgreSQL and AWS. Proven ability to lead complex engineering efforts across logistics, financial security, and community management, specializing in microservices, distributed systems, and cloud-native solutions. Known for translating real-world business challenges into reliable, production-ready services that improve performance, reduce risk, and enhance operational outcomes. Passionate about clean code, system observability, and automation, with a mindset geared toward continuous learning, technical excellence, and cross-functional collaboration. Now seeking to apply my engineering expertise to build intelligent, resilient systems that help empower users, platforms, and enterprises at global scale.',
    experience: Object.freeze([
        // Object.freeze({
        //     company: 'Intelipost',
        //     title: 'Software Engineer',
        //     startDate: 'Jan 2025',
        //     endDate: 'Present',
        //     topics: Object.freeze([
        //         "Designed and delivered a strategic Freight Performance Report module for Intelipost's TMS platform, leveraging Java, Spring, Javascript, and AWS. This feature empowered clients with actionable logistics insights, enabling Salon Line to optimize operations and increase sales by 24%.",
        //         'Refactored and optimized the core freight quote engine, applying Clean Code and Clean Architecture principles to improve maintainability and performance. This initiative resulted in a 29% decrease in quote response time, directly contributing to a 15% reduction in cart abandonment for Connect Parts, enhancing their customer conversion rate and delivery experience.',
        //         "Led the technical overhaul of Intelipost's monitoring and alerting infrastructure, integrating New Relic, Grafana, and AWS to enable proactive issue detection and performance tracking. This initiative reduced incident response time by 30% and improved SLA compliance across key logistics APIs, reinforcing trust with customers."
        //     ])
        // }),
        Object.freeze({
            company: 'Inter&Co',
            title: 'Software Engineer',
            startDate: 'Feb 2024',
            endDate: 'Jan 2025',
            // topics: Object.freeze([
            //     "Designed and deployed high-performance microservices using Java, Micronaut, and AWS within a Kafka-based, event-driven architecture. These services powered critical operations of one of Brazil's top digital banks, enabling high availability, scalability, and real-time processing across millions of transactions.",
            //     'Architected and implemented a dynamic rules engine to automate the detection of suspicious financial transactions. This solution reduced false positives and manual reviews, cutting operational costs by 40%, while reinforcing regulatory compliance and fraud prevention.',
            //     'Worked cross-functionally with product, compliance, and data teams to ensure the delivery of business-aligned, user-centric solutions across the full software development lifecycle, from design to post-release monitoring.',
            //     'Optimized database access and storage strategies, including query tuning and data model refactoring, which led to a significant drop in cloud database expenses while maintaining performance for high-throughput workloads.'
            // ])
            topics: Object.freeze([
                "Designed and deployed high-performance microservices using Java, Micronaut, Flutter, and AWS within a Kafka-based, event-driven architecture. These services powered critical operations of one of Brazil's top digital banks, enabling high availability, scalability, and real-time processing across millions of transactions.",
                'Architected and implemented a dynamic rules engine to automate the detection of suspicious financial transactions. This solution reduced false positives and manual reviews, cutting operational costs by 40%, while reinforcing regulatory compliance and fraud prevention.',
                'Worked cross-functionally with product, compliance, and data teams to ensure the delivery of business-aligned, user-centric solutions across the full software development lifecycle, from design to post-release monitoring.',
                'Optimized database access and storage strategies, including query tuning and data model refactoring, which led to a significant drop in cloud database expenses while maintaining performance for high-throughput workloads.'
            ])
        }),
        Object.freeze({
            company: 'Group Software',
            title: 'Software Engineer',
            startDate: 'Feb 2022',
            endDate: 'Feb 2024',
            // topics: Object.freeze([
            //     'Partnered with a cross-functional, US-based product team to deliver customized software solutions using Java, Spring, and Angular, ensuring seamless adaptation to international market needs and increasing user adoption in North America.',
            //     'Led the adoption of engineering best practices, including code reviews, CI/CD pipelines with AWS, and automated testing, significantly reducing technical debt and accelerating release cycles across multiple projects.',
            //     'Mentored and coached junior developers, promoting a culture of continuous learning and engineering excellence. Several mentees advanced into key roles, contributing to a more autonomous and high-performing development team.'
            // ])

            topics: Object.freeze([
                'Partnered with a cross-functional, US-based product team to deliver customized software solutions using Dart, Flutter, and Typescript, ensuring seamless adaptation to international market needs and increasing user adoption in North America.',
                'Led the adoption of engineering best practices, including code reviews, CI/CD pipelines with AWS, and automated testing, significantly reducing technical debt and accelerating release cycles across multiple projects.',
                'Mentored and coached junior developers, promoting a culture of continuous learning and engineering excellence. Several mentees advanced into key roles, contributing to a more autonomous and high-performing development team.'
            ])
        }),
        Object.freeze({
            company: 'Grupo SFA',
            title: 'Software Engineer',
            startDate: 'Jan 2021',
            endDate: 'Jan 2022',
            // topics: Object.freeze([
            //     'Engineered and integrated complex enterprise systems using Java, Spring, SQL Server, and AWS, delivering performant and reliable solutions that supported core business operations across logistics and retail domains.',
            //     'Optimized application performance across backend and frontend layers, reducing response times and resource consumption through database tuning, code refactoring, and frontend improvements in Angular and Flutter.',
            //     'Collaborated directly with business stakeholders to gather requirements, validate use cases, and ensure alignment between technology solutions and operational goals, leading to faster time-to-market and higher user satisfaction.'
            // ])
            topics: Object.freeze([
                'Engineered and integrated complex enterprise systems using Flutter, Typescript, and Supabase, delivering performant and reliable solutions that supported core business operations across logistics and retail domains.',
                'Optimized application performance across backend and frontend layers, reducing response times and resource consumption through database tuning, code refactoring, and frontend improvements in Angular and Flutter.',
                'Collaborated directly with business stakeholders to gather requirements, validate use cases, and ensure alignment between technology solutions and operational goals, leading to faster time-to-market and higher user satisfaction.'
            ])
        }),
        Object.freeze({
            company: 'Grupo Ciatos',
            title: 'Software Engineer',
            startDate: 'Jun 2020',
            endDate: 'Jan 2021',
            // topics: Object.freeze([
            //     'Designed and developed an end-to-end software platform for CaféWorking, an innovative coworking and coffee shop hybrid concept. Leveraged Java, Spring, PostgreSQL, JavaScript, and React.js to build a scalable, user-centric system that streamlined space reservations, customer management, and billing operations, supporting the successful launch and growth of the business.'
            // ])
            topics: Object.freeze([
                'Designed and developed an end-to-end software platform for CaféWorking, an innovative coworking and coffee shop hybrid concept. Leveraged Flutter, Java, Spring, and PostgreSQL to build a scalable, user-centric system that streamlined space reservations, customer management, and billing operations, supporting the successful launch and growth of the business.'
            ])
        })
    ]),
    skills: Object.freeze({
        programming: Object.freeze({
            title: 'Programming',
            items: ['Java', 'Spring', 'JavaScript', 'Angular', 'React'],
            requiredItems: ['Java'],
        }),
        databases: Object.freeze({
            title: 'Databases',
            items: ['Relational (PostgreSQL, MySQL)', 'NoSQL (MongoDB, DynamoDB)'],
            requiredItems: ['PostgreSQL', 'MongoDB'],
        }),
        cloudDevops: Object.freeze({
            title: 'Cloud & DevOps',
            items: ['AWS', 'Docker', 'Kubernetes'],
            requiredItems: ['AWS', 'Docker', 'Kubernetes'],
        }),
        systemDesign: Object.freeze({
            title: 'System Design & Programming Patterns',
            items: ['Microservices', 'Event-driven architecture', 'Kafka', 'RabbitMQ', 'RESTful APIs', 'GraphQL', 'gRPC'],
            requiredItems: ['Microservices', 'Event-driven architecture'],
        }),
        observability: Object.freeze({
            title: 'Monitoring & Observability',
            items: ['New Relic', 'Grafana', 'OpenSearch', 'Prometheus'],
            requiredItems: ['New Relic', 'Grafana'],
        }),
        testing: Object.freeze({
            title: 'Testing',
            items: ['Unit testing', 'Integration testing', 'Test-driven development (TDD)'],
            requiredItems: ['Unit testing', 'Integration testing', 'Test-driven development (TDD)'],
        })
    }),
    languages: Object.freeze([
        Object.freeze({
            name: 'English',
            level: 'Full working proficiency C1',
            certificate: 'https://cert.efset.org/en/WnV89V'
        }),
        Object.freeze({
            name: 'Portuguese',
            level: 'Native proficiency'
        })
    ]),
    education: Object.freeze({
        area: 'Software Engineering',
        type: "Associate's Degree",
        date: '2018 - 2020',
        institution: 'Federal University of Minas Gerais'
    })
});

export const allProgramming = [
    'Java',
    'Kotlin',
    'Scala',
    'Go',
    'Golang',
    'Elixir',
    'JavaScript',
    'TypeScript',
    'Node',
    'Node.js',
    'NodeJS',
    'Express',
    'Express.js',
    'ExpressJS',
    'React',
    'React.js',
    'ReactJS',
    'Angular',
    'Angular.js',
    'AngularJS',
    'Spring',
    'Spring Boot',
    'SpringBoot',
    'Maven',
    'Gradle',
    'Flutter',
    'Dart',
];
export const allDatabases = [
    'Postgres',
    'PostgreSQL',
    'MySQL',
    'MariaDB',
    'SQL Server',
    'Oracle',
    'SQLite',
    'MongoDB',
    'Mongo',
    'Mongo DB',
    'Cassandra',
    'Redis',
    'Dynamo',
    'DynamoDB'
];
export const allCloudDevops = [
    'AWS',
    'GCP',
    'Google Cloud Plataform',
    'Docker',
    'Kubernetes',
    'Jenkins',
    'Github Actions',
    'Argo',
    'ArgoCD',
    'CI/CD',
    'Linux',
    'Supabase'
];
export const allSystemDesign = [
    'Microservices',
    'Event-driven architecture',
    'RESTful APIs',
    'RESTful',
    'REST',
    'GraphQL',
    'gRPC',
    'Clean Code',
    'Design Patterns',
    'SOLID',
    'KISS',
    'YAGNI',
    'EC2',
    'EKS',
    'S3',
    'RDS',
    'SQS',
    'SNS',
    'Lambda',
    'VPC',
    'CloudFront',
    'IAM',
    'Elastic Beanstalk',
    'Kafka',
    'RabbitMQ',
    'Memcached'
];
export const allObservability = [
    'Chronosphere',
    'New Relic',
    'NewRelic',
    'Grafana',
    'OpenSearch',
    'Datadog',
    'Dynatrace',
    'Prometheus',
    'AppDynamics',
    'CloudWatch',
    'Azure Monitor',
    'Instana',
    'Elastic Observability',
    'LM Envision',
    'Splunk Observability Cloud'
];
