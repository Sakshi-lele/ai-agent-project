export interface Ticket {
    id: string;
    subject: string;
    description: string;
    status: 'open' | 'resolved' | 'closed';
    userEmail: string;
}

export interface Email {
    to: string;
    subject: string;
    body: string;
}