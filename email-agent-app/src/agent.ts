import { TicketResolver } from './tickets/resolver';
import { Mailer } from './email/mailer';
import { Ticket } from './types';

class EmailAgent {
    private ticketResolver: TicketResolver;
    private mailer: Mailer;

    constructor() {
        this.ticketResolver = new TicketResolver();
        this.mailer = new Mailer();
    }

    public async processTickets() {
        const resolvedTickets: Ticket[] = this.ticketResolver.getResolvedTickets();

        for (const ticket of resolvedTickets) {
            await this.sendResolutionEmail(ticket);
        }
    }

    private async sendResolutionEmail(ticket: Ticket) {
        const subject = `Ticket Resolved: ${ticket.id}`;
        const body = `Dear User,\n\nYour ticket with ID ${ticket.id} has been resolved.\n\nBest Regards,\nEmail Agent`;
        
        await this.mailer.sendEmail(ticket.userEmail, subject, body);
    }
}

const emailAgent = new EmailAgent();
emailAgent.processTickets();