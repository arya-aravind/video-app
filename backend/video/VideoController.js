var express = require('express');
var router = express.Router();
var app=express();
var bodyParser = require('body-parser');
var multer = require('multer');
let fs=require("fs");
var path=require('path');
var VerifyToken = require(__root + 'auth/VerifyToken');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Videous = require('./Video');

const DIR = 'C://Users/ARYA ARAVIND/Desktop/video_app/frontend/src/assets/uploads';
 
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
    }
});
let upload = multer({storage: storage});

 
router.post('/add_video',upload.single('fileKey'),function (req, res) {
//console.log(req.file);
 var path = req.file.path;
 var filename = req.file.filename;
 
  // if (!req.file) {
  //       console.log("No file received");
  //       return res.send({
  //         success: false
  //       });
    
  //     } else {
  //       console.log('file received');
  //       return res.send({
  //         success: true
  //       })
  //     }
	
 
 Videous.create({
		video_name : req.body.video_name,
		author : req.body.author_name,
		filename : filename,
	  }, 
   function (err, user) {
			if (err) return res.status(500).send("There was a problem adding the information to the database.");
			res.status(200).send(user);
					});
});

router.route('/all_videous').get((req, res) => {
    Videous.find((err, val) => {
    	console.log(val);
        if (err)
            console.log(err);
        else
            res.json(val);
    });
});

router.route('/get_video_id/:id').get((req, res) => {
     Videous.findById({_id: req.params.id}, (err, issue) => {

     const filename = issue.filename
 

        if (err)
            console.log(err);
        else
            res.json(filename);
    });
});


module.exports = router;

