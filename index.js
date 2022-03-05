let express = require('express');
let router = express.Router();
let userControllers = require('userController.js');


router.get('/', (req, res, next) => {
    res.render('index', {title: 'Express'});
});


//Create data
router.post('/', (req, res, next) => {
    let tweetInfo = req.body;

    if (!tweetInfo.text || !tweetInfo.id) {
        res.send();
    }
    else {
        let c = 1;
        User.findOne({}, (err, data) => {
            if (data) {
                c = data.id + 1;
            }
            let newTweet = new User({
                id: c,
                text: tweetInfo.text
            });
            newTweet.save((err, Person) => {

            });

        }).sort({ _id: -1 }).limit(1)
    }
    res.json({Success: '1'});
});


//Read data
router.get('/show', (req, res, next) => {
    User.find((err, response) => {
        res.json(response);
    });
});


//Update data
router.put('/user/:id', (req, res) => {
    let id = req.params.id;
    let personInfo = req.body;

    User.update({ id: id }, { screen_name: personInfo.screen_name }, (err, rawResponse) => {
    });
});


//Delete data
router.delete('/user/:id', (req, res) => {
    let id = req.params.id;

    User.findOneAndRemove({'id': id}, (err, offer) => {});
    res.send("Tweet deleted");
});


module.exports = router;