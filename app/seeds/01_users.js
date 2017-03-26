
exports.seed = knex =>
  knex('users').del()
    .then(() =>
  knex('users').insert([{
    id: 1,
    displayName: 'Ms. Testteacher',
    userName: 'mstestteacher',
    isAdmin: true,
    }, {
    id: 2,
    displayName: 'Mr. Teachertest',
    userName: 'mrteachertest',
    isAdmin: true,
    }, {
    id: 3,
    displayName: 'Student1',
    userName: 'student1',
    isAdmin: false,
    }]))
