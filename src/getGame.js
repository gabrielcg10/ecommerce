const AWS = require("aws-sdk");

const getGame = async(event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const { id } = event.pathParameters;

    const result = await dynamodb
        .get({
            TableName: "Games",
            Key: { id },
        })
        .promise();

    const task = result.Item;

    return {
        status: 200,
        body: task,
    };
};

module.exports = {
    getGame,
};