import React from 'react';

export const handleScroll = (): void =>
  window.scrollTo({ top: 0, behavior: 'smooth' });

export const handleControlVisibility = (
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
): void =>
  window.pageYOffset > 550 ? setVisible(true) : setVisible(false);