/**
 *
 * Asynchronously loads the component for RangeSlider
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('.'),
  loading: () => null,
});
