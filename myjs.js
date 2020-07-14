
const fs = require("fs");
var path = require("path");
const srcFolder = path.resolve(__dirname,"old") + "/";
const outFolder = path.resolve(__dirname,"new") + "/";
const nameFolder = path.resolve(__dirname,"name") + "/";
const notes = srcFolder; 
var getFiles = function (dir, files_)
	{
   		files_ = files_ || [];
    	var files = fs.readdirSync(dir);
  		for (var i in files)
  		{
        	var name = dir + '/' + files[i];
      		if (fs.statSync(name).isDirectory())
      		{
            	getFiles(name, files_);
        	}
        	else 
        	{
           		files_.push(name); 
        	}
    	}
    	return files;
    
	};
const NameFileArr = getFiles(nameFolder);
fs.readdir(srcFolder, (err, files) => 
	{
  		files.forEach((file, i) => 
  		{
    		fs.rename(srcFolder + file, outFolder +  NameFileArr[i], err => 
    		{
      			if (err) throw err;
      			console.log(`rename - ${file} completed!`);
    		});
  		});
	});



