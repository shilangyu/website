import Avatar from '$lib/assets/avatar.svg';
import STMPreview from './assets/STM_preview.webp';
import SVMPreview from './assets/SVM_preview.webp';
import ComputerGraphicsPreview from './assets/computer-graphics_preview.webp';
import DistributedAlgorithmsPreview from './assets/distributed-algorithms_preview.webp';
import FormalLangPreview from './assets/formal-lang_preview.webp';
import LemmurLogo from './assets/lemmur_logo.svg';
import PiGenerationPreview from './assets/pi-generation_preview.webp';
import RamRunnerPreview from './assets/ram-runner_preview.webp';
import RegisterTransformations from './assets/register-transformations_preview.webp';
import ScoopSearchPreview from './assets/scoop-search_preview.webp';
import SensorsCoveragePreview from './assets/sensors-coverage_preview.webp';
import UniNotesPreview from './assets/uni-notes_preview.webp';

export type ProjectEntry = {
  name: string;
  description: string;
  repository: string;
  website?: string;
  technologies: string[];
  image: {
    light: string;
    dark?: string;
    alt: string;
  };
};

export const projects: ProjectEntry[] = [
  {
    name: 'formal-lang',
    description:
      'Formal specification and verification of a the semantics of a simple programming language.',
    repository: 'https://github.com/shilangyu/formal-lang',
    technologies: ['Lean', 'Scala', 'Stainless'],
    website: 'https://github.shilangyu.dev/formal-lang/',
    image: {
      light: FormalLangPreview,
      alt: 'formal-lang syntax grammar',
    },
  },
  {
    name: 'scoop-search',
    description: 'A much faster alternative for the search command of the Scoop package manager.',
    repository: 'https://github.com/shilangyu/scoop-search',
    technologies: ['Zig', 'Windows', 'Concurrency'],
    image: {
      light: ScoopSearchPreview,
      alt: 'Benchmark showing scoop-search is 350 times faster than scoop search',
    },
  },
  {
    name: 'Sensors coverage problem',
    description:
      'Solution to the sensors coverage problem using homology from topological data analysis.',
    repository: 'https://github.com/shilangyu/sensors-coverage',
    technologies: ['Python', 'gudhi', 'Topological data analysis'],
    image: {
      light: SensorsCoveragePreview,
      alt: 'Example of a sensor coverage problem with four coverage holes',
    },
  },
  {
    name: 'π digits generation',
    description:
      'Generates 100 million digits of π under 2 minutes using the Chudnovsky algorithm.',
    repository: 'https://github.com/shilangyu/AaC-pi',
    technologies: ['C', 'gmp'],
    website: 'https://github.shilangyu.dev/AaC-pi/',
    image: {
      light: PiGenerationPreview,
      alt: 'Screenshot of the π digits program invocations',
    },
  },
  {
    name: 'University notes',
    description: 'Collection of my personal notes from my university courses.',
    repository: 'https://github.com/shilangyu/uni-notes',
    technologies: ['Pandoc', 'Deno'],
    website: 'https://github.shilangyu.dev/uni-notes/',
    image: {
      light: UniNotesPreview,
      alt: 'Example notes from the university course "Topological Data Analysis"',
    },
  },
  {
    name: 'Random-access machine runner',
    description: 'Interpreter for the mathematical RAM computation model.',
    repository: 'https://github.com/shilangyu/ram-runner',
    technologies: ['Rust', 'WebAssembly'],
    website: 'https://github.shilangyu.dev/ram-runner/',
    image: {
      light: RamRunnerPreview,
      alt: 'Screenshot of the RAM runner web app with the reverse program',
    },
  },
  {
    name: 'SVM',
    description:
      'From scratch implementation of a support vector machine using gradient descent and SMO.',
    repository: 'https://github.com/shilangyu/SVM-from-scratch',
    technologies: ['Julia', 'Machine learning'],
    website: 'https://shilangyu.dev/blog/svm-explained/',
    image: {
      light: SVMPreview,
      alt: 'Two spirals with the decision boundary',
    },
  },
  {
    name: 'Register transformation',
    description:
      'Showcases the transformations needed to go from one wait-free register to a different one.',
    repository: 'https://github.com/shilangyu/register-transformations',
    technologies: ['TypeScript', 'Graphs'],
    website: 'https://github.shilangyu.dev/register-transformations/',
    image: {
      light: RegisterTransformations,
      alt: 'Example of a register transformation from a binary safe single-writer multi-reader register to a multivalue regular single-writer single-reader register',
    },
  },
  {
    name: 'lemmur',
    description: 'A client for the Lemmy platform - a federated Reddit alternative. (archive)',
    repository: 'https://github.com/LemmurOrg/lemmur',
    technologies: ['Flutter', 'Android', 'iOS'],
    image: {
      light: LemmurLogo,
      alt: "Lemmur's logo",
    },
  },
  {
    name: 'Avatar',
    description: 'Source code for the generation of my avatar.',
    repository: 'https://github.com/shilangyu/avatar',
    technologies: ['Deno', 'SVG'],
    image: {
      light: Avatar,
      alt: "Shilangyu's avatar",
    },
  },
  {
    name: 'Distributed algorithms',
    description:
      'Implementation of a handful of distributed computing primitives, including broadcast and agreement.',
    repository: 'https://github.com/shilangyu/distributed-algorithms',
    technologies: ['C++', 'Concurrency', 'Distributed'],
    image: {
      light: DistributedAlgorithmsPreview,
      alt: 'Lattice agreement algorithm visualization',
    },
  },
  {
    name: 'Software Transactional Memory',
    description: 'Implementation of a software transactional memory using the TL2 algorithm.',
    repository: 'https://github.com/shilangyu/software-transactional-memory',
    technologies: ['C++', 'Concurrency'],
    image: {
      light: STMPreview,
      alt: 'Example usage of the STM library',
    },
  },
  {
    name: 'Computer graphics',
    description:
      'Implementation of a handful of computer graphics algorithms, including image filters, rasterization, and raycasting.',
    repository: 'https://github.com/shilangyu/WUT-CG',
    technologies: ['Rust', 'TypeScript', 'C#'],
    image: {
      light: ComputerGraphicsPreview,
      alt: 'A rasterized Obama triangle, raycasted ellipsoid, and deepfried meme',
    },
  },
];
