const skills = [
    { id: 1, skill: 'Make the best web applications ever.', description: 'Honestly, he is the greatest at that.' },
    { id: 2, skill: 'Make the coolest games ever.', description: 'Honestly, like really really cool games.' },
    { id: 3, skill: 'Hermit for 12 days straight.', description: 'Who needs human interaction anyways?' },
    { id: 4, skill: 'Hack into the Pentagon.', description: 'Would prefer to not go to jail, but willing to for the right price.' },
    { id: 5, skill: 'Make above average money.', description: "Money can't buy happiness, but it sure helps" }
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