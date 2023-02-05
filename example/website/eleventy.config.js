//
// Eleventy site configuration
//


Error.stackTraceLimit = 999;


module.exports = (eleventyConfig) => {

    // Watch .yml files!
    eleventyConfig.addDataExtension(
        "yml, yaml", (contents) => ({ IDidntConfigure11tyToLoadYamlFiles: true })
    );

    eleventyConfig.addWatchTarget( '../data/' );

    // building the zoo is pretty consequential, even incrementally, so don't
    // react right away but wait for a couple seconds first
    eleventyConfig.setWatchThrottleWaitTime(2000); // in milliseconds

    eleventyConfig.addLayoutAlias('base_page', 'base_page.njk');

    eleventyConfig.setTemplateFormats(['html','md','njk','11ty.js']);


    return {
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",

        dir: {
            input: 'src',
            output: '_site',

            includes: '../templates',
            layouts: '../templates/layout',
            data: '../site_data',
        },

        jsDataFileSuffix: '.11tydata',
    };
};




