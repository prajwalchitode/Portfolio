# Prajwal Chitode - Portfolio Website

A modern, dark-themed portfolio website for a Full Stack Developer built with vanilla HTML, CSS, and JavaScript.

## 🚀 Features

- **Modern Dark Theme** - Beautiful gradient-based dark UI
- **Fully Responsive** - Works on all devices
- **Smooth Animations** - Scroll-triggered animations, typing effect, particles
- **Interactive Code Window** - Showcases developer personality
- **Contact Form with Email** - EmailJS integration for receiving messages
- **Performance Optimized** - No heavy frameworks, fast loading

## 📧 Setting Up Contact Form (EmailJS)

To receive emails when someone fills out the contact form, follow these steps:

### Step 1: Create an EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)

### Step 2: Add an Email Service
1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred provider)
4. Connect your Gmail account (`prajwalchitode2002@gmail.com`)
5. Note down the **Service ID** (e.g., `service_xxxxxx`)

### Step 3: Create an Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Set up your template:

**Subject:** `New Portfolio Contact: {{subject}}`

**Content:**
```
Hello {{to_name}},

You have a new message from your portfolio website!

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Set the **To Email** as `prajwalchitode2002@gmail.com`
5. Note down the **Template ID** (e.g., `template_xxxxxx`)

### Step 4: Get Your Public Key
1. Go to **Account** > **General**
2. Copy your **Public Key**

### Step 5: Update the Code
Open `js/main.js` and replace the placeholder values:

```javascript
// Line 3 - Replace with your public key
emailjs.init("YOUR_PUBLIC_KEY");

// Lines 160-161 - Replace with your service and template IDs
const serviceID = 'YOUR_SERVICE_ID';
const templateID = 'YOUR_TEMPLATE_ID';
```

## 🛠️ Development

Simply open `index.html` in a browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using VS Code
# Install "Live Server" extension and click "Go Live"
```

## 📁 Project Structure

```
Portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # JavaScript functionality
└── README.md           # This file
```

## 🎨 Customization

### Change Accent Color
In `css/style.css`, modify the CSS variables:
```css
:root {
    --accent-primary: #6366f1;    /* Change this */
    --accent-secondary: #8b5cf6;  /* And this */
}
```

### Add Your Photo
Replace the icon placeholder in the About section with your image:
```html
<div class="image-placeholder">
    <img src="your-photo.jpg" alt="Prajwal Chitode" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;">
</div>
```

## 📝 License

© 2024 Prajwal Chitode. All Rights Reserved.
