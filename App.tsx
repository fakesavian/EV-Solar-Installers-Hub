import React, { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedInstallers from './components/FeaturedInstallers';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AIChatButton from './components/AIChatButton';
import InstallerDetail from './components/InstallerDetail';
import CategoryPage from './components/CategoryPage';
import { categoriesList, installersBySlug, installersList, slugify } from './data/installersData';

type Route =
  | { page: 'home' }
  | { page: 'installer'; slug: string }
  | { page: 'category'; slug: string };

const parseRoute = (): Route => {
  const hash = window.location.hash.replace(/^#/, '');
  if (hash.startsWith('/installer/')) {
    const slug = hash.replace('/installer/', '');
    return { page: 'installer', slug };
  }
  if (hash.startsWith('/category/')) {
    const slug = hash.replace('/category/', '');
    return { page: 'category', slug };
  }
  return { page: 'home' };
};

function App() {
  const [route, setRoute] = useState<Route>(parseRoute());

  useEffect(() => {
    const onHashChange = () => setRoute(parseRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const currentInstaller = useMemo(() => {
    if (route.page !== 'installer') return null;
    return installersBySlug.get(route.slug) || null;
  }, [route]);

  const categoryData = useMemo(() => {
    if (route.page !== 'category') return null;
    const key = slugify(route.slug);
    const matches = installersList.filter((i) => (i.categoryKeys || []).includes(key));
    const meta = categoriesList.find((c) => c.slug === key);
    return { slug: key, label: meta?.label ?? route.slug, matches };
  }, [route]);

  const navigate = (r: Route) => {
    if (r.page === 'home') {
      window.location.hash = '';
    } else if (r.page === 'installer') {
      window.location.hash = `/installer/${r.slug}`;
    } else if (r.page === 'category') {
      window.location.hash = `/category/${r.slug}`;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      <main>
        {route.page === 'home' && (
          <>
            <Hero />
            <FeaturedInstallers onNavigate={navigate} />
            <Services />
            <HowItWorks />
            <Testimonials />
          </>
        )}

        {route.page === 'installer' && currentInstaller && (
          <InstallerDetail installer={currentInstaller} onNavigate={navigate} />
        )}
        {route.page === 'installer' && !currentInstaller && (
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <p className="text-lg text-slate-700 mb-4">Installer not found.</p>
            <button
              onClick={() => navigate({ page: 'home' })}
              className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700"
            >
              Back to directory
            </button>
          </div>
        )}

        {route.page === 'category' && categoryData && (
          <CategoryPage
            slug={categoryData.slug}
            label={categoryData.label}
            installers={categoryData.matches}
            onNavigate={navigate}
          />
        )}
        {route.page === 'category' && !categoryData && (
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <p className="text-lg text-slate-700 mb-4">Category not found.</p>
            <button
              onClick={() => navigate({ page: 'home' })}
              className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700"
            >
              Back to directory
            </button>
          </div>
        )}
      </main>
      <Footer />
      <AIChatButton />
    </div>
  );
}

export default App;
