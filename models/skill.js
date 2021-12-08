const skills = [
    { id: 1, skill: 'Make the best web applications ever.' },
    { id: 2, skill: 'Make the coolest games ever.' },
    { id: 3, skill: 'Hermit for 12 days straight.' },
    { id: 4, skill: 'Hack into the Pentagon.' },
    { id: 5, skill: 'Make above average money.' }
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Math.floor(Math.random() * 1000);
    skills.push(skill);
}

function deleteOne(id) {
    const skillIdx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(skillIdx, 1);
}