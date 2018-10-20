function ConfigureTranslate ($translateProvider) {
    $translateProvider
        .useStaticFilesLoader({
            prefix: 'locale-',
            suffix: '.json'
        })
        .useLocalStorage()
        .useSanitizeValueStrategy('escape')
        .preferredLanguage('en')
        .fallbackLanguage('en');
}