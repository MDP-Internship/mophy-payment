var express = require("express");
var router = express.Router();

const PaymentHistory = require("../models/paymentHistoryModel");
const Notification = require("../models/notificationModel");
const User = require("../models/userModel");
const Input = require("../models/inputModel");

router.get("/inputs", (req, res) => {
  Input.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

router.get("/paymentHistory", (req, res) => {
  PaymentHistory.find({}, null, { sort: { id: 1 } }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

router.put("/paymentHistory/:id", (req, res) => {
  const filter = { id: req.params.id };
  const update = req.body;

  PaymentHistory.findOneAndUpdate(filter, update, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

router.delete("/paymentHistory/:id", (req, res) => {
  const filter = { id: req.params.id };

  PaymentHistory.findOneAndRemove(filter, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

router.get("/notifications", (req, res) => {
  Notification.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

router.post("/users", (req, res) => {
  const user = new User(req.body);

  user.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

router.post("/loginUser", (req, res) => {
  const filter = { email: req.body.email };
  User.findOne(filter, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      if (data) {
        if (data.password === req.body.password) {
          res.json(data);
        } else {
          res.send(null);
        }
      } else {
        res.send(null);
      }
    }
  });
});

module.exports = router;
