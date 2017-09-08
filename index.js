var targets = {
    "browsers": "last 2 versions, > 2%",
};

module.exports = function (context, options = {}) {
    var debug = (options && typeof options.debug === 'boolean') ? !!options.debug : false;

    return {
        "presets": [
            require('babel-preset-env').default(null, {
                "debug": debug,
                "modules": false,
                "targets": targets,
                "loose": true,
                "targets": {
                    "browsers": "last 2 versions, > 2%"
                },
                "modules": false,
                "regenerator": true,
                "useBuiltIns": true
            }),
            require('babel-preset-react')
        ],
        "plugins": [
            require("babel-plugin-lodash"),
        ]
    }
}
