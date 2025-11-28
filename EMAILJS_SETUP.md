# EmailJS Setup Guide

This guide will help you set up EmailJS to make your contact form functional.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)
3. Verify your email address

## Step 2: Add an Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection instructions
5. Note your **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

**Template Name:** Contact Form

**Subject:** New Contact Form Submission: {{subject}}

**Content:**
```
You have received a new message from your website contact form.

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your NorthPoint website contact form.
```

4. Save the template and note your **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (also called API Key)
3. Copy it

## Step 5: Update contact-us.html

Open `contact-us.html` and replace these placeholders:

1. Replace `YOUR_PUBLIC_KEY` with your EmailJS Public Key
2. Replace `YOUR_SERVICE_ID` with your Service ID
3. Replace `YOUR_TEMPLATE_ID` with your Template ID

The code should look like this:
```javascript
emailjs.init("abc123xyz"); // Your Public Key
// ...
emailjs.send('service_abc123', 'template_xyz789', formData)
```

## Step 6: Test the Form

1. Open `contact-us.html` in your browser
2. Fill out and submit the form
3. Check your email inbox for the message

## Alternative Options

If you prefer not to use EmailJS, here are other options:

### Option 2: Formspree
- Visit [https://formspree.io/](https://formspree.io/)
- Free tier: 50 submissions/month
- Simply change the form action to your Formspree endpoint

### Option 3: Web3Forms
- Visit [https://web3forms.com/](https://web3forms.com/)
- Free, no account needed
- Get an access key and update the form

### Option 4: Backend Server
- Set up a Node.js/PHP/Python server
- Use nodemailer (Node.js) or mail() function (PHP)
- Requires hosting with server capabilities

## Troubleshooting

- **Form not sending?** Check browser console for errors
- **Not receiving emails?** Check spam folder and verify EmailJS service is connected
- **Rate limits?** Free tier has limits; upgrade if needed

