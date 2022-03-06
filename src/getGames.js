const AWS = require("aws-sdk");

const getGames = async(event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const result = await dynamodb.scan({ TableName: "Games" }).promise();

    const games = result.Items;

    return {
        status: 200,
        body: {
            games,
        },
    };
};

module.exports = {
    getGames,
};