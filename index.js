const person = personConstructor("Jack", 32, ['Let it rip', 'Make the mother of all omelettes'])


console.log(person.Hobbies)
function personConstructor(Name, Age, Hobbies)
{
    const person =
    {
        Name,
        Age,
        Hobbies
    }
    return person;
}