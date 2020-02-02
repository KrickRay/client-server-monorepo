module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2020: true
    },
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "prettier/@typescript-eslint"
    ],
    settings: {
        react: {
            version: "detect"
        }
    },
    rules: {
        "@typescript-eslint/explicit-function-return-type": "off"
    }
};
