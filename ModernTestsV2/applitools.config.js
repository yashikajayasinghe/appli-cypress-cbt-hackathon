module.exports = {
    concurrency: 10,
    apiKey: 'APPLITOOLS_API_KEY',
    browser: [
        // Add browsers with different viewports
        {width: 1200, height: 700, name: 'chrome'},
        {width: 1200, height: 700, name: 'firefox'},
        {width: 1200, height: 700, name: 'edgechromium'},
        {width: 768, height: 700, name: 'chrome'},
        {width: 768, height: 700, name: 'firefox'},
        {width: 768, height: 700, name: 'edgechromium'},
        {deviceName:"iPhone X", screenOrientation:"portrait"}
    ],        
    // set batch name to the configuration
    batchName: 'UFG Hackathon'
   
}