import { createTheme as createMuiTheme } from '@material-ui/core/styles'

import red from '@material-ui/core/colors/red'
import amber from '@material-ui/core/colors/amber'
import lightGreen from '@material-ui/core/colors/lightGreen'
export const FONT_FAMILY = '"Montserrat", "Roboto", open-sans'
export const ACCENT_COLOR = '#4D91FF'
export const CLOUD_BLUE = '#b7d3ff'
export const DARK_CLOUD_BLUE = '#92B4D9'
export const ACCENT_BG_COLOR = '#7bacff'
export const ACCENT_SECONDARY_COLOR = '#4472c4'
export const DARK_COLOR = '#182e4f'
export const GREEN_COLOR = '#219653'
export const DARK_GREEN = '#0a9144'
export const BRIGHT_GREEN = '#9dd866'
export const LIGHT_GREEN = '#d2eadc'
export const RED_COLOR = '#eb5757'
export const BRIGHT_RED = '#eb5757'
export const DARK_RED = '#e64747'
export const BORDER_COLOR = '#CACACA'
export const BG_COLOR = '#eaeef4'
export const DARK_BLUE = '#4797B9'
export const LIGHT_BLUE = '#8dddd0'
export const DARK_YELLOW = '#F2994A'
export const ORANGE = '#ffa056'
// export const BRIGHT_ORANGE = '#ff8b05'
export const GREY_COLOR = '#6f6f6f'
export const MID_GREY = '#B3B3B3'
export const GREY_LIGHT_COLOR = '#818181'
export const PAPER_BG = '#f7f9fb'
export const VIOLET = '#6f4e7c'
export const PINK = '#dc004e'

export const YELLOW_COLOR = '#FFC65C'
export const BRIGHT_ORANGE = '#FF6347'

// https://material-ui-next.com/customization/themes/

export const MAIN_BOX_SHADOW = '0 2px 10px 0 rgba(0, 0, 0, 0.16)'
export const DEFAULT_BORDER = '0.5px solid #e0e0e0'

export const LEGEND_COLORS = [
  VIOLET,
  DARK_RED,
  DARK_BLUE,
  ORANGE,
  BRIGHT_GREEN,
  LIGHT_BLUE,
  YELLOW_COLOR,
  GREEN_COLOR,
  MID_GREY,
  PINK
]

export function createTheme (config) {
  return createMuiTheme({
    spacing: 4,
    typography: {
      /* useNextVariants: false,
      nav: {
        fontSize: '50px'
      },
      actionButton: {
        fontSize: '1.5rem',
        fontWeight: 'normal',
        height: '40px',
        lineHeight: '28px',
        textTransform: 'none',
        border: `1px solid ${ACCENT_COLOR}`,
        opacity: 0.7,
        borderRadius: '3px',
        '&:hover': {
          color: '#ffffff',
          backgroundColor: ACCENT_COLOR
        }
      }, */
      fontFamily: 'Montserrat'
      // letterSpacing: '0.03rem'
    },
    /* layout: {
      card: {
        borderRadius: '0'
      },
      paper: {
        boxShadow: 'none',
        border: `1px solid ${BORDER_COLOR}`
      },
      tableBorder: {
        boxShadow: 'none',
        border: `1px solid ${BORDER_COLOR}`,
        borderRadius: 0
      }
    },
    direction: config && config.rtl ? 'rtl' : 'ltr', */
    palette: {
      background: {
        default: BG_COLOR
      },
      primary: {
        light: '#646e78',
        main: ACCENT_COLOR,
        dark: DARK_COLOR,
        contrastText: '#fff',
        green: GREEN_COLOR,
        red: RED_COLOR,
        yellow: YELLOW_COLOR,
        grey: GREY_COLOR
      },
      secondary: {
        light: '#e3e3e3',
        main: '#ffffff',
        dark: '#b2b2b2',
        contrastText: '#000'
      },
      error: red,
      info: {
        ...lightGreen,
        dark: lightGreen[700],
        light: lightGreen[300],
        main: lightGreen[500]
      },
      warn: {
        ...amber,
        dark: amber[700],
        light: amber[300],
        main: amber[500]
      },
      text: {
        primary: DARK_COLOR,
        secondary: ACCENT_COLOR,
        disabled: GREY_COLOR
      },
      assetManager: {
        background: '#4797B9',
        button: '#235274',
        text: '#316981',
        yellow: '#F2994A'
      },
      // Used by `getContrastText()` to maximize the contrast between the
      // background and the text.
      contrastThreshold: 3,
      type: config && config.dark ? 'dark' : 'light'
    },
    props: {
      MuiFormControl: {
        margin: 'normal'
      },
      MuiCheckbox: {
        color: 'primary'
      },
      MuiTabs: {
        indicatorColor: 'primary',
        textColor: 'primary'
      }
    },
    overrides: {
      MuiCardHeader: {
        title: {
          fontSize: '1.25rem',
          fontWeight: 500
        },
        root: {
          padding: '1.5rem',
          paddingBottom: '0'
        }
      },
      MuiCardContent: {
        root: {
          padding: '1.5rem'
        }
      },
      MuiPaper: {
        rounded: {
          borderRadius: '5px'
        }
      },
      /* MuiCssBaseline: {
        '@global': {
          '@font-face': [BrandonTextRegular, BrandonTextMedium, BrandonTextBold]
        }
      }, */
      MuiBreadcrumbs: {
        root: {
          fontSize: '1.625rem'
        },
        separator: {
          fontSize: '1.6rem',
          marginBottom: '2px'
        }
      },
      MuiIconButton: {
        root: {
          '&:hover': {
            backgroundColor: 'unset',
            transform: 'scale(1.1)'
          }
        }
      },
      MuiSelect: {
        icon: {
          color: ACCENT_COLOR
        }
      },
      MuiTooltip: {
        tooltip: {
          fontSize: '1rem',
          fontWeight: 'normal',
          color: ACCENT_COLOR,
          backgroundColor: '#ffffff',
          border: `1px solid ${ACCENT_COLOR}`
        }
      },
      MuiFormControl: {
        root: {
          maxWidth: 550
        }
      }
    }
  })
}
