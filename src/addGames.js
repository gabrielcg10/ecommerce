const { v4 } = require('uuid');
const AWS = require('aws-sdk');

const addGames = async(event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const { title, description, price } = JSON.parse(event.body);
    const createdAt = new Date();
    const id = v4();

    const newGames = {
        id,
        title,
        description,
        price,
        createdAt,
    }
    await dynamodb.put({
        TableName: 'Games',
        Item: newGames
    }).promise()

    return {
        status: 200,
        body: JSON.stringify(newGames),
    }
}

module.exports = {
    addGames,
}