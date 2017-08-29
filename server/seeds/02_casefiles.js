
    exports.seed = function(knex, Promise) {
      return Promise.join(
        knex('casefiles').del(),
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
          }])
      ); //end join
    }; //end function
