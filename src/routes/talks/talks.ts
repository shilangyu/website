export type TalkEntry = {
  title: string;
  description: string;
  youtubeId: string;
  date: Date;
  place: string;
  slides?: string;
};

export const talks: TalkEntry[] = [
  {
    title: 'Software correctness',
    description:
      'I show examples of formal guarantees in an approachable manner. I touch upon how to use the type system to your advantage to eliminate the mere possibility of bugs. Finally, I conclude by showing examples in the Lean theorem prover where we can prove guarantees of more complex properties.',
    youtubeId: 'FzCMH688His',
    date: new Date('2024-07-04'),
    place: 'Fluttercon EU, Berlin',
    slides: 'https://github.com/shilangyu/presentations/tree/fluttercon2024/software_correctness',
  },
  {
    title: 'Presentation events - a missing piece in BLoC',
    description:
      'I explain how to enhance your BLoCs with presentation events, how create them, and why they solve an inherent problem present in BLoCs.',
    youtubeId: 'X4FFYqNr9Jc',
    date: new Date('2024-07-05'),
    place: 'Fluttercon EU, Berlin',
  },
];
