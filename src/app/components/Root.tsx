import { Outlet } from 'react-router';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { InteractiveBackground } from '@/app/components/InteractiveBackground';

export default function Root() {
  return (
    <div className="min-h-screen relative">
      <InteractiveBackground />
      <Navigation />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}