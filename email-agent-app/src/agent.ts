import { TicketResolver } from './tickets/resolver';
import { Mailer } from './email/mailer';
import { Ticket } from './types';
import { AIService } from './ai/aiService';

class EmailAgent {
    private ticketResolver: TicketResolver;
    private mailer: Mailer;
    private aiService: AIService;

    constructor() {
        this.ticketResolver = new TicketResolver();
        this.mailer = new Mailer();
        this.aiService = new AIService();
    }

    public async processTickets() {
        // First, resolve open tickets using the AI
        const openTickets: Ticket[] = this.ticketResolver.getOpenTickets();
        for (const ticket of openTickets) {
            const resolution = await this.aiService.resolveTicketPrompt(ticket.description);
            // Optionally, you could store the resolution somewhere
            this.ticketResolver.resolveTicket(ticket.id);
            await this.sendResolutionEmail({
                ...ticket,
                status: 'resolved',
                description: resolution,
            });
        }

        // Then, send emails for already resolved tickets (if any)
        const resolvedTickets: Ticket[] = this.ticketResolver.getResolvedTickets();
        for (const ticket of resolvedTickets) {
            await this.sendResolutionEmail(ticket);
        }
    }

    private async sendResolutionEmail(ticket: Ticket) {
        const subject = `Ticket Resolved: ${ticket.id}`;
        const body = `Dear User,\n\nYour ticket with ID ${ticket.id} has been resolved.\n\nResolution:\n${ticket.description}\n\nBest Regards,\nEmail Agent`;
        
        await this.mailer.sendEmail(ticket.userEmail, subject, body);
    }
}

const emailAgent = new EmailAgent();
emailAgent.processTickets();