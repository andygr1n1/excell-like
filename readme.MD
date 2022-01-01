<!-- adding font to css example -->

@font-face {
font-family: 'MyFont';
src: url('./my-font.woff2') format('woff2'),
url('./my-font.woff') format('woff');
font-weight: 600;
font-style: normal;
}

.hello {
color: red;
font-family: 'MyFont';
background: url('./icon.png');
}

########################################

Warning
Only the default export of JSON modules can be used without warning.
// No warning
import data from './data.json';

// Warning shown, this is not allowed by the spec.
import { foo } from './data.json';

########################################

webpack5 + tailwind
https://gsc13.medium.com/how-to-configure-webpack-5-to-work-with-tailwindcss-and-postcss-905f335aac2

########################################
