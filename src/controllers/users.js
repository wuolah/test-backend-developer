const usersRepository = require( '../repositories/usersRepository' );

const getUserByEmail = async ( req, res ) => {
    const { email } = req.params;

    const user = await usersRepository.getByEmail( email.trim() );

    if ( user ) {
        res.json( { success: true, user } );
    } else {
        res
            .status( 404 )
            .json( { success: false, error: 'Could not find user with provided "email"' } );
    }
};

const createUser = async ( req, res ) => {
    const { email, password, name } = req.body;

    if ( !email.trim() || !password.trim() || !name.trim() ) {
        res.status( 400 ).json( { success: false, error: 'Some fields missing, check your info and sign up again' } );
    }

    const user = await usersRepository.getByEmail( email.trim() );

    if ( user ) {
        res.status( 400 ).json( { success: false, error: 'User already exists' } );
        return;
    }

    const newUser = await usersRepository.create( email.trim(), password, name.trim() );

    if ( newUser ) {
        res.json(
            {
                success: true,
                user: newUser
            } );
    } else {
        res.status( 500 ).json( { success: false, error: 'Could not create user' } );
    }
};


module.exports = {
    getUserByEmail,
    createUser
}