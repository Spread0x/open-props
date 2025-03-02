import Animations from './props.animations.js'
import Sizes from './props.sizes.js'
import Colors from './props.colors.js'
import ColorsHSL from './props.colors-hsl.js'
import Fonts from './props.fonts.js'
import Borders from './props.borders.js'
import Aspects from './props.aspects.js'
import Easings from './props.easing.js'
import Gradients from './props.gradients.js'
import {StaticShadows} from './props.shadows.js'
import SVG from './props.svg.js'
import Zindex from './props.zindex.js'

export default OpenProps = {
  ...Animations,
  ...Sizes,
  ...Colors,
  ...ColorsHSL,
  ...Fonts,
  ...Borders,
  ...Aspects,
  ...Easings,
  ...SVG,
  ...Gradients,
  ...StaticShadows,
  ...Zindex,
}