const cron = require('node-cron');
const nodemailer = require('nodemailer');
const dbTask = require('../schema/task');
const db = require('../schema/user')
const { model } = require('mongoose');



// Define your cron schedule (12:00 PM every day)


//cron.schedule('0 12 * * *', async () => 
const get = async(res) => {
  try {
    // Connect to your database and check the data
    // Replace this with your actual database connection and query logic
    const databaseData = await fetchDataFromDatabase();

    // If there is data to send, send an email
    if (databaseData) {
      const transporter = nodemailer.createTransport({
        service: 'Gmail', // e.g., 'Gmail', 'Outlook'
        auth: {
          user: "navjangra1234@gmail.com", // replace with your email
          pass: "MyPass1234@", // replace with your email password
        },
      });

      let mailOptions = {
        from: 'navjangra1234@gmail.com',
        to: 'user-email@example.com', // replace with the user's email
        subject: 'Some tasks are pending',
        text: 'Hello, Please complete your task!'
      };

    for (let i = 0; i < databaseData.length; i++) {
        mailOptions.to = databaseData[i].email;

        await transporter.sendMail(mailOptions);
        res.json({ message :'Email sent successfully'});
      }


 
    }
  } catch(err) {
    res.send( {err});
  }
};

// Function to fetch data from the database
async function fetchDataFromDatabase() {

    try {

        // Get the tasks which are due today
        let docs = await dbTask.collection.find({"etd" : {$gt : new Date()}}).toArray();

        // Map the docs into an array of just the _ids
        var ids = docs.map(function(doc) { return doc.user; });

        // Get the users whose tasks are due.
        docs = await db.collection.find({"_id": {$in : ids}}).toArray()
        //res.json({docs})
        // docs contains your answer

        if (docs === null) {
            //res.json({message : "no task pending"})
            console.log('nothing pending')
        }
        else {
            return docs 
        }
    } catch(err){
        //res.json({message : "Some error has occured"})
        console.log('errroooorrrr')
    }
}

module.exports = {get}