import { Theme, ThemeConfig } from "@/theme/config"
import { buildThemeIntensity } from "@theme/intensity/intensity"
import { buildThemeScales } from "../color/color"

export function buildTheme(themeConfig: ThemeConfig): Theme {
  const intensity = buildThemeIntensity(themeConfig)
  const color = buildThemeScales(themeConfig)

  const theme: Theme = {
    ...themeConfig,
    intensity,
    color,
  }

  return theme
}
