
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('missions').del(),
    knex('missions').insert([
      {
        id: 1,
        name: 'Period 1',
        casefile_id: 1,
        user_id: 1,
        url: 'http://localhost:3000/mstestteacher/1'
      }, {
        id: 2,
        name: 'Period 3',
        casefile_id: 2,
        user_id: 1,
        url: 'http://localhost:3000/mstestteacher/2'
      },{
        id: 3,
        name: 'Period 2',
        casefile_id: 1,
        user_id: 2,
        url: 'http://localhost:3000/mrteachertest/3'
      }])
); // end join
}; // end function
