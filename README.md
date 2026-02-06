# ALX Listing App

An Airbnb-inspired property listing application built with modern web technologies. This project serves as the foundational milestone for creating a scalable, responsive, and type-safe web application.

## 🚀 Project Goals
The primary objective of this milestone is to scaffold a production-ready Next.js application. It focuses on:
* **Scalability:** Using a modular folder structure.
* **Type Safety:** Implementing TypeScript to prevent runtime errors.
* **Maintainability:** Using reusable components and ESLint for code quality.
* **Responsiveness:** Styling with Tailwind CSS for mobile-friendly designs.

## 🛠️ Tech Stack
* **Framework:** Next.js (Pages Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Linting:** ESLint

## 📂 Project Structure
The project follows a clean and industry-standard directory structure:

* **`components/`**: Contains reusable UI components.
    * `common/`: Generic components like `Card.tsx` and `Button.tsx` used throughout the app.
* **`interfaces/`**: Defines TypeScript interfaces (e.g., `CardProps`, `ButtonProps`) to ensure data consistency across the application.
* **`constants/`**: Stores static data, configuration settings, and reusable strings (e.g., API URLs, page titles).
* **`public/assets/`**: Stores static assets such as images, icons, and SVGs.
* **`pages/`**: Next.js pages that map to application routes.

## 💻 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites
* Node.js (v16 or higher)
* npm or yarn

### Installation

1.  **Clone the repository** (if applicable) or navigate to the project directory:
    ```bash
    cd alx-listing-app
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **View the application:**
    Open your browser and verify the app is running at:
    [http://localhost:3000](http://localhost:3000)

## 🧪 Testing
To verify the project setup:
1.  Ensure no ESLint errors appear in the terminal.
2.  Check that Tailwind styles are applied correctly (cards should look styled).
3.  Verify that TypeScript interfaces are enforcing props correctly in components.

---
*Project developed as part of the ALX Software Engineering Program.*