import theme from 'styled-theming';

export const shadow = theme('mode', {
  light: 'hsla(0, 0%, 0%, 0.1)',
  dark: 'hsla(0, 0%, 0%, 0.1)',
});

export const text = theme('mode', {
  light: 'rgb(33, 21, 81)',
  dark: '#dfe1e3',
});

export const textButton = theme('mode', {
  light: 'white',
  dark: 'white',
});

export const textSecondary = theme('mode', {
  light: 'rgb(178, 174, 194)',
  dark: '#a3a8ae',
});

export const textTertiary = theme('mode', {
  light: '#757575',
  dark: '#4e5359',
});

export const overlay1 = theme('mode', {
  light: '#00000010',
  dark: '#ffffff05',
});

export const overlay2 = theme('mode', {
  light: '#00000015',
  dark: '#ffffff05',
});

export const overlay3 = theme('mode', {
  light: '#00000040',
  dark: '#ffffff15',
});

export const selection = theme('mode', {
  light: '#000000',
  dark: '#ffffff',
});

export const background = theme('mode', {
  light: '#F7F7FA',
  dark: '#0f1012',
});

export const foreground = theme('mode', {
  light: '#ffffff',
  dark: '#151619',
});

export const primary = theme('mode', {
  light: '#643FDB',
  dark: '#643FDB',
});

export const picker = [
  '#FF5555',
  '#FF8A00',
  '#DA9A58',
  '#F9CA28',
  '#8ECF66',
  '#5AE1C3',
  '#4D9FFF',
  '#643FDB',
  '#F980BA',
  '#AAB3BB',
  '#543A49',
];
