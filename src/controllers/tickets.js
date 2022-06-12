const ticketsRepository = require( '../repositories/ticketsRepository' );
const usersRepository = require( '../repositories/usersRepository' );

const getAllTickets = async ( req, res ) => {

    const tickets = await ticketsRepository.getAll();

    if ( tickets.length ) {
        res.json( { success: true, tickets } );
        return;
    }

    res.status( 404 ).json( { success: false, error: 'Could not find any tickets' } );
};

const createTicket = async ( req, res ) => {
    const { userId } = req.body;

    if ( !userId ) {
        res.status( 400 ).json( { success: false, error: '"userId" field not found, please give a correct one to create ticket' } );
        return;
    }

    const user = await usersRepository.getById( userId );

    if ( !user ) {
        res.status( 404 ).json( { success: false, error: 'Could not find user with provided id' } );
        return;
    }

    const ticket = await ticketsRepository.create( userId );

    if ( ticket ) {
        res.json( { success: true, ticket } );
        return;
    }

    res.status( 500 ).json( { success: false, error: 'Could not create ticket' } );
};

module.exports = {
    getAllTickets,
    createTicket,
}