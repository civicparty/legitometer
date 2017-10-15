
exports.seed = knex =>
  // Deletes ALL existing entries
  knex('groups').del()
    .then(() =>
    knex('groups').insert([
      {
        name: 'Team1',
        mission_id: 1,
      },
      {
        name: 'Team2',
        mission_id: 3,
      }
    ])
  )
