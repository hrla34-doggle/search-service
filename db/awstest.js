/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
// function below gets all the images in the bucket, as data.Contents.
// for a given city, we can then iterate through each object in data.Contents and check the Key property where it equals that city
const aws = require('aws-sdk');
const config = require('./aws-config.js');

const imageUrl = (callback) => {
  aws.config.update({
    accessKeyId: config.AWSAccessKeyId,
    secretAccessKey: config.AWSSecretKey,
    region: 'us-west-1',
  });

  const params = {
    Bucket: 'front-end-capstone-trafalgar',
  };

  const s3 = new aws.S3();
  s3.listObjects(params, (err, data) => {
    if (err) { console.log(err); } else { callback(data.Contents); }
  });
};

module.exports.imageUrl = imageUrl;

// ALTERNATE VERSION USING ASYNC AWAIT

// (async function () {
//   try {
//     aws.config.setPromisesDependency();
//     aws.config.update({
//       accessKeyId: config.AWSAccessKeyId,
//       secretAccessKey: config.AWSSecretKey,
//       region: 'us-west-1',
//     });

//     const s3 = new aws.S3();
//     const response = await s3.listObjectsV2({
//       Bucket: 'front-end-capstone-trafalgar',
//     //   Key: 'Giza.jpg',
//     }).promise();

//    console.log (response);
//   } catch (e) {
//     console.log(e);
//   }
// }())
