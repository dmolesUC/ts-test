module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    root: true,
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
    },
    extends: [
        // "plugin:vue/strongly-recommended",
        "eslint:recommended",
        "@vue/typescript/recommended",
    ],
    plugins: ["@typescript-eslint"],
    rules: {
    },
}
