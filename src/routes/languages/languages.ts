import Cpp from '$lib/assets/languages/c++_logo.svg';
import C from '$lib/assets/languages/c_logo.svg';
import Csharp from '$lib/assets/languages/csharp_logo.svg';
import Dart from '$lib/assets/languages/dart_logo.svg';
import Golang from '$lib/assets/languages/golang_logo.svg';
import Julia from '$lib/assets/languages/julia_logo.svg';
import JuliaDark from '$lib/assets/languages/julia_logo_dark.svg';
import Koka from '$lib/assets/languages/koka_logo.png';
import Lean from '$lib/assets/languages/lean_logo.svg';
import LeanDark from '$lib/assets/languages/lean_logo_dark.svg';
import Nim from '$lib/assets/languages/nim_logo.svg';
import Python from '$lib/assets/languages/python_logo.svg';
import Rust from '$lib/assets/languages/rust_logo.svg';
import RustDark from '$lib/assets/languages/rust_logo_dark.svg';
import Scala from '$lib/assets/languages/scala_logo.svg';
import Swift from '$lib/assets/languages/swift_logo.svg';
import Typescript from '$lib/assets/languages/typescript_logo.svg';
import Zig from '$lib/assets/languages/zig_logo.svg';
import type { ComponentType } from 'svelte';
import dummyReview from './reviews/dummy.svx';

export interface LanguageReviewEntry {
  name: string;
  pathName: string;
  icon: string;
  iconDark?: string;
  ratings: {
    overall: number;
    tooling: number;
    relevance: number;
    expressiveness: number;
  };
  review: ComponentType;
}

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
      expressiveness: Math.random(),
    },
    review: dummyReview,
  },
  {
    name: 'Golang',
    pathName: 'golang',
    icon: Golang,
    ratings: {
      overall: Math.random(),
      tooling: Math.random(),
      relevance: Math.random(),
      expressiveness: Math.random(),
    },
    review: dummyReview,
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
      expressiveness: Math.random(),
    },
    review: dummyReview,
  },
  {
    name: 'Dart',
    pathName: 'dart',
    icon: Dart,
    ratings: {
      overall: Math.random(),
      tooling: Math.random(),
      relevance: Math.random(),
      expressiveness: Math.random(),
    },
    review: dummyReview,
  },
  {
    name: 'Typescript',
    pathName: 'typescript',
    icon: Typescript,
    ratings: {
      overall: Math.random(),
      tooling: Math.random(),
      relevance: Math.random(),
      expressiveness: Math.random(),
    },
    review: dummyReview,
  },
  {
    name: 'Python',
    pathName: 'python',
    icon: Python,
    ratings: {
      overall: Math.random(),
      tooling: Math.random(),
      relevance: Math.random(),
      expressiveness: Math.random(),
    },
    review: dummyReview,
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
      expressiveness: Math.random(),
    },
    review: dummyReview,
  },
  {
    name: 'Koka',
    pathName: 'koka',
    icon: Koka,
    ratings: {
      overall: Math.random(),
      tooling: Math.random(),
      relevance: Math.random(),
      expressiveness: Math.random(),
    },
    review: dummyReview,
  },
  {
    name: 'Scala',
    pathName: 'scala',
    icon: Scala,
    ratings: {
      overall: Math.random(),
      tooling: Math.random(),
      relevance: Math.random(),
      expressiveness: Math.random(),
    },
    review: dummyReview,
  },
  {
    name: 'C',
    pathName: 'c',
    icon: C,
    ratings: {
      overall: Math.random(),
      tooling: Math.random(),
      relevance: Math.random(),
      expressiveness: Math.random(),
    },
    review: dummyReview,
  },
  {
    name: 'C++',
    pathName: 'cpp',
    icon: Cpp,
    ratings: {
      overall: Math.random(),
      tooling: Math.random(),
      relevance: Math.random(),
      expressiveness: Math.random(),
    },
    review: dummyReview,
  },
  {
    name: 'Nim',
    pathName: 'nim',
    icon: Nim,
    ratings: {
      overall: Math.random(),
      tooling: Math.random(),
      relevance: Math.random(),
      expressiveness: Math.random(),
    },
    review: dummyReview,
  },
  {
    name: 'C#',
    pathName: 'csharp',
    icon: Csharp,
    ratings: {
      overall: Math.random(),
      tooling: Math.random(),
      relevance: Math.random(),
      expressiveness: Math.random(),
    },
    review: dummyReview,
  },
  {
    name: 'Zig',
    pathName: 'zig',
    icon: Zig,
    ratings: {
      overall: Math.random(),
      tooling: Math.random(),
      relevance: Math.random(),
      expressiveness: Math.random(),
    },
    review: dummyReview,
  },
  {
    name: 'Swift',
    pathName: 'swift',
    icon: Swift,
    ratings: {
      overall: Math.random(),
      tooling: Math.random(),
      relevance: Math.random(),
      expressiveness: Math.random(),
    },
    review: dummyReview,
  },
];
