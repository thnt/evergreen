import tinycolor from 'tinycolor2'
import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'
import scales from '../foundational-styles/scales'
import palette from '../foundational-styles/palette'

const Appearances = {}

Appearances.default = Themer.createRowAppearance({
  base: {},

  hover: {
    backgroundColor: scales.neutral.N1A
  },

  focus: {
    backgroundColor: scales.blue.B1A
  },

  active: {
    backgroundColor: scales.blue.B2A
  },

  current: {
    cursor: 'default'
  }
})

Appearances.danger = Themer.createRowAppearance({
  base: {
    backgroundColor: palette.red.lightest
  },

  hover: {
    backgroundColor: tinycolor(palette.red.lightest)
      .darken(1)
      .toString()
  },

  focus: {
    backgroundColor: tinycolor(palette.red.lightest)
      .darken(1.5)
      .toString()
  },

  active: {
    backgroundColor: tinycolor(palette.red.lightest)
      .darken(2.2)
      .toString()
  },

  current: {
    cursor: 'default'
  }
})

Appearances.warning = Themer.createRowAppearance({
  base: {
    backgroundColor: palette.orange.lightest
  },

  hover: {
    backgroundColor: tinycolor(palette.orange.lightest)
      .darken(1)
      .toString()
  },

  focus: {
    backgroundColor: tinycolor(palette.orange.lightest)
      .darken(1.5)
      .toString()
  },

  active: {
    backgroundColor: tinycolor(palette.orange.lightest)
      .darken(2.5)
      .toString()
  },

  current: {
    cursor: 'default'
  }
})

Appearances.info = Themer.createRowAppearance({
  base: {
    backgroundColor: palette.blue.lightest
  },

  hover: {
    backgroundColor: tinycolor(palette.blue.lightest)
      .darken(1)
      .toString()
  },

  focus: {
    backgroundColor: tinycolor(palette.blue.lightest)
      .darken(1.5)
      .toString()
  },

  active: {
    backgroundColor: tinycolor(palette.blue.lightest)
      .darken(2.5)
      .toString()
  },

  current: {
    cursor: 'default'
  }
})

Appearances.success = Themer.createRowAppearance({
  base: {
    backgroundColor: palette.green.lightest
  },

  hover: {
    backgroundColor: tinycolor(palette.green.lightest)
      .darken(1)
      .toString()
  },

  focus: {
    backgroundColor: tinycolor(palette.green.lightest)
      .darken(2)
      .toString()
  },

  active: {
    backgroundColor: tinycolor(palette.green.lightest)
      .darken(3)
      .toString()
  },

  current: {
    cursor: 'default'
  }
})

/**
 * Get the appearance of a `Row`.
 * @param {string} appearance — only one default appearance.
 * @param {string} intent - none, info, success, warning, danger.
 * @return {string} the appearance object.
 */
const getRowAppearance = (appearance, intent) => {
  switch (intent) {
    case 'danger':
      return Appearances.danger
    case 'warning':
      return Appearances.warning
    case 'info':
      return Appearances.info
    case 'success':
      return Appearances.success
    case 'none':
    default:
      return Appearances.default
  }
}

/**
 * Get the className of a `Row`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */
export default memoizeClassName(getRowAppearance)