import React, { useMemo } from 'react';
import { ArrowLeft } from 'lucide-react';
import { DirectoryInstallerNormalized } from '../types';
import { categoriesList, slugify } from '../data/installersData';
import FeaturedInstallers from './FeaturedInstallers';

interface Props {
  slug: string;
  label?: string;
  installers: DirectoryInstallerNormalized[];
  onNavigate: (route: { page: 'home' } | { page: 'installer'; slug: string } | { page: 'category'; slug: string }) => void;
}

const CategoryPage: React.FC<Props> = ({ slug, label, installers, onNavigate }) => {
  const subtitle = useMemo(() => {
    const match = categoriesList.find((c) => c.slug === slugify(label || slug));
    const humanLabel = (label || match?.label || slug).replace(/-/g, ' ');
    const count = match?.count ?? installers.length;
    return `${count} installers tagged for ${humanLabel}`;
  }, [label, slug, installers.length]);

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
          <h1 className="text-3xl font-bold text-slate-900 capitalize">{label || slug.replace(/-/g, ' ')}</h1>
          <p className="text-slate-600 mt-2">{subtitle}</p>
        </div>
      </div>

      <FeaturedInstallers onNavigate={onNavigate} installers={installers} />
    </div>
  );
};

export default CategoryPage;
