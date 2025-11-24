import React, { useMemo } from 'react';
import { ArrowLeft } from 'lucide-react';
import { DirectoryInstallerNormalized } from '../types';
import FeaturedInstallers from './FeaturedInstallers';

interface Props {
  slug: string;
  installers: DirectoryInstallerNormalized[];
  onNavigate: (route: { page: 'home' } | { page: 'installer'; slug: string } | { page: 'category'; slug: string }) => void;
}

const CategoryPage: React.FC<Props> = ({ slug, installers, onNavigate }) => {
  const subtitle = useMemo(() => {
    const label = slug.replace(/-/g, ' ');
    return `Installers tagged for ${label}`;
  }, [slug]);

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => onNavigate({ page: 'home' })}
          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-900 mb-6"
        >
          <ArrowLeft size={16} /> Back to directory
        </button>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 capitalize">{slug}</h1>
          <p className="text-slate-600 mt-2">{subtitle}</p>
        </div>
      </div>

      <FeaturedInstallers onNavigate={onNavigate} installers={installers} />
    </div>
  );
};

export default CategoryPage;
