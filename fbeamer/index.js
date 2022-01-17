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
}

function registerHook(req, res) 
{
    const params = req.query;
    console.log(params);
    const mode = params['hub.mode'],
    token = params['hub.verify_token'],
    challenge = params['hub.challenge'];
    
    try {
        if (mode === 'subscribe' && token === 'verifytoken'){
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

module.exports = FBeamer;