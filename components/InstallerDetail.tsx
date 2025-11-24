import React from 'react';
import { ArrowLeft, MapPin, Phone, Globe, Mail, Star, Tag } from 'lucide-react';
import { DirectoryInstallerNormalized } from '../types';

interface Props {
  installer: DirectoryInstallerNormalized;
  onNavigate: (route: { page: 'home' } | { page: 'installer'; slug: string } | { page: 'category'; slug: string }) => void;
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
    <h3 className="text-lg font-semibold text-slate-900 mb-3">{title}</h3>
    {children}
  </div>
);

const InstallerDetail: React.FC<Props> = ({ installer, onNavigate }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <button
        onClick={() => onNavigate({ page: 'home' })}
        className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-900"
      >
        <ArrowLeft size={16} /> Back to directory
      </button>

      <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <img
            src={installer.photos?.logo || 'https://placehold.co/120x120?text=Logo'}
            alt={installer.company_name}
            className="w-24 h-24 rounded-2xl object-cover bg-slate-100 border border-slate-200"
          />
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-slate-900">{installer.company_name}</h1>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 uppercase tracking-wide">
                {installer.category}
              </span>
            </div>
            <p className="text-slate-600">{installer.description}</p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-700">
              {installer.hq && (
                <span className="inline-flex items-center gap-2">
                  <MapPin size={14} /> {installer.hq.city}, {installer.hq.state}, {installer.hq.country}
                </span>
              )}
              {installer.ratings?.average && (
                <span className="inline-flex items-center gap-2">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  {installer.ratings.average.toFixed(1)} ({installer.ratings.review_count ?? '—'} reviews)
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {(installer.tags || []).map((t) => (
                <button
                  key={t}
                  onClick={() => onNavigate({ page: 'category', slug: t })}
                  className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
                >
                  <Tag size={12} />
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Section title="Service Coverage">
          <div className="flex flex-wrap gap-2 mb-3">
            {(installer.service_area || []).map((area) => (
              <span key={area} className="text-[11px] font-semibold px-2 py-1 rounded-lg bg-slate-100 text-slate-600">
                {area}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {(installer.service_models || []).map((model) => (
              <span key={model} className="text-[11px] font-semibold px-2 py-1 rounded-lg bg-slate-50 text-slate-600">
                {model}
              </span>
            ))}
          </div>
        </Section>

        <Section title="Services Offered">
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            {(installer.services_offered || []).map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </Section>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Section title="Equipment">
          <div className="space-y-2 text-sm text-slate-700">
            {installer.charger_brands?.length ? (
              <div><span className="font-semibold text-slate-900">Chargers:</span> {installer.charger_brands.join(', ')}</div>
            ) : null}
            {installer.solar_equipment?.modules?.length ? (
              <div><span className="font-semibold text-slate-900">Modules:</span> {installer.solar_equipment.modules.join(', ')}</div>
            ) : null}
            {installer.solar_equipment?.inverters?.length ? (
              <div><span className="font-semibold text-slate-900">Inverters:</span> {installer.solar_equipment.inverters.join(', ')}</div>
            ) : null}
            {installer.solar_equipment?.storage?.length ? (
              <div><span className="font-semibold text-slate-900">Storage:</span> {installer.solar_equipment.storage.join(', ')}</div>
            ) : null}
          </div>
        </Section>

        <Section title="Certifications & Partners">
          <div className="space-y-2 text-sm text-slate-700">
            {installer.certifications?.length ? <div><span className="font-semibold text-slate-900">Certifications:</span> {installer.certifications.join(', ')}</div> : null}
            {installer.utility_and_partner_affiliations?.length ? (
              <div><span className="font-semibold text-slate-900">Affiliations:</span> {installer.utility_and_partner_affiliations.join(', ')}</div>
            ) : null}
            {installer.rebates_and_programs?.length ? (
              <div><span className="font-semibold text-slate-900">Rebates & Programs:</span> {installer.rebates_and_programs.join(', ')}</div>
            ) : null}
          </div>
        </Section>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Section title="Pricing & Financing">
          <div className="space-y-2 text-sm text-slate-700">
            {installer.pricing && (
              <>
                {installer.pricing.ev_level2_range_usd && <div><span className="font-semibold text-slate-900">EV Level 2:</span> ${installer.pricing.ev_level2_range_usd}</div>}
                {installer.pricing.dcfc_range_usd && <div><span className="font-semibold text-slate-900">DCFC:</span> ${installer.pricing.dcfc_range_usd}</div>}
                {installer.pricing.solar_ppw_usd && <div><span className="font-semibold text-slate-900">Solar $/W:</span> ${installer.pricing.solar_ppw_usd}</div>}
                {installer.pricing.battery_adder_per_kwh_usd && <div><span className="font-semibold text-slate-900">Battery $/kWh:</span> ${installer.pricing.battery_adder_per_kwh_usd}</div>}
                {installer.pricing.site_survey && <div><span className="font-semibold text-slate-900">Site Survey:</span> {installer.pricing.site_survey}</div>}
              </>
            )}
            {installer.financing && (
              <div><span className="font-semibold text-slate-900">Financing:</span> {(installer.financing.options || []).join(', ')} {installer.financing.notes ? `(${installer.financing.notes})` : ''}</div>
            )}
          </div>
        </Section>

        <Section title="Warranty & Support">
          <div className="space-y-2 text-sm text-slate-700">
            {installer.warranty && (
              <>
                {installer.warranty.labor_years != null && <div><span className="font-semibold text-slate-900">Labor:</span> {installer.warranty.labor_years} yrs</div>}
                {installer.warranty.equipment_years != null && <div><span className="font-semibold text-slate-900">Equipment:</span> {installer.warranty.equipment_years} yrs</div>}
                {installer.warranty.performance_guarantee && <div><span className="font-semibold text-slate-900">Performance:</span> {installer.warranty.performance_guarantee}</div>}
                {installer.warranty.notes && <div><span className="font-semibold text-slate-900">Notes:</span> {installer.warranty.notes}</div>}
              </>
            )}
            {installer.support_hours && <div><span className="font-semibold text-slate-900">Support Hours:</span> {installer.support_hours}</div>}
          </div>
        </Section>
      </div>

      <Section title="Projects & Sustainability">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700">
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-900">Featured projects</h4>
            <ul className="space-y-2">
              {(installer.featured_projects || []).map((p) => (
                <li key={p.name} className="border border-slate-200 rounded-xl p-3">
                  <div className="font-semibold text-slate-900">{p.name}</div>
                  <div className="text-slate-600">{p.location}</div>
                  <div className="text-slate-600">
                    {p.scope_kw ? `${p.scope_kw} kW • ` : ''}{p.year || 'Year n/a'}
                  </div>
                  {p.chargers_installed != null && <div className="text-slate-600">Chargers: {p.chargers_installed}</div>}
                  {p.equipment?.length ? <div className="text-slate-600">Equipment: {p.equipment.join(', ')}</div> : null}
                  {p.segment && <div className="text-slate-600">Segment: {p.segment}</div>}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-900">Sustainability</h4>
            <ul className="list-disc list-inside space-y-1">
              {(installer.sustainability_practices || []).map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            {installer.data_quality_notes && (
              <div className="text-amber-700 bg-amber-50 border border-amber-200 rounded-xl p-3 text-sm">
                {installer.data_quality_notes}
              </div>
            )}
          </div>
        </div>
      </Section>

      <Section title="Contact">
        <div className="flex flex-wrap gap-4 text-sm text-slate-700">
          {installer.contacts?.phone && (
            <span className="inline-flex items-center gap-2">
              <Phone size={14} /> {installer.contacts.phone}
            </span>
          )}
          {installer.contacts?.email && (
            <span className="inline-flex items-center gap-2">
              <Mail size={14} /> {installer.contacts.email}
            </span>
          )}
          {installer.contacts?.website && (
            <a
              href={installer.contacts.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-900"
            >
              <Globe size={14} /> Visit website
            </a>
          )}
        </div>
      </Section>
    </div>
  );
};

export default InstallerDetail;
