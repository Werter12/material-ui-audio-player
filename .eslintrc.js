module.exports = {
    "env": {
        "browser": true
    },
    "extends": [
        "plugin:react/recommended",
        'plugin:jest/recommended',
        "prettier",
    ],
    "parser": "@typescript-eslint/parser",
    "settings": {
        "react":   {"version": "detect"}
    },
    "plugins": [
        "eslint-plugin-import",
        "eslint-plugin-jsdoc",
        "eslint-plugin-prefer-arrow",
        "eslint-plugin-unicorn",
        "eslint-plugin-react",
        "@typescript-eslint",
        "eslint-plugin-react-hooks"
    ],
    "rules": {
        "react/prop-types": 0
    }
};
