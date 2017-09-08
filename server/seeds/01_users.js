
exports.seed = knex =>
  knex('users').del()
    .then(() =>
  knex('users').insert([{
    name: 'Ms. Testteacher',
    isAdmin: true,
    }, {
    name: 'Mr. Teachertest',
    isAdmin: true,
    }, {
    name: 'Student1',
    isAdmin: false,
    }]))
