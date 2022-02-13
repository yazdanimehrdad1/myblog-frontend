

import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/darcula.css'
import 'styles/index.scss';
import '@fortawesome/fontawesome-svg-core/styles.css'
import "react-toggle/style.css" // for ES6 modules


import ReactDOM from 'react-dom'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faList, faBorderAll, faSortNumericDown, faSortNumericUp , faSun, faMoon} from '@fortawesome/free-solid-svg-icons'


import ThemeProvider from 'providers/ThemeProvider'

library.add(faList, faBorderAll, faSortNumericDown, faSortNumericUp, faSun, faMoon);


export default ({Component, pageProps}) => 
    <ThemeProvider> 
        <Component {...pageProps} /> 
    </ThemeProvider> 
