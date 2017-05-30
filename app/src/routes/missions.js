var express = require('express');
var router = express.Router();
//console.log(__dirname);
const bookshelf = require('../../db/knex')

const Mission = require('../Models/Mission');
const Casefile = require('../Models/Casefile');

function authorizedUser(req, res, next) {
  const userID = req.session.user;
  if (userID) {
    next();
  } else {
    res.render('restricted');
  }
}

// need to display existing missions + casefiles (if any) when user logs in
router.get('/api/missions', (req, res, next) => {
  let files = [];
  // user_id: req.session.user
  // where user_id === logged_in user
  let user = 1;
  Mission.forge().where({user_id: user}).fetch({withRelated: ['casefile']})
  .then((mission) => {
    console.log("mission: ", mission.attributes.name); //mission name
    let cf = mission.related('casefile');
    console.log("casefile: ", cf.attributes.name); //casefile name

  })
  //Unhandled rejection error: column casefiles.mission_id does not exist



  // Mission.forge().where({user_id: 1}).fetchAll()
  // .then((mission) => {
  //   //get missions
  //   res.json({error: false, data: mission.toJSON()});
  //   // save mission table data to array
  //   files.push(mission.toJSON());
  //   // console.log(files);
  // })
  // .catch((err) => {
  //   res.send(err);
  // })
});


  // where user_id === loggind_in user && mission/casefiles inner join
  // get casefiles
  // send missions + casefiles


// get mission by id
router.get('/api/missions/:id', function(req, res, next) {
  Mission.forge().where({id: req.params.id}).fetchAll()
    .then((mission) => {
      res.json({error: false, data: mission.toJSON()});
    })
})

// router.get('/api/missions', function(req, res, next) {
//   console.log("hi's");
//   // res.send('the missions route, it has been gotten');
//   req.session.user = 1;
// //select collections.name from collections inner join missions ON collections.id = missions.collection_id;
//   let payload = [];
//   knex('missions')
//     .where('user_id', req.session.user)
//     .then((missions) => {
//         payload.push(missions);
//       knex('missions')
//       .innerJoin('casefiles', 'missions.casefile_id', 'casefiles.id')
//       .where('user_id', req.session.user).select('casefiles.name').then((casefiles) => {
//         // here want collections.name where collections.id === missions.collection_id
//         // and how to send it back
//         payload.push(casefiles);
//         res.send(payload);
//       })
//     })
// });
//
// router.post('/api/add-mission', (req, res, next) => {
//   console.log("woohoo, post route add a mission!!!");
//   knex.raw('SELECT setval(\'missions_id_seq\', (SELECT MAX(id) FROM missions))')
//   .then(() => {
//     knex('missions').insert({
//       user_id: 1,
//       //user_id: knex.select('id').from('users').where('id', req.session.user.id),
//       name: req.body.name,
//       casefile_id: req.body.casefile_id,
//     }, '*')
//
//     .then((data) => {
//       res.sendStatus(200);
//     })
//     .catch((err) => {
//       next(err);
//     });
//   });
// });

module.exports = router;
