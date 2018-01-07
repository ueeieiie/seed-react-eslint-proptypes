module.exports = {
    "extends": ["airbnb", "plugin:react/recommended"],
    "plugins": ["react"],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "es6":     true,
        "browser": true,
        "node":    true,
    },
    "rules": {
        "indent": [2, 'tab'],
        "linebreak-style": 0,
        "comma-dangle": 0,
		"no-tabs": 0,
		"no-trailing-spaces": 0,
		"template-curly-spacing": 0,
		"object-curly-newline": ["error", {
			"ObjectExpression": "always",
			"ObjectPattern": "never"
		}],

        // React's
        "react/jsx-indent": [2, 'tab'],
		"react/jsx-indent-props": [2, 'tab'],
		"react/prop-types": 2
    }
};
