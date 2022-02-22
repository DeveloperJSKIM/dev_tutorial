
const fs = require('fs');
const exec = require('child_process').exec;
const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const morgan = require('morgan');
const _ = require('lodash');
const app = express();

app.use(fileUpload({
	createParentPath: true
}));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));


const port = 3000;


app.listen(port,()=>{
	console.log(`Server is on port ${port}.`);
});
app.post('/upload',async(req,res)=>{
	try{
		if(!req.files){
			res.send({
			status:false,
			message:'파일전송실패'
			
		});
	}else{
		let f = req.files.uploadFile;
		f.mv('./uploads/'+f.name);
		res.send({
			status: true,
			message:'파일이 업로드 되었습니다.',
			data:{
				name: f.name,
				minetype: f.minetype,
				size: f.size,
			}
		});
		exec('cd /home/kjs/kaldi/egs/voxforge/online_demo && ./run.sh',function(err,stdout,stderr){
			console.log('stdout:'+stdout);

			if(err !== null){
				console.log('error:'+err);
	        	}
		});
	}
	}catch(err){
		res.status(500).send(err);
	}
});
app.get('/download',async(req,res)=>{
	const textfile = fs.readFileSync("/home/kjs/kaldi/egs/voxforge/online_demo/online-data/audio/trans.txt");
	textfile.toString();
	try{
		res.send(textfile);
	}
	catch(err){
		res.status(500).send(err);
	}
})
