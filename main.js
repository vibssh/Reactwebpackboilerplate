const fs 					= require('fs');
const fsExtra 		= require('fs-extra');
const argv 				= require('yargs').argv;
const path 				= require('path');



const componentType = (argv['_'][0]) ? (argv['_'][0]).toLowerCase() : '';
const baseFolder = (componentType !== 'class') ? './Boilerplate/FunctionalComponent/' : './Boilerplate/ClassComponent/';

const destFolder = './app/components/';

const renameFiles = () => {
	const newDir = destFolder + argv.$0 + '/';
	let files = [];
		fs.readdir(newDir, function(err, lists) {
			if(err) return done(err);
				lists.forEach(function (list) {
					const oldFileName = path.parse(list).name;
					const fileExt = path.parse(list).ext;
					const newFileName = argv.$0 + fileExt;
	 				const oldFilePath = newDir + '/' + list;
	 				const newFilePath = newDir + '/' + newFileName;

	 				files.push(newFileName);
	 				fs.rename(oldFilePath, newFilePath, function(err) {
	 					if(err) {console.log(err); return ;}	 									 	
	 				 	});
	 			})
				replaceFileContent(files);
	 	})
}

const replaceFileContent = (files) => {
		 const fileDir = destFolder + argv.$0;
		 files.forEach(function(file) {

		 	const today = new Date();
		 	const date = today.getDate();
		 	const month = today.getMonth() + 1;
		 	const fullYear = today.getFullYear();
		 	const currentTime = today.toLocaleTimeString();

		 	const dateObj = `${date}/${month}/${fullYear} ${currentTime}`;
		 	const fileData = fs.readFileSync(fileDir + '/' + file, 'utf8');
		 	const result = fileData.replace(/ComponentName/g, argv.$0).replace(/date/g, dateObj);
		 	  fs.writeFile(fileDir + '/' + file, result, 'utf8', function(err) {
		      if (err) {
		       return console.log(err);
		    };
		});		 	
	})	
}

const createComponent = () => {
	const filePath = destFolder + argv.$0;
	fsExtra.pathExists(filePath, (err, exists) => {
		if(err) console.log(err);
		if(!exists) {
					fsExtra.copy(baseFolder, filePath)
					 .then(() => {
					 	console.log('Component Directory Created and  Copied Successfully');
					 	renameFiles();					 	
					 })
					 .catch((err) => {
					 	console.log(err);
					 })
			} else {
			console.log('Directory Already Exists - Choose other name');
		}
	});
}

module.exports = {
		createComponent: createComponent
}