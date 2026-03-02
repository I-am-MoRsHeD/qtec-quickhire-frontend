# 🚀 QuickHire Frontend

The client-side application for QuickHire, a modern job board platform built with performance and user experience in mind.

## 🛠 Tech Stack

* **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **UI Components**: [Shadcn/UI](https://ui.shadcn.com/)
* **Animations**: [Framer Motion](https://www.framer.com/motion/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **State Management**: React Hooks & Server Actions
* **Form Handling**: React Hook Form & Zod

## 🌟 Key Features

* **Modern Hero Section**: Eye-catching design with responsive layout fixes.
* **Job Discovery**: Advanced search and filtering by category, location, and job type.
* **Role-Based Access**: Protected routes for Admin (`/admin/jobs`, `/admin/add-new-job`).
* **Dynamic Job Details**: Rich job descriptions with integrated application forms.
* **Skeleton Loading**: Seamless transitions using React Suspense and custom Skeleton loaders.
* **Interactive UI**: Smooth animations and custom error boundaries.

## 🚀 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone [https://github.com/I-am-MoRsHeD/qtec-quickhire-frontend.git](https://github.com/I-am-MoRsHeD/qtec-quickhire-frontend.git)
    cd quickhire/frontend
    ```

2.  **Install dependencies**:
    ```bash
    pnpm install
    ```

3.  **Set up Environment Variables**:
    Create a `.env.local` file in the root:
    ```env
    NEXT_PUBLIC_API_URL=http://localhost:5000/api
    JWT_ACCESS_SECRET=your_jwt_secret_here
    ```

4.  **Run the development server**:
    ```bash
    pnpm dev
    ```

## 📁 Project Structure

* `app/` - Next.js App Router (Pages, Layouts, Loading states).
* `components/` - Reusable UI components (Hero, JobCard, Skeleton loaders).
* `services/` - Next.js Server Actions for API communication.
* `proxy.ts` - Edge-runtime protection for Admin routes.