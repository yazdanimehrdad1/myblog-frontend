

import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/darcula.css'
import 'styles/index.scss';
import '@fortawesome/fontawesome-svg-core/styles.css'


import ReactDOM from 'react-dom'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faList, faBorderAll, faSortNumericDown, faSortNumericUp} from '@fortawesome/free-solid-svg-icons'


library.add(faList, faBorderAll, faSortNumericDown, faSortNumericUp);


export default ({Component, pageProps}) => <Component {...pageProps} />
