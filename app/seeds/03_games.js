
exports.seed = knex =>
  knex('games').del()
    .then(() =>
      knex('games').insert([
        {
          id: 1,
          name: 'Period 1',
          collection_id: 1,
          user_id: 1,
          url: 'http://localhost:3000/mstestteacher/1'
        }, {
          id: 2,
          name: 'Period 3',
          collection_id: 2,
          user_id: 1,
          url: 'http://localhost:3000/mstestteacher/2'
        },{
          id: 3,
          name: 'Period 2',
          collection_id: 1,
          user_id: 2,
          url: 'http://localhost:3000/mrteachertest/3'
        }]),
        knex.raw('SELECT setval(\'games_id_seq\', (SELECT MAX(id) FROM games))')
);
