const AWS = require("aws-sdk");

const deleteGames = async(event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    await dynamodb
        .delete({
            TableName: "Games",
            Key: {
                id,
            },
        })
        .promise();

    return {
        status: 200,
        body: {
            message: 'Game Eliminado'
        }
    };
};

module.exports = {
    deleteGames,
};