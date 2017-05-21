
exports.seed = knex =>
  knex('users').del()
    .then(() =>
  knex('users').insert([{
    id: 1,
    name: 'Ms. Testteacher',
    isAdmin: true,
    }, {
    id: 2,
    name: 'Mr. Teachertest',
    isAdmin: true,
    }, {
    id: 3,
    name: 'Student1',
    isAdmin: false,
    }]))
