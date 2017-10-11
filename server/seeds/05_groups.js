
exports.seed = knex =>
  // Deletes ALL existing entries
  knex('groups').del()
    .then(() =>
    knex('groups').insert([
      {
        group_name: 'Team 1',
        name: 'Student1',
        mission_id: 1,
      },
      {
        group_name: 'Team 1',
        name: 'Student2',
        mission_id: 1,
      },
      {
        group_name: 'Team 1',
        name: 'Student3',
        mission_id: 1,
      }
    ])
  )
