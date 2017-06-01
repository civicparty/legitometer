var express = require('express');
var router = express.Router();
//console.log(__dirname);
const bookshelf = require('../../db/knex')

// models
const Mission = require('../Models/Mission');
const Casefile = require('../Models/Casefile');
// collections
const Missions = require('../Collections/missions');

// check if user authorized
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
  let files = {};
  // where user_id === logged_in user (req.session.user)
  let user = 1;
  // this works but only for ONE ROW ***********************************************
  Mission.forge().where({user_id: user}).fetchAll({withRelated: ['casefile'], debug: true})
  .then((mission) => {
    //send missions + casefiles
  //  console.log(mission.models); // need to loop over mission.models object
  //  console.log("and now the loop because i really need this to work now");
    mission = mission.toJSON();
  //  console.log("no wait really this is what i needed", mission);
    for (var i = 0; i < mission.length; i++) {
      //console.log("hi, mission!", mission[i].name, mission[i].casefile.name);
      files[mission[i].name] = mission[i].casefile.name;
    }
    console.log(files);
    // send files object... somewhere... to component?
    res.send(files)
    // console.log("mission: ", mission.attributes.name); //mission name
    // let cf = mission.related('casefile');
    // console.log("casefile: ", cf.attributes.name); //casefile name
  })
  // ***********************************************************

  // ***********************************************************
  // select * from missions where user_id = logged in user
  // select * from casefiles where id = missions.casefile_id
  // THIS ALSO WORKSish... but does not select all even though the docs say it should...
  // Mission.where({user_id: 1}).fetch({withRelated: ['casefile']}).then(function(mission) {
  //   // prints one row from 'casefiles' table:
  //   // {"id":1,"name":"Climate Change","createdBy":"MozFund","created_at":"2017-05-26T22:12:19.029Z","updated_at":"2017-05-26T22:12:19.029Z"}
  // 	console.log(JSON.stringify(mission.related('casefile')));
  // });
// ***********************************************

// *** THIS IS NOT WORKING ***********************************************
// use Missions collection to fetch all?
  // Missions.forge().where({user_id: 1}).fetchAll({withRelated: ['casefile'], debug: true,})
  // .then((mission) => {
  //   console.log("mission: ", mission);
  //   let cf = mission.related('casefile');
  //   console.log("casefile: ", cf);
  // })
  // .catch((err) => {
  //   console.log('err', err);
  // });
// ***********************************************

// *** I don't think this works either... but can't remember anymore... ***
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
// ***********************************************
});





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
