# Roommate Finder Client

A modern web application for finding and listing roommates, built with **React** and **Vite**.

## Features

- 🔍 Browse and search roommate listings
- 📝 Create, update, and manage your own listings
- 👤 User authentication (login/register)
- 🌙 Light/Dark theme toggle
- ⚡ Fast, responsive UI with Tailwind CSS
- 🛡️ Protected routes for authenticated users
- 📱 Mobile-friendly design

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) 

### Installation

1. **Clone the repository:**
   ```
   git clone https://github.com/your-username/roommate-finder-client.git
   cd roommate-finder-client
   ```

2. **Install dependencies:**
   ```
   npm install

   ```

3. **Start the development server:**
   ```
   npm run dev
   
   ```

4. Open [https://fir-job-4414a.web.app/] in your browser.

## Project Structure

```
src/
  Components/      # React components (Header, Listings, Detailes, etc.)
  Firebase/        # Firebase authentication context and config
  Theme/           # Theme control components
  App.jsx          # Main app component
  main.jsx         # Entry point
public/
  assets/          # Static assets (images, icons)
```

## Environment Variables

Create a `.env` file in the root directory and add your environment variables as needed (e.g., Firebase config).

## Backend

 Connects to a REST API server.  The [Roommate Finder Server](https://roommate-finder-server-flax.vercel.app/).

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

## License

MIT

---

**Made with ❤️ using React + Vite**