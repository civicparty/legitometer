var express = require('express');
var router = express.Router();
const bookshelf = require('../db/knex')

// models
const Mission = require('../Models/Mission');
const Casefile = require('../Models/Casefile');
const User = require('../Models/User');
const Group = require('../Models/Group');
const Reviewer = require('../Models/Reviewer');

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
  bookshelf.knex.raw('SELECT setval(\'groups_id_seq\', (SELECT MAX(id) FROM groups)+1)')
  bookshelf.knex.raw('SELECT setval(\'reviewers_id_seq\', (SELECT MAX(id) FROM reviewers)+1)')

  Group.forge({
    mission_id: req.body.mission_id,
    name: "group name placeholder",
  })
  .save()
  .then((group) => {
    console.log("new group added to database", group);
    // TODO refactor so that it saves each name to a row and doesn't save the empty string
      for (var i = 0; i < req.body.names.length; i++) {
        if (req.body.names[i] !== '') {
        Reviewer.forge({
          group_id: group.id,
          name: req.body.names[i]
        })
        .save()
      }
      }


  })
  .then(() => {
    console.log("group/reviewer adding success");

    res.sendStatus(200);
    // res.status(200).json(group) //these seemed to be causing errors..? it might have been something else though
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
})

module.exports = router;
