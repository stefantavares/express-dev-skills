const skills = [
    { id: 1, skill: 'Make the best web applications ever.' },
    { id: 2, skill: 'Make the coolest games ever.' },
    { id: 3, skill: 'Hermit for 12 days straight.' },
    { id: 4, skill: 'Hack into the Pentagon.' },
    { id: 5, skill: 'Make above average money.' },
];

module.exports = {
    getAll
};

function getAll() {
    return skills;
}