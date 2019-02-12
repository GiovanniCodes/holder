//This file holds any configuration variables we may need
//'config.js' is typically ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
  db: {
    uri:
      "mongodb://mongodbbootcamp:password1@ds161475.mlab.com:61475/mongodbbootcamp" //place the URI of your mongo database here.
  },
  port: 8080
};
