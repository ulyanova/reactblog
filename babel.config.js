module.exports = {
    presets: [
        "@babel/env",
        "@babel/react"
    ],
    plugins: [
        ["@babel/plugin-proposal-decorators", { "legacy": true }]
    ]

};

/*
"babel": {
    "presets": [
        "@babel/env",
        "@babel/react"
    ]
}



module.exports = {
    presets: [
        ['@babel/env', {
            targets: {
                node: 'current',
                firefox: '60',
                chrome: '67',
                safari: '11.1',
            },
        }],
    ]
};
*/
