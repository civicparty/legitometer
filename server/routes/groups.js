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
        files.push([groups[i].id, groups[i].review_id, groups[i].group_name, groups[i].name]);
      }
      // console.log("send this", files);
      res.send(files);
    })
})

router.post('/api/add-group', (req, res, next) => {
  console.log("adding group", req.body);
  // when students are filling in the form, their group name and names will be saved to the DB here
  // mission id, group_name, each individual name - req.body.names will probably be in an array
  for (var i = 0; i < req.body.names.length; i++) {
    bookshelf.knex.raw('SELECT setval(\'groups_id_seq\', (SELECT MAX(id) FROM groups)+1)')
    Group.forge({mission_id: req.body.mission_id, group_name: req.body.group, name: req.body.names[i]})
    .save()
  }
})

module.exports = router;
