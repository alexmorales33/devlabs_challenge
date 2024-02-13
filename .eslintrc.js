module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:prettier/recommended', // Asegúrate de tener esta línea si estás utilizando Prettier con ESLint
  ],
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
  },
};
