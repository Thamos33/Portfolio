// load assets
function requireAll(r) {
    r.keys().forEach(r);
}
requireAll(require.context('../images/', true));
requireAll(require.context('../assets/', true));

//JSON
import translations from './translations/fr.json';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

// Import our custom CSS
import '../scss/styles.scss';

// Import our custom Script
import './i18n';
import './menu';
import './fade';
