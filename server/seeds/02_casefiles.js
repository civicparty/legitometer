
    exports.seed = function(knex, Promise) {
      return Promise.join(
        knex('casefiles').del(),
        knex('casefiles').insert([
          {name: 'Climate Change',
            createdBy: 'MozFund',
          }, {name: 'Vaccines',
            createdBy: 'Austin Monitor',
          }, {name: 'Russia Hacking',
          createdBy: 'You',
          }])
      ); //end join
    }; //end function
