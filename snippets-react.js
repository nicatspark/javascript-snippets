
/**
 * Load SVG image vs. inline SVG.
 * Inline SVG has the advantage of beeing accessible
 * for CSS animation from React. Inline also loads faster.
 * First the img way.
 */
import myIcon from './relative/path/to/icon.svg'

// In render method.
<img src={myIcon} alt="icon" />

// ...now inline
import { ReactComponent as MyIcon } from "./icon.svg"

// In render method.
<MyIcon /> // or...
<MyIcon className="someClassThatWillBeUsedInCSS" alt="icon" />