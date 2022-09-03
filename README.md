# Js-Summer-Cucumber-2022

npx wdio wdio.conf.js --cucumberOpts.tagExpression='@tagName'

run testcases which are having sanity-tag or imp-tag

    npx wdio wdio.conf.js --cucumberOpts.tagExpression='@sanity or @imp'

run testcases which are having sanity-tag and @hotels-2-tag

    npx wdio wdio.conf.js --cucumberOpts.tagExpression='@sanity and @hotels-2'

run testcases which are nbot having sanity tag

    npx wdio wdio.conf.js --cucumberOpts.tagExpression='not @sanity'