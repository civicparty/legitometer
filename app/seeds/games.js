
exports.seed = knex =>
  knex('games').del()
    .then(() =>
      knex('games').insert([
        {
          id: 1,
          name: 'period 1',
          collection_id: 1,
          user_id: 1,
        }, {
          id: 2,
          name: 'period 3',
          collection_id: 2,
          user_id: 1,
        },{
          id: 3,
          name: 'period 2',
          collection_id: 1,
          user_id: 2,
        }]),
        knex.raw('SELECT setval(\'games_id_seq\', (SELECT MAX(id) FROM games))')
);
