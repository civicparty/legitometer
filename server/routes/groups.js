var express = require('express');
var router = express.Router();
const bookshelf = require('../db/knex')

// models
const Mission = require('../Models/Mission');
const Casefile = require('../Models/Casefile');
const User = require('../Models/User');
const Group = require('../Models/Group');

router.get('/api/groups', (req, res, next) => {
  Group.forge().fetchAll()
    .then((groups) => {
      let files = [];
      groups = groups.toJSON();
      for (var i = 0; i < groups.length; i++) {
        // get id, name, and createdBy from table
        files.push([groups[i].id, groups[i].mission_id, groups[i].names]);
      }
      // console.log("send this", files);
      res.send(files);
    })
})

router.post('/api/add-group', (req, res, next) => {
  console.log("adding group", req.body.names);
  //  adding group { names: [ 'sadasdf', 'asdfasdf', '' ],
  //  group_name: '',
  //   mission_id: '1' }
  // when students are filling in the form, their group name and names will be saved to the DB here
  // mission id, group_name, each individual name

  if (req.body.names !== '') {
    bookshelf.knex.raw('SELECT setval(\'groups_id_seq\', (SELECT MAX(id) FROM groups)+1)')
    Group.forge({
      mission_id: req.body.mission_id,
      name: req.body.names,
      group_name: '',
    })
    .save()
    .then((group) => {
      console.log("new group added to database", group);
      // res.status(200).json(group)
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("group post error", err);
      // res.status(500).json({
      //   error: true,
      //   data: {
      //     message: err.message
      //   }
      // });
    })
  }
})

module.exports = router;
