const express = require('express');
const router = express.Router();
const UserSchema = require('./userSchema');

router.get('/', async (req, res) => {
    try {
        let allData = await UserSchema.find();
        res.json(allData);
    } catch (err) {
        console.log(err);
    };
});

router.post('/addUser', async (req, res) => {
    console.log("req.body = ", req.body);
    try {
        let addUser = new UserSchema({
            userName: req.body.userName,
            workId: req.body.workId,
            familyNum: req.body.familyNum,
        });
        let addUserSave = await addUser.save();
        res.json(addUserSave);
    } catch (err) {
        console.log(err);
    };
});

module.exports = router;