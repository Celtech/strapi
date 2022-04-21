import MenuLogo from './extensions/images/logo.svg';
import AuthLogo from './extensions/images/logo-wordmark.svg';

export default {
  config: {
    auth: {
      logo: AuthLogo,
    },
    menu: {
      logo: MenuLogo,
    },
    theme: {
      colors: {
        primary100: '#c0c6e1',
        primary200: '#808ec3',
        primary500: '#4155a5',
        primary600: '#2c429b',
        primary700: '#23357c',
        danger700: '#b72b1a'
      },
    },
    locales: [],
  },
  bootstrap(app) {
    console.log(app);
  },
};
