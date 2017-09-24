
exports.seed = knex =>
  knex('users').del()
    .then(() =>
  knex('users').insert([{
    name: 'Ms. Testteacher',
    isAdmin: true,
    city: 'Austin',
    school: 'X High School'
    }, {
    name: 'Mr. Teachertest',
    isAdmin: true,
    city: 'Austin',
    school: 'X Middle School'
    }]))
