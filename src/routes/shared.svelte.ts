export const db = $state({
    id: 0,
    resumes: [] as any[]
});

export function getAllResumes() {
    return db.resumes;
}

export function getResume(id: number) {
    return db.resumes.find(e => e.id === id)
}

export function addResume(resume: any) {
    db.id += 1;
    resume.id = db.id;
    db.resumes = [...db.resumes, resume];
    return resume;
}
