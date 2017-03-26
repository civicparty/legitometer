
exports.seed = knex =>
  knex('collections').del()
    .then(() =>
     knex('collections').insert([
        {id: 1,
          name: 'Climate Change',
          createdBy: 'MozFund',
        }, {id: 2,
          name: 'Vaccines',
          createdBy: 'Austin Monitor',
        }, {id: 3,
          name: 'Russia Hacking',
        createdBy: 'You',
        }
      ]),
knex.raw('SELECT setval(\'collections_id_seq\', (SELECT MAX(id) FROM collections))')
);
