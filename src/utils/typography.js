import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"
fairyGateTheme.baseFontSize = '17.5px'
fairyGateTheme.overrideThemeStyles = () => ({
    'a': {
      'text-decoration': 'none',
      'box-shadow': 'none'
      },
  })

const typography = new Typography(fairyGateTheme)
export const { scale, rhythm, options } = typography

export default typography