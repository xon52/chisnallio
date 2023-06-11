import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['src/main/index.ts'],
  project: ['src/**/*.ts'],
  paths: {
    '@': ['src'],
  },
};

export default config;
