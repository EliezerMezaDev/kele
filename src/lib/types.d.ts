/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace Kele {
  interface Job {
    id: number;
    title: string;
    date: string;
    desc: string;
    tags_id: number[];
    portraid: string;
    resources?: string;
  }

  interface JobSource extends Job {
    tags: Tag[];
  }

  interface Tag {
    id: number;
    name: string;
  }
}
