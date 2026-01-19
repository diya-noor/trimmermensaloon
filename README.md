# Trimmer Men's Saloon - Website

A modern, responsive website for Trimmer Men's Saloon built with React, Tailwind CSS, and modern web technologies.

## Features

- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **Modern UI**: Clean and professional design with smooth animations
- **Service Showcase**: Complete display of all services with pricing
- **Package Deals**: Special deals and multi-day grooming packages
- **Team Profiles**: Profiles for the owner and 10 employees
- **Dashboard**: Admin dashboard for business management
- **Contact Information**: Location map, phone numbers, and contact form
- **Fast Performance**: Built with Vite for lightning-fast load times

## Technologies Used

- **React 18** - UI Framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd trimmer-saloon
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
trimmer-saloon/
├── src/
│   ├── components/        # Reusable components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Packages.jsx
│   │   ├── Team.jsx
│   │   ├── Dashboard.jsx
│   │   └── Contact.jsx
│   ├── data/             # Data files
│   │   ├── services.js
│   │   └── employees.js
│   ├── lib/              # Utility functions
│   │   └── utils.js
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Pages

1. **Home** - Landing page with hero section, features, and popular services
2. **Services** - All services categorized with pricing
3. **Packages** - Special deals and multi-day grooming packages
4. **Team** - Owner profile and employee showcase
5. **Dashboard** - Business management dashboard
6. **Contact** - Contact information and location map

## Contact Information

- **Address**: B-991 Haideri Chowk, 4th Road, B-block Satellite Town, Comercial Market, Rawalpindi
- **Phone**: 0307-5552224, 0300-5049246
- **Email**: info@trimmersaloon.com

## License

© 2025 Trimmer Men's Saloon. All rights reserved.
