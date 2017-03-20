
exports.seed = knex =>
  knex('users').del()
    .then(() =>
  knex('users').insert([{
    id: 1,
    displayName: 'Mr. Teacher',
    userName: 'mrteacher',
    }, {
     id: 2,
     displayName: 'Ms. Teacher',
     userName: 'msssteacher',
   }]))
