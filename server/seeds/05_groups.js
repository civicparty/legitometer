
exports.seed = knex =>
  // Deletes ALL existing entries
  knex('groups').del()
    .then(() =>
    knex('groups').insert([
      {
        group_name: 'Team 1',
        names: 'Student 1, Student 2, Student 3'
      },
    ])
  )
