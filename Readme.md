
# Nodemailer (GMAIL)


## Prerequisites

Before running this project, ensure you have the following installed:

- Node.js and npm (Node Package Manager)
- Gmail account with 2FA enabled
- An "App Password" generated for your Gmail account for use with nodemailer

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/juma-h/nodemailer-gmail.git
2. Navigate into the project directory:
   ```bash
    cd nodemailer-gmail   
3. Install Dependencies
   ```bash
    npm install 
4. Replace the process.ENV.labels with :
   ```bash
    // the email you used to register the app
    user: process.env.GMAIL_USER,

    // your app password
    pass: process.env.GMAIL_PASSWORD,
    
    // the email you want to receive emails 
    to: process.env.GMAIL_TO,

## Notes
- This application uses a basic setup. For production use, consider implementing additional security measures and error handling.
- Ensure your Gmail account has less secure app access enabled or use an app password to authenticate with Nodemailer.

## License
This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License - see the LICENSE file for details.

