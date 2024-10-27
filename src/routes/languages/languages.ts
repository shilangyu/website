import type { Component } from 'svelte';
import { z } from 'zod';
import Cpp from './assets/c++_logo.svg';
import C from './assets/c_logo.svg';
import Csharp from './assets/csharp_logo.svg';
import Dart from './assets/dart_logo.svg';
import Golang from './assets/golang_logo.svg';
import Julia from './assets/julia_logo.svg';
import JuliaDark from './assets/julia_logo_dark.svg';
import Koka from './assets/koka_logo.png';
import Lean from './assets/lean_logo.svg';
import LeanDark from './assets/lean_logo_dark.svg';
import Nim from './assets/nim_logo.svg';
import Python from './assets/python_logo.svg';
import Rust from './assets/rust_logo.svg';
import RustDark from './assets/rust_logo_dark.svg';
import Scala from './assets/scala_logo.svg';
import Swift from './assets/swift_logo.svg';
import Typescript from './assets/typescript_logo.svg';
import Zig from './assets/zig_logo.svg';
import dartReview, { metadata as dartReviewMetadata } from './reviews/dart.svx';
import dummyReview, { metadata as dummyReviewMetadata } from './reviews/dummy.svx';

const languageReviewMetadataSchema = z
  .object({
    lastUpdated: z.coerce.date(),
  })
  .strict();

export type LanguageReviewMetadata = z.infer<typeof languageReviewMetadataSchema>;

export type LanguageReviewEntry = {
  name: string;
  pathName: string;
  icon: string;
  iconDark?: string;
  ratings: {
    overall: number;
    tooling: number;
    relevance: number;
  };
  review: {
    component: Component;
    meta: LanguageReviewMetadata;
  };
};

export const languages: LanguageReviewEntry[] = [
  {
    name: 'Rust',
    pathName: 'rust',
    icon: Rust,
    iconDark: RustDark,
    ratings: {
      overall: Math.random(),
      tooling: Math.random(),
      relevance: Math.random(),
    },
    review: {
      component: dummyReview,
      meta: languageReviewMetadataSchema.parse(dummyReviewMetadata),
    },
  },
  {
    name: 'Golang',
    pathName: 'golang',
    icon: Golang,
    ratings: {
      overall: Math.random(),
      tooling: Math.random(),
      relevance: Math.random(),
    },
    review: {
      component: dummyReview,
      meta: languageReviewMetadataSchema.parse(dummyReviewMetadata),
    },
  },
  {
    name: 'Julia',
    pathName: 'julia',
    icon: Julia,
    iconDark: JuliaDark,
    ratings: {
      overall: Math.random(),
      tooling: Math.random(),
      relevance: Math.random(),
    },
    review: {
      component: dummyReview,
      meta: languageReviewMetadataSchema.parse(dummyReviewMetadata),
    },
  },
  {
    name: 'Dart',
    pathName: 'dart',
    icon: Dart,
    ratings: {
      overall: 0.7,
      tooling: 0.95,
      relevance: 0.9,
    },
    review: {
      component: dartReview,
      meta: languageReviewMetadataSchema.parse(dartReviewMetadata),
    },
  },
  {
    name: 'Typescript',
    pathName: 'typescript',
    icon: Typescript,
    ratings: {
      overall: Math.random(),
      tooling: Math.random(),
      relevance: Math.random(),
    },
    review: {
      component: dummyReview,
      meta: languageReviewMetadataSchema.parse(dummyReviewMetadata),
    },
  },
  {
    name: 'Python',
    pathName: 'python',
    icon: Python,
    ratings: {
      overall: Math.random(),
      tooling: Math.random(),
      relevance: Math.random(),
    },
    review: {
      component: dummyReview,
      meta: languageReviewMetadataSchema.parse(dummyReviewMetadata),
    },
  },
  {
    name: 'Lean',
    pathName: 'lean',
    icon: Lean,
    iconDark: LeanDark,
    ratings: {
      overall: Math.random(),
      tooling: Math.random(),
      relevance: Math.random(),
    },
    review: {
      component: dummyReview,
      meta: languageReviewMetadataSchema.parse(dummyReviewMetadata),
    },
  },
  {
    name: 'Koka',
    pathName: 'koka',
    icon: Koka,
    ratings: {
      overall: Math.random(),
      tooling: Math.random(),
      relevance: Math.random(),
    },
    review: {
      component: dummyReview,
      meta: languageReviewMetadataSchema.parse(dummyReviewMetadata),
    },
  },
  {
    name: 'Scala',
    pathName: 'scala',
    icon: Scala,
    ratings: {
      overall: Math.random(),
      tooling: Math.random(),
      relevance: Math.random(),
    },
    review: {
      component: dummyReview,
      meta: languageReviewMetadataSchema.parse(dummyReviewMetadata),
    },
  },
  {
    name: 'C',
    pathName: 'c',
    icon: C,
    ratings: {
      overall: Math.random(),
      tooling: Math.random(),
      relevance: Math.random(),
    },
    review: {
      component: dummyReview,
      meta: languageReviewMetadataSchema.parse(dummyReviewMetadata),
    },
  },
  {
    name: 'C++',
    pathName: 'cpp',
    icon: Cpp,
    ratings: {
      overall: Math.random(),
      tooling: Math.random(),
      relevance: Math.random(),
    },
    review: {
      component: dummyReview,
      meta: languageReviewMetadataSchema.parse(dummyReviewMetadata),
    },
  },
  {
    name: 'Nim',
    pathName: 'nim',
    icon: Nim,
    ratings: {
      overall: Math.random(),
      tooling: Math.random(),
      relevance: Math.random(),
    },
    review: {
      component: dummyReview,
      meta: languageReviewMetadataSchema.parse(dummyReviewMetadata),
    },
  },
  {
    name: 'C#',
    pathName: 'csharp',
    icon: Csharp,
    ratings: {
      overall: Math.random(),
      tooling: Math.random(),
      relevance: Math.random(),
    },
    review: {
      component: dummyReview,
      meta: languageReviewMetadataSchema.parse(dummyReviewMetadata),
    },
  },
  {
    name: 'Zig',
    pathName: 'zig',
    icon: Zig,
    ratings: {
      overall: Math.random(),
      tooling: Math.random(),
      relevance: Math.random(),
    },
    review: {
      component: dummyReview,
      meta: languageReviewMetadataSchema.parse(dummyReviewMetadata),
    },
  },
  {
    name: 'Swift',
    pathName: 'swift',
    icon: Swift,
    ratings: {
      overall: Math.random(),
      tooling: Math.random(),
      relevance: Math.random(),
    },
    review: {
      component: dummyReview,
      meta: languageReviewMetadataSchema.parse(dummyReviewMetadata),
    },
  },
];
