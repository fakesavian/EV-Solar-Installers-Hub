import React, { useMemo, useState } from 'react';
import { Star, MapPin, Search, X, Tag } from 'lucide-react';
import { DirectoryInstallerNormalized } from '../types';
import { installersList as allInstallers, slugify } from '../data/installersData';

interface Props {
  installers?: DirectoryInstallerNormalized[];
  onNavigate: (route: { page: 'home' } | { page: 'installer'; slug: string } | { page: 'category'; slug: string }) => void;
}

const FeaturedInstallers: React.FC<Props> = ({ onNavigate, installers }) => {
  const data = installers ?? allInstallers;
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [serviceArea, setServiceArea] = useState('All');
  const [serviceModel, setServiceModel] = useState('All');
  const [tag, setTag] = useState('All');

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(data.map((i) => i.category)))],
    [data]
  );

  const serviceAreas = useMemo(() => {
    const areas = data.flatMap((i) => i.service_area || []);
    return ['All', ...Array.from(new Set(areas)).sort()];
  }, [data]);

  const serviceModels = useMemo(() => {
    const models = data.flatMap((i) => i.service_models || []);
    return ['All', ...Array.from(new Set(models)).sort()];
  }, [data]);

  const tags = useMemo(() => {
    const t = data.flatMap((i) => i.tags || []);
    return ['All', ...Array.from(new Set(t)).sort()];
  }, [data]);

  const derivedCategories = useMemo(() => {
    const map = new Map<string, { slug: string; label: string; count: number }>();
    data.forEach((i) => {
      const labels = [...(i.suitableFor || []), ...(i.tags || []), i.category].filter(Boolean) as string[];
      labels.forEach((label) => {
        const cleanLabel = (label || '').trim();
        const slug = slugify(cleanLabel);
        if (!slug) return;
        const existing = map.get(slug);
        map.set(slug, {
          slug,
          label: existing?.label || cleanLabel,
          count: (existing?.count ?? 0) + 1,
        });
      });
    });
    return Array.from(map.values()).sort((a, b) => {
      if (b.count === a.count) return a.label.localeCompare(b.label);
      return b.count - a.count;
    });
  }, [data]);

  const filteredInstallers = useMemo(() => {
    const q = search.trim().toLowerCase();
    return data.filter((i) => {
      const matchesCategory = category === 'All' || i.category === category;
      const matchesArea = serviceArea === 'All' || (i.service_area || []).includes(serviceArea);
      const matchesModel = serviceModel === 'All' || (i.service_models || []).includes(serviceModel);
      const matchesTag = tag === 'All' || (i.tags || []).includes(tag);

      const haystack = [
        i.company_name,
        i.description,
        ...(i.tags || []),
        ...(i.service_area || []),
        ...(i.service_models || []),
        ...(i.services_offered || []),
      ]
        .join(' ')
        .toLowerCase();

      const matchesSearch = q.length === 0 || haystack.includes(q);

      return matchesCategory && matchesArea && matchesModel && matchesTag && matchesSearch;
    });
  }, [category, serviceArea, serviceModel, tag, search, data]);

  const resetFilters = () => {
    setSearch('');
    setCategory('All');
    setServiceArea('All');
    setServiceModel('All');
    setTag('All');
  };

  return (
    <section className="py-20 bg-emerald-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Installer Directory</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Data-driven EV, solar, and hybrid installers. Filter by category, service area, segment, or tags to find the right partner.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-4 md:p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
            <div className="lg:col-span-2">
              <label className="text-xs font-semibold text-slate-500 uppercase">Search</label>
              <div className="mt-1 flex items-center gap-2 bg-slate-50 rounded-xl px-3 py-2 border border-slate-200 focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-400">
                <Search size={16} className="text-slate-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search name, services, tags..."
                  className="w-full bg-transparent outline-none text-slate-800 placeholder:text-slate-400"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-400"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase">Service Area</label>
              <select
                value={serviceArea}
                onChange={(e) => setServiceArea(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-400"
              >
                {serviceAreas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase">Service Model</label>
              <select
                value={serviceModel}
                onChange={(e) => setServiceModel(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-400"
              >
                {serviceModels.map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase">Tag</label>
              <select
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-400"
              >
                {tags.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <p className="text-sm text-slate-500">
              Showing <span className="font-semibold text-slate-800">{filteredInstallers.length}</span> installers
            </p>
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-900"
            >
              <X size={16} />
              Reset filters
            </button>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Browse categories & tags</h3>
              <p className="text-slate-600 text-sm">
                Pulled directly from <code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded">suitableFor</code> and <code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded">tags</code> in the JSON files.
              </p>
            </div>
            <p className="text-sm text-slate-500">{derivedCategories.length} category routes</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {derivedCategories.slice(0, 60).map((cat) => (
              <button
                key={cat.slug}
                onClick={() => onNavigate({ page: 'category', slug: cat.slug })}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold hover:bg-emerald-50 hover:text-emerald-700 transition"
              >
                <Tag size={12} />
                <span className="capitalize">{cat.label}</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white text-slate-500 border border-slate-200">
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInstallers.map((installer) => (
            <InstallerCard key={installer.slug} installer={installer} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </section>
  );
};

const InstallerCard: React.FC<{ installer: DirectoryInstallerNormalized; onNavigate: Props['onNavigate'] }> = ({
  installer,
  onNavigate,
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <img
          src={installer.photos?.logo || 'https://placehold.co/80x80?text=Logo'}
          alt={installer.company_name}
          className="w-14 h-14 rounded-xl object-cover bg-slate-100"
        />
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-2 py-1 rounded-lg bg-emerald-50 text-emerald-700">
            {installer.category}
          </span>
          {installer.ratings?.average ? (
            <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-lg">
              <Star size={14} className="text-yellow-500 fill-yellow-500" />
              <span className="font-bold text-sm text-slate-800">{installer.ratings.average.toFixed(1)}</span>
              <span className="text-xs text-slate-400">/5</span>
            </div>
          ) : null}
        </div>
      </div>

      <button
        className="text-left"
        onClick={() => onNavigate({ page: 'installer', slug: installer.slug })}
      >
        <h3 className="font-bold text-lg text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">
          {installer.company_name}
        </h3>
      </button>
      <div className="flex items-center text-slate-500 text-sm mb-2">
        <MapPin size={14} className="mr-1" />
        {installer.hq ? `${installer.hq.city}, ${installer.hq.state}` : 'N/A'}
      </div>

      <p className="text-sm text-slate-600 mb-4 line-clamp-2">{installer.description}</p>

      <div className="flex flex-wrap gap-2 mb-3">
        {(installer.service_area || []).slice(0, 3).map((area) => (
          <span key={area} className="text-[11px] font-semibold px-2 py-1 rounded-lg bg-slate-100 text-slate-600">
            {area}
          </span>
        ))}
        {installer.service_area && installer.service_area.length > 3 && (
          <span className="text-[11px] font-semibold px-2 py-1 rounded-lg bg-emerald-50 text-emerald-700">
            +{installer.service_area.length - 3} more
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {(installer.service_models || []).map((model) => (
          <span key={model} className="text-[11px] font-semibold px-2 py-1 rounded-lg bg-slate-50 text-slate-600">
            {model}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-6 flex-grow">
        {(installer.tags || []).slice(0, 6).map((t) => (
          <button
            key={t}
            onClick={() => onNavigate({ page: 'category', slug: slugify(t) })}
            className="text-xs font-medium px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-emerald-50 hover:text-emerald-700 inline-flex items-center gap-1"
          >
            <Tag size={12} />
            {t}
          </button>
        ))}
      </div>

      <div className="mt-auto space-y-2 text-sm text-slate-600">
        {installer.contacts?.phone && (
          <div className="font-semibold text-slate-800">
            Phone: <span className="font-normal text-slate-600">{installer.contacts.phone}</span>
          </div>
        )}
        {installer.contacts?.website && (
          <a
            className="text-emerald-700 font-semibold hover:text-emerald-900"
            href={installer.contacts.website}
            target="_blank"
            rel="noreferrer"
          >
            View website &rarr;
          </a>
        )}
      </div>
    </div>
  );
};

export default FeaturedInstallers;
