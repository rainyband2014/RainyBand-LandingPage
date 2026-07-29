/// <reference types="astro/client" />
/// <reference path="../worker-configuration.d.ts" />

type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}

declare module 'cloudflare:workers' {
  export const env: Env;
}
