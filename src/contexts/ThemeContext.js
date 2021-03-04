import { createContext } from 'react';
import { THEMES } from '../constants';

const ThemeContext = createContext(THEMES.LIGHT);

export default ThemeContext;
