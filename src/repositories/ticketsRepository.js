const AWS = require( "aws-sdk" );
const { v4 } = require( "uuid" );
const handleError = require( "../utils/handleError" );

const TICKETS_TABLE = process.env.TICKETS_TABLE;
const TRIGGER_FILE = 'ticketsRepository';
const dynamoDbClient = new AWS.DynamoDB.DocumentClient();

const getAll = async () => {
    const params = {
        TableName: TICKETS_TABLE,
    };

    try {
        const { Items } = await dynamoDbClient.scan( params ).promise();

        return Items;
    } catch ( error ) {
        handleError( TRIGGER_FILE, 'getAll', error );
        return false;
    }
};

const getByUserIdAndAvailability = async ( userId, availability ) => {
    const params = {
        TableName: TICKETS_TABLE,
        IndexName: 'userIdIndex',
        KeyConditionExpression: 'userId = :userId',
        FilterExpression: 'available = :availability',
        ExpressionAttributeValues: {
            ':userId': userId,
            ':availability': availability,
        },
    };

    try {
        const { Items } = await dynamoDbClient.query( params ).promise();

        return Items || false;
    } catch ( error ) {
        handleError( TRIGGER_FILE, 'getByUserIdAndAvailability', error );
        return false;
    }
};

const create = async ( userId ) => {
    const createdAt = new Date().toISOString();
    const ticketId = v4(); // Generate a unique ticket id

    const newTicket = {
        ticketId,
        contestId: null,
        userId,
        available: true,
        createdAt,
    };

    const params = {
        TableName: TICKETS_TABLE,
        Item: newTicket,
    };

    try {
        await dynamoDbClient.put( params ).promise();
        return newTicket;
    } catch ( error ) {
        handleError( TRIGGER_FILE, 'create', error );
        return false;
    }
};

const addToContest = async ( ticketId, contestId ) => {
    const params = {
        TableName: TICKETS_TABLE,
        Key: {
            ticketId,
        },
        UpdateExpression: 'SET contestId = :contestId, available = :available',
        ExpressionAttributeValues: {
            ':contestId': contestId,
            ':available': false,
        },
        ReturnValues: 'UPDATED_NEW',
    };

    try {
        const { Attributes } = await dynamoDbClient.update( params ).promise();

        return Attributes || false;
    } catch ( error ) {
        handleError( TRIGGER_FILE, 'addToContest', error );
        return false;
    }
};

module.exports = {
    getAll,
    getByUserIdAndAvailability,
    create,
    addToContest,
};