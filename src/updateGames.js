const uuid = require("uuid");
const AWS = require("aws-sdk");

const updateGames = async(event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    const { title, description, price } = JSON.parse(event.body);

    await dynamodb
        .update({
            TableName: "Games",
            Key: { id },
            UpdateExpression: "set title = :title, description = :description, price = :price",
            ExpressionAttributeValues: {
                ":title": title,
                ":description": description,
                ":price": price
            },
            ReturnValues: "ALL_NEW",
        })
        .promise();

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Game actualizado",
        }),
    };
};

module.exports = {
    updateGames,
};