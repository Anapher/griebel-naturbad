import Typography from "typography";
import grandViewTheme from "typography-theme-sutro";

export const theme = grandViewTheme;

const typography = new Typography(theme);

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
