
exports.seed = knex =>
  knex('casefiles').del()
    .then(() =>
     knex('casefiles').insert([
        {id: 1,
          name: 'Climate Change',
          createdBy: 'MozFund',
        }, {id: 2,
          name: 'Vaccines',
          createdBy: 'Austin Monitor',
        }, {id: 3,
          name: 'Russia Hacking',
        createdBy: 'You',
        }]),
        knex.raw('SELECT setval(\'casefiles_id_seq\', (SELECT MAX(id) FROM casefiles)+1)')
);
