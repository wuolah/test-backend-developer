const usersRepository = require( '../repositories/usersRepository' );

const getUserByEmail = async ( req, res ) => {
    const { email } = req.params;

    try {
        const user = await usersRepository.getUserByEmail( email );

        if ( user ) {
            res.json( { success: true, user } );
        } else {
            res
                .status( 404 )
                .json( { success: false, error: 'Could not find user with provided "email"' } );
        }
    } catch ( error ) {
        console.log( error );
        res.status( 500 ).json( { success: false, error: "Could not retreive user" } );
    }
};

const createUser = async ( req, res ) => {
    const { email, password, name } = req.body;
    const createdAt = new Date().toISOString();
    const userId = v4(); // Generate a unique user id

    //TODO: Validate unique email

    if ( !email.trim() || !password.trim() || !name.trim() ) {
        res.status( 400 ).json( { success: false, error: 'Some fields missing, check your info and sign up again' } );
    }

    const newUser = {
        userId,
        email,
        hash: bcrypt.hashSync( password, 8 ), // Added simple crypt to protect password information
        name,
        createdAt,
    }

    const params = {
        TableName: USERS_TABLE,
        Item: newUser,
    };

    try {
        await dynamoDbClient.put( params ).promise();
        res.json(
            {
                success: true,
                user: {
                    userId,
                    email,
                    name,
                    createdAt
                }
            } );
    } catch ( error ) {
        console.log( error );
        res.status( 500 ).json( {
            success: false,
            error: "Could not create user"
        } );
    }
};


module.exports = {
    getUserByEmail,
    createUser
}