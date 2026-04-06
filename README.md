# 📊 Executive Intelligence Dashboard

A professional, production-grade E-commerce Analytics Dashboard built with modern React standards. This project features a clean, SaaS-style aesthetic with real-time data visualization, responsive layouts, and advanced user interface components.

---

## 🚀 Live Features

- **Responsive Design System**: A flexible layout that adapts seamlessly from mobile drawers to massive desktop displays.
- **Interactive Data Visualization**:
  - **Revenue Analytics**: Dynamic Bar Charts built with Recharts, featuring linear gradients and custom tooltips.
  - **Regional Distribution**: Interactive Geospatial Heatmaps using `react-simple-maps` with pulsing order markers.
- **SaaS-Style Navigation**:
  - **Sidebar Drawer**: Collapsible menu with hover tooltips and mobile-specific drawer functionality.
  - **Breadcrumb Header**: Sticky navigation with integrated search, quick actions, and user status indicators.
- **Advanced Table Functionality**:
  - **Sticky ID Columns**: Perfect for mobile readability when scrolling wide data sets.
  - **CSV Export**: Integrated `papaparse` allows users to export current order data with a single click.
  - **Status Filtering**: Instant row filtering by transaction status (Completed, Pending, Cancelled).
- **Executive State Management**:
  - **Date Range Filters**: Simulated global data fetching with professional skeleton screen loading states.
  - **Visual Polish**: Indigo-focused brand colors, Inter typography, and subtle micro-animations (Pulse, Fade, Slide).

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Maps**: [React Simple Maps](https://www.react-simple-maps.io/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utility**: [PapaParse](https://www.papaparse.com/), `clsx`, `tailwind-merge`

---

## 📦 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mihinr/Dashboard.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd Dashboard/Frontend
   ```

3. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

---

## 📂 Project Structure

```text
/src
  /components
    - Header.jsx        # Navigation & User Profile
    - Sidebar.jsx       # Responsive Drawer Menu
    - StatCard.jsx      # Analytics Metrics
    - SalesChart.jsx    # Recharts Implementation
    - OrdersTable.jsx   # Data Grid with Export
    - GeospatialMap.jsx # Region Heatmap
    - Skeleton.jsx      # UI Loading States
  /data
    - dummyData.js      # Centralized Mock Data
  /pages
    - Dashboard.jsx     # Main Layout Composition
```

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

**Developed with 💻 & ☕ by Mihin Ratnayake**
