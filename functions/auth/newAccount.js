const admin = require('firebase-admin');

module.exports.addUserByEmail = (req, res) => {
  const newUserInfo = req.body;
  admin
      .auth()
      .createUser(newUserInfo)
      .then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log('Successfully created new user:', userRecord.uid);
        res.send(newUserInfo);
      })
      .catch((error) => {
        console.log('Error creating new user:', error);
      });
};
