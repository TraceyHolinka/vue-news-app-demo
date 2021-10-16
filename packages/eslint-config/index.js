module.exports = {
    root: true,

    env: {
        node: true
    },
    extends: ['plugin:vue/essential'],

    parserOptions: {
        parser: 'babel-eslint'
    },

    rules: {
        'no-console': 'off',
        'no-debugger': 'off',
        'vue/no-v-html': 'off',
        'vue/require-default-prop': 'off',
        semi: ['error', 'never'],
        quotes: [2, 'single']
    },

    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
}
