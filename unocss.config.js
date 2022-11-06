import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
} from 'unocss';

export default defineConfig({
  presets: [
    presetAttributify(), // required if using attributify mode
    presetUno(), // required
    presetTypography(),
  ],
});
