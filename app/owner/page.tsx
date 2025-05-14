import Title from "../components/Title";
import Dashboard from "../components/HotelOwner/Dashboard";

// app/owner/page.tsx
export default function OwnerDashboard() {
  return (
    <div>
      <Title
        align="left"
        title="Owner Dashboard"
        subtitle="Welcome to your dashboard"
      />
      <Dashboard />
    </div>
  );
}
