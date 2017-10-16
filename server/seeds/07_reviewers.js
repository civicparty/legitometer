exports.seed = knex =>
  // Deletes ALL existing entries
  knex('reviewers').del()
    .then(() =>
    knex('reviewers').insert([
      {
        name: 'Student1',
        group_id: 1,
      },
      {
        name: 'Student2',
        group_id: 1,
      },
      {
        name: 'Student3',
        group_id: 2,
      },
      {
        name: 'Student4',
        group_id: 2,
      }
    ])
  )
