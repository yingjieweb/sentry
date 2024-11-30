module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/sunshine/'
        : '/',
    css: {
        loaderOptions: {
            sass: {
                // @ -> /src
                prependData: `
                    @import "@/styles/reset.scss";
                    @import "@/styles/helper.scss";
                `
            }
        }
    }
}
