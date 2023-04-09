// ClouKey="356675385545593"
// CloudName="dhlvgmhea"
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dhlvgmhea',
  api_key: '356675385545593',
  api_secret: 'Qx7_iufQ__cmCBx9FY40JqVP1S4'
});


const file = image.file; //imageSave seria el objeto donde guardaremos las imagenes    

//asi la subimos
cloudinary.uploader.upload(file.path, { folder: "Primera" }, (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  
  }
});