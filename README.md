1. Create a new repository on GitHub
   Go to GitHub and log in to your account.
   Click on the + button in the top right corner and select New repository.
   Name your repository, for example, nextjs-project.
   Add a description (optional) and choose Public or Private according to your preference.
   Initialize the repository with a README.md file.
   Click on Create repository.

2. Clone the repository locally
   bash
   Copy code
   git clone https://github.com/your-username/nextjs-project.git
   cd nextjs-project

3. Add your project files to the repository
   Copy your Next.js project files into the cloned repository directory. Make sure your project includes the following structure:

nextjs-project/
├── public/
│ └── Fonts/
│ └── ClashDisplay-Medium.woff2
│ └── ClashDisplay-Medium.woff
├── src/
│ ├── assets/
│ │ └── hero-image.png
│ │ └── Group 35933.png
│ │ └── heroImg.png
│ ├── components/
│ │ └── NavBar.js
│ │ └── Hero.js
│ │ └── Features.js
│ │ └── Testimonial.js
│ │ └── FAQSection.js
│ │ └── Footer.js
│ ├── pages/
│ │ └── \_app.js
│ │ └── index.js
│ └── styles/
│ └── globals.css
├── .gitignore
├── next.config.js
├── package.json
└── README.md

# Next.js Project

## Description

This project is a responsive Next.js application designed with Tailwind CSS. It includes a navbar, hero section, features section, testimonials, FAQ section, and footer.

## Design Choices

- **Next.js**: Chosen for its performance and SEO benefits.
- **Tailwind CSS**: Used for rapid UI development and customizability.
- **React Icons**: For adding icons to the UI components.
- **Custom Fonts**: Clash Display font is used for all text to ensure a unique and consistent look.

## Libraries Used

- `next`
- `react`
- `tailwindcss`
- `react-icons`
- `next/image`

## Figma Design Link

https://www.figma.com/design/4OVsbAXw9MID2x6uhKxjgC/App-Landing-Page-Finance-Bank-Money-(Community)?node-id=0-1&t=4fVW8w2IbapIUsqI-0

## Instructions to Run the Project Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/homeservicehub/nextjs-project.git
   cd nextjs-project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the application in action.
