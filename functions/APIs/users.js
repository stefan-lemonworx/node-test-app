const admin = require('firebase-admin');
const db = admin.firestore();

// Get Users
module.exports.getAllUsers = async (req, res) => {
  const docs = [];
  const usersRef = await db.collection('users');
  const snapshot = await usersRef.get();
  await snapshot.forEach(doc => {
     docs.push(doc.data());
  })
  if(docs.length > 0 ) { 
  await res.json(docs);
} else { 
    res.status(400).send('No users found');
  }
};

module.exports.addUser = async (req, res) => {  
const postResponse = req.body;
  try{
    await db.collection('users').doc().set(postResponse);
    res.send(`${postResponse.user} created a user`);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
}

module.exports.getUserByID = async (req, res) => {  
    try{
      const userID = req.params.id;
      const user = db.collection('users').doc(userID);
      const doc = await user.get();
      if (doc.data()) {
        res.send(doc.data());
        
      } else {
        res.status(404).send(`No user found with the ID of ${userID}`);
      }
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  }

module.exports.editUserByID = async (req, res) => {  
  const userID = req.params.id;
  const postResponse = req.body;
    try{
      await db.collection('users').doc(userID).set(postResponse);
      res.send('User updated');
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  }

  module.exports.deleteUserByID = async (req, res) => {  
    const userID = req.params.id;
      try{
        await db.collection('users').doc(userID).delete();
        res.send(`User ${userID} deleted`);
      } catch (err) {
        console.log(err);
        res.send(err);
      }
    }