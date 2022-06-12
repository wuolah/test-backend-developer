const ticketsRepository = require( '../repositories/ticketsRepository' );
const usersRepository = require( '../repositories/usersRepository' );
const contestsRepository = require( '../repositories/contestsRepository' );

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

const redeemTicket = async ( req, res ) => {
    const { contestId, userId } = req.body;

    if ( !contestId || !userId ) {
        res.status( 400 ).json( { success: false, error: '"contestId" or "userId" field not found, please give all information to redeem ticket' } );
        return;
    }

    const user = await usersRepository.getById( userId );

    if ( !user ) {
        res.status( 404 ).json( { success: false, error: 'Could not find user with provided id' } );
        return;
    }

    const contest = await contestsRepository.getById( contestId );

    if ( !contest ) {
        res.status( 404 ).json( { success: false, error: 'Could not find contest with provided id' } );
        return;
    }

    const availableTickets = await ticketsRepository.getByUserIdAndAvailability( userId, true );

    if ( !availableTickets.length ) {
        res.status( 404 ).json( { success: false, error: 'Could not find any available tickets for this user' } );
        return;
    }

    const ticket = await ticketsRepository.addToContest( availableTickets[0].ticketId, contestId );

    if ( ticket ) {
        res.json( { success: true, ticket } );
        return;
    }

    res.status( 500 ).json( { success: false, error: 'Could not redeem ticket' } );
};

module.exports = {
    getAllTickets,
    createTicket,
    redeemTicket,
}