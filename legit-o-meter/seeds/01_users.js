
exports.seed = knex =>
  knex('users').del()
    .then(() =>
  knex('users').insert([{
    id: 1,
    displayName: 'Ms. Testteacher',
    userName: 'mstestteacher',
    }, {
     id: 2,
     displayName: 'Mr. Teachertest',
     userName: 'mrteachertest',
   }]))
