
export const getHeroText = async (): Promise<string[]> => {
  const messages: string[] = [
    'empowering students.',
    'innovating.',
    "your school's needs.",
    'learning.',
    'teaching.',
    'what matters.',
    'administrating.'
  ];

  // Shuffle the array
  return messages.toSorted(() => Math.random() - 0.5);
}
