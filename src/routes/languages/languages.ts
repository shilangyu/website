import type { ComponentType } from 'svelte';
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
import dummyReview from './reviews/dummy.svx';

export type LanguageReviewEntry = {
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
