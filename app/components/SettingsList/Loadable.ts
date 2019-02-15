/**
 *
 * Asynchronously loads the component for SettingsList
 *
 */

import * as Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
} as any);
