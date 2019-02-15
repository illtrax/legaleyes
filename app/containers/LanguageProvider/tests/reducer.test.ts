import { fromJS } from 'immutable';

import languageProviderReducer from '../reducer';
import { changeLocale } from '../actions';

describe('languageProviderReducer', () => {
  it('returns the initial state', () => {
    expect(languageProviderReducer(undefined, {})).toEqual(
      fromJS({
        locale: 'en',
      }),
    );
  });

  it('changes the locale', () => {
    expect(
      languageProviderReducer(undefined, {
        type: changeLocale.SUCCESS,
        locale: 'de',
      }).toJS(),
    ).toEqual({
      locale: 'de',
    });
  });
});
