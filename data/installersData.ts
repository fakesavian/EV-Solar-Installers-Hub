import { DirectoryInstaller, DirectoryInstallerNormalized } from '../types';
import rawInstallers from './site/index.json';

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const installers = (rawInstallers as DirectoryInstaller[]).map((inst) => {
  const slug = inst.slug || slugify(inst.id || inst.company_name);
  const suitableFor =
    inst.suitableFor ||
    inst.service_models ||
    (inst.category ? [inst.category] : []);

  const tags = Array.from(new Set([...(inst.tags || []), inst.category].filter(Boolean))) as string[];

  return {
    ...inst,
    slug,
    suitableFor,
    tags,
  } as DirectoryInstallerNormalized;
});

export const installersBySlug = new Map<string, DirectoryInstallerNormalized>(
  installers.map((i) => [i.slug, i])
);

export const installersList = installers;
