import { DirectoryInstaller, DirectoryInstallerNormalized, InstallerCategory } from '../types';

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const modules = import.meta.glob('./site/*.json', { eager: true }) as Record<
  string,
  { default: DirectoryInstaller | DirectoryInstaller[] } | DirectoryInstaller | DirectoryInstaller[]
>;

const rawInstallers: DirectoryInstaller[] = Object.entries(modules)
  .filter(([path]) => !path.endsWith('index.json'))
  .flatMap(([, mod]) => {
    const value = (mod as any).default ?? mod;
    return Array.isArray(value) ? value : [value];
  }) as DirectoryInstaller[];

const installerMap = new Map<string, DirectoryInstallerNormalized>();
const categoryMap = new Map<string, InstallerCategory>();

const addCategory = (label?: string | null) => {
  if (!label) return;
  const cleanLabel = label.trim();
  if (!cleanLabel) return;
  const slug = slugify(cleanLabel);
  if (!slug) return;
  const existing = categoryMap.get(slug);
  categoryMap.set(slug, {
    slug,
    label: existing?.label ?? cleanLabel,
    count: (existing?.count ?? 0) + 1,
  });
};

rawInstallers.forEach((inst) => {
  const slug = slugify(inst.slug || inst.id || inst.company_name);
  if (!slug || installerMap.has(slug)) return;

  const suitableFor = Array.from(
    new Set(
      (inst.suitableFor ||
        inst.service_models ||
        (inst.category ? [inst.category] : []) ||
        [])
        .map((s) => (s || '').trim())
        .filter(Boolean)
    )
  );

  const tags = Array.from(
    new Set([...(inst.tags || []), inst.category].filter(Boolean).map((t) => (t as string).trim()))
  );

  const categoryKeys = Array.from(
    new Set([...suitableFor, ...tags].map((t) => slugify(t)).filter(Boolean))
  );

  const normalized: DirectoryInstallerNormalized = {
    ...inst,
    slug,
    suitableFor,
    tags,
    categoryKeys,
  };

  installerMap.set(slug, normalized);

  suitableFor.forEach(addCategory);
  tags.forEach(addCategory);
});

export const installersList = Array.from(installerMap.values());

export const installersBySlug = new Map<string, DirectoryInstallerNormalized>(
  installersList.map((i) => [i.slug, i])
);

export const categoriesList: InstallerCategory[] = Array.from(categoryMap.values()).sort((a, b) => {
  if (b.count === a.count) return a.label.localeCompare(b.label);
  return b.count - a.count;
});
