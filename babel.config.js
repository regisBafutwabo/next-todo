module.exports = {
    presets: ['next/babel'],
    plugins: ['relay'],
    env: { production: { plugins: ['transform-remove-console'] } },
};
