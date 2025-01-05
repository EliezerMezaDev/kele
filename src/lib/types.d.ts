/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace Kele {
  interface Job {
    id: number;
    title: string;
    tags: string[];
    bgMainImage: string;
    bgHoverImage: string;
  }
}
