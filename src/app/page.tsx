"use client";
import { useUserSettings } from "../hooks/useUserSettings";

export default function Home() {
  const [isNavbarOpen, setIsNavbarOpen] = useUserSettings(
    "isNavbarOpen",
    false
  );
  return (
    <main>
      <input
        type="checkbox"
        checked={isNavbarOpen}
        onChange={(e) => setIsNavbarOpen(e.target.checked)}
      />
    </main>
  );
}
