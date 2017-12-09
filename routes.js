const express = require('express');
const pgp = require('pg-promise')();
const db = require('./db.js');
const router = express.Router();

router.get('/api/btc', (req, res) => {
  res.render("./index")
})

router.get('/api/DB', (req, res) => {
  db.getAllUsers()
   .then(userData => {
    //console.log("test :" + userData);
    res.status(200).json({
      status: "success",
      userData: userData
    });
  }).catch(err => {
    console.log(err);
  });
});

// router.get('text', (req, res) => {
//   res.send("hello")
// });

module.exports = router;
