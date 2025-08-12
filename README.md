# Email Agent App

A simulated AI-powered email agent that processes support tickets, generates (mock) AI resolutions, and sends resolution emails to users.

---

## Features

- **Automated Ticket Resolution:** Finds open tickets and generates a simulated AI-based resolution.
- **Email Notifications:** Sends resolution emails to users using SMTP.
- **Extensible:** Easily swap the mock AI with a real AI API when available.

---

## Project Structure

```
email-agent-app/
├── src/
│   ├── agent.ts           # Main agent logic
│   ├── ai/
│   │   └── aiService.ts   # Simulated AI service
│   ├── email/
│   │   └── mailer.ts      # Email sending logic
│   ├── tickets/
│   │   └── resolver.ts    # Ticket management
│   └── types/
│       └── index.ts       # Type definitions
├── .env                   # SMTP credentials (not committed by default)
├── package.json
└── README.md
```

---

## Setup

1. **Install dependencies:**
    ```sh
    npm install
    ```

2. **Configure SMTP credentials:**
    - Create a `.env` file in the root with the following content:
      ```
      SMTP_HOST=smtp.ethereal.email
      SMTP_PORT=587
      SMTP_SECURE=false
      EMAIL_USER=your_smtp_user
      EMAIL_PASS=your_smtp_pass
      ```
    - You can use [Ethereal Email](https://ethereal.email/) for free test SMTP credentials.

3. **Run the agent:**
    ```sh
    npm start
    ```
    or
    ```sh
    npx ts-node src/agent.ts
    ```

---

## How It Works

- The agent loads tickets from a mock resolver.
- For each open ticket, it generates a simulated AI resolution and marks the ticket as resolved.
- It sends a resolution email to the user for each resolved ticket.

---

## Notes

- The AI service is currently a mock. You can replace it with a real AI API integration when available.
- The `.env` file is ignored by git for security.
- This project is for demonstration and development purposes.

---

## License

MIT