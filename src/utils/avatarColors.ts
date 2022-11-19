import {
  amber,
  blue,
  deepOrange,
  deepPurple,
  green,
  indigo,
  pink,
  purple,
  red
} from '@mui/material/colors';

export const avatarColors = [
  { bgcolor: deepOrange[500] },
  { bgcolor: deepPurple[500] },
  { bgcolor: red[500] },
  { bgcolor: pink[500] },
  { bgcolor: purple[500] },
  { bgcolor: indigo[500] },
  { bgcolor: blue[500] },
  { bgcolor: green[500] },
  { bgcolor: amber[500] }
];

export const getRandomAvatarColor = () =>
  Math.floor(Math.random() * avatarColors.length);
export const getAvatarColor = (key: number) => avatarColors[key];
