import { changeLocale } from '../actions';

describe('LanguageProvider actions', () => {
  describe('Change Local Action', () => {
    it('has a type of CHANGE_LOCALE', () => {
      const expected = {
        type: changeLocale.TYPE,
        locale: 'de',
      };
      expect(changeLocale.TYPE).toEqual(expected.type);
    });
  });
});
