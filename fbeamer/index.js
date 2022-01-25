'use strict'

class FBeamer{
    constructor ({pageAccessToken , VerifyToken}){
        try {
            this.pageAccessToken = pageAccessToken;
        } catch (error) {
            console.error(error);
        }

        try {
            this.VerifyToken = VerifyToken;
        } catch (error) {
            console.error(error);
        }
    }
  registerHook(req, res) {
  const params = req.query;
  console.log(params);
  const mode = params['hub.mode'],
  token = params['hub.verify_token'],
  challenge = params['hub.challenge'];

  try {
      if (mode === 'subscribe' && token === this.VerifyToken){
          console.log("The webhook is registered")
          return res.send(challenge);
      } else {
          console.log("Could not register webhook");
          return res.sendStatus(200);
        }
  } catch(e) {
      console.log(e);
    }
  }

  incoming (req, res, cb) {
    res.sendStatus(200);
    console.log(req.body.entry);
    // Extract the body of the POST request
    //if(req.body.object === 'page' && req.body.entry) {
    //  let data = req.body;
    //  console.log(data);
      /*
      for (let entryObj in data.entry) { // for on page objects
        for (let messageObj in entryObj) { // for on messageObj s if messaging of each page exists
          if(messageObj.postback) {
            // handle postbacks
          }
          else {
            return cb(messageObj) ;
            // handle messages
          }
        }
      }*/
    //}
  }
}

module.exports = FBeamer;