var express = require('express');
var router = express.Router();
const bookshelf = require('../db/knex')

// models
const Mission = require('../Models/Mission');
const Casefile = require('../Models/Casefile');
const User = require('../Models/User');

router.get('/api/groups', (req, res, next) => {
  Casefile.forge().fetchAll()
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


module.exports = router;
