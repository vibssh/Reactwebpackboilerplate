const fs = require('fs');
const fsExtra = require('fs-extra');
const argv = require('yargs').argv;
const path = require('path');
const yaml = require('js-yaml');

let navListObj;
let folderDeleted;

const componentType = argv['_'][0] ? argv['_'][0].toLowerCase() : '';

const baseFolder =
  componentType === 'class'
    ? './Boilerplate/ClassComponent/'
    : componentType === 'navigation'
    ? './Boilerplate/NavigationalComponent/'
    : './Boilerplate/FunctionalComponent';

const appType = argv['_'][1] ? argv['_'][1].toLowerCase() : '';

const destFolder =
  appType === 'ds'
    ? './app/components/DS/'
    : appType === 'library'
    ? './app/components/Library/'
    : './app/components/Library/';

const renameFiles = () => {
  const newDir = destFolder + argv.$0 + '/';
  let files = [];
  fs.readdir(newDir, function(err, lists) {
    if (err) console.log(err);
    lists.forEach(function(list) {
      const fileExt = path.parse(list).ext;
      const newFileName =
        list !== 'data.yaml' ? argv.$0 + fileExt : argv.$0 + '-data' + fileExt;
      const oldFilePath = newDir + '/' + list;
      const newFilePath = newDir + '/' + newFileName;

      files.push(newFileName);
      fs.rename(oldFilePath, newFilePath, function(err) {
        if (err) {
          console.log(err);
          return;
        }
      });
    });
    replaceFileContent(files);
    //readNavDataFile();
  });
};

const replaceFileContent = files => {
  const fileDir = destFolder + argv.$0;
  files.forEach(function(file) {
    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth() + 1;
    const fullYear = today.getFullYear();
    const currentTime = today.toLocaleTimeString();
    const dateObj = `${date}/${month}/${fullYear} ${currentTime}`;

    const fileData = fs.readFileSync(fileDir + '/' + file, 'utf8');
    const result = fileData
      .replace(/ComponentName/g, argv.$0)
      .replace(/date/g, dateObj);
    fs.writeFile(fileDir + '/' + file, result, 'utf8', function(err) {
      if (err) {
        return console.log(err);
      }
    });
  });
};

const readNavDataFile = () => {
  const dir = destFolder + 'Navigation/';
  const file = 'Navigation-data.yaml';
  const noNav = argv['_'][0];

  const fileData = yaml.load(fs.readFileSync(dir + file, 'utf8'));
  navListObj = fileData.navigation.list;
  const objLength = navListObj !== null ? navListObj.length : 0;
  const id = objLength + 1;
  const name = argv.$0;
  const data = `\n     - id: ${id}\n       name: ${name}`;

  if (noNav === undefined) {
    fs.appendFile(dir + file, data, err => {
      if (err) throw err;
      console.log(`${argv.$0} add to Navigation `);
    });
  }
};

const emptyDirectory = () => {
  fsExtra.emptyDirSync(destFolder);
};

const watcher = () => {
  fs.watch(destFolder, (eventType, filename) => {
    folderDeleted = filename;

    return folderDeleted;
  });
};

const createComponent = () => {
  const filePath = destFolder + argv.$0;

  fsExtra.pathExists(filePath, (err, exists) => {
    if (err) console.log(err);
    if (!exists) {
      fsExtra
        .copy(baseFolder, filePath)
        .then(() => {
          console.log('Component Directory Created and  Copied Successfully');
          renameFiles();
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      console.log('Directory Already Exists - Choose other name');
    }
  });
};

module.exports = {
  createComponent: createComponent,
  emptyDirectory: emptyDirectory,
  watcher: watcher
};
