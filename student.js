export class Student
{
    name
    email
    academicRegister
    subjects

    constructor(name, email, academicRegister, subjects)
    {
        this.name = name
        this.email = email
        this.academicRegister = academicRegister
        this.subjects = subjects
    }

    FirstSubject(subjects)
    {
        console.log(`First subject: ${subjects[0]}`)
    }

    LastSubject(subjects)
    {
        console.log(`Last subject: ${subjects[subjects.length - 1]}`)
    }
}
