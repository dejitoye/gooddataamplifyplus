var aws = require('aws-sdk')
var ddb = new aws.DynamoDB()

exports.handler = async (event, context) => {
    let date = new Date()
    let timestamp = date.getTime()
    if (event.request.userAttributes.sub) {
        let params = {
          Item:{
            'id': {S: event.request.userAttributes.sub},
            '__typename': {S: 'User'},
            'name': {S: event.userName},
            'email': {S: event.request.userAttributes.email},
            'createdAt': {S: date.toISOString()},
            'updatedAt': {S: date.toISOString()},
            '_lastChangedAt': {N: timestamp.toString()},  // timestamp
            '_version': {N: '1'},
             
          },
          TableName: process.env.USERTABLE
        }

        try {
            await ddb.putItem(params).promise()
            console.log("Success")
        } catch (err) {
            console.log("Error", err)
        }

        console.log("Success: Everything executed correctly")
       

    } else {
        console.log("Error: Nothing was written to DynamoDB")
    
    }
};
