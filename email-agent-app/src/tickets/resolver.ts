import { Ticket } from '../types';

export class TicketResolver {
    private tickets: Ticket[];

    constructor() {
        // Example ticket store
        this.tickets = [
            {
                id: '1',
                subject: 'Cannot login',
                description: 'I am unable to login to my account.',
                status: 'resolved',
                userEmail: 'user1@example.com',
            },
            {
                id: '2',
                subject: 'Payment issue',
                description: 'Payment did not go through.',
                status: 'open',
                userEmail: 'user2@example.com',
            },
        ];
    }

    resolveTicket(ticketId: string): void {
        const ticket = this.tickets.find(t => t.id === ticketId);
        if (ticket) {
            ticket.status = 'resolved';
            console.log(`Resolving ticket: ${ticketId}`);
        }
    }

    getResolvedTickets(): Ticket[] {
        return this.tickets.filter(ticket => ticket.status === 'resolved');
    }
}