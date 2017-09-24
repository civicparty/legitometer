
exports.seed = knex =>
  // Deletes ALL existing entries
  knex('groups').del()
    .then(() =>
    knex('groups').insert([
      {
        group_name: 'Team 1',
        name: 'Student 1'
      }, {
        group_name: 'Team 1',
        name: 'Student 2'
      }, {
        group_name: 'Team 1',
        name: 'Student 3'
      }
    ])
  )
