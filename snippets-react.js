
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


/**
 * Implement useState with useReducer.
 */
const [name, setName] = useReducer((_, value) => value, 'James');
<input value={name} onChange={e => setName(e.target.value)} />


/**
 * Manually Re-render a Component.
 */
const [, rerender] = useState()
rerender({})


/**
 * Pass a Function to setState
 */
const [count, setCount] = useState(0)
setCount(c => c + 1)

// Example
const [count, setCount] = useState(0)
useEffect(() => {
  const id = setInterval(() => {
    setCount(c => c + 1);
  }, 1000);
  return () => clearInterval(id);
}, []);


/**
 * String Values as HTML Elements
 */
const Button = ({ Component = 'button', ...props }) => <Component {...props} />

<Button>A Button</Button> // Renders a button element
<Button Component="a">A Link</Button> // Renders an anchor element


/**
 * React Keys with Fragments
 */
pokemons.map(pokemon => (
  <React.Fragment key={pokemon}>
    <strong>Name: </strong>
    <span>{pokemon}</span>
  </React.Fragment>
))