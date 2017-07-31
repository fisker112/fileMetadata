var express = require('express');
var app = express();
var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

app.use(express.static('public'));

app.post('/fileupload',upload.single('data'),function (req, res,next) {
  if(req.file){
    res.status(200).json({
      filename:req.file.originalname,
      size:req.file.size,
      type:req.file.mimetype
    })
  }
  else{
    res.status(500).json({
      error:'Please select at least one file to upload'
    })
  }
  
})

// listen for requests
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
