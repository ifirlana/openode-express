/**
 * Created by ikhlasfirlana on 2/15/18.
 */
var express = require("express");
var router = new express.Router();
var path    = require("path");

// GET /
router.get("", function(req, res) {


    console.log("[INCOMING]", req.body);

    // res.status(200).send("hello")
    res.sendFile(path.join(__dirname+"/../html/welcome.html"));
});


module.exports = router;

