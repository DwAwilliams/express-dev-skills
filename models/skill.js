const skills = [
    {id: 135789, skill: 'HTML'},
    {id: 456738, skill: 'CSS'},
    {id: 230945, skill: 'JavaScript'},
    {id: 125690, skill: 'NodeJs'},
    {id: 766328, skill: 'Express'},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,


}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id)
}

function create(skill) {
    skill.id = Date.now() % 1000000
    skills.push(skill)
}

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}


