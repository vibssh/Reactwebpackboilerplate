const gulp = require('gulp');
const fs = require('fs');
const argv = require('yargs').argv;

const filePath = './app/components/'

gulp.task('createDir', () => {
  if(argv.name === undefined) {
    console.log('Please use it like so: - gulp createDir --name Button');
  } else {
    const componentName = argv.name;
    if(!fs.existsSync(componentName)) {
      fs.mkdirSync(filePath + componentName);
      fs.createWriteStream(filePath + componentName + '/' + componentName +'.js');
      fs.createWriteStream(filePath + componentName + '/' + componentName +'.scss');
      fs.createWriteStream(filePath + componentName + '/' + componentName +'.yaml');
    }
  }

})



gulp.task('default', ['createDir']);
