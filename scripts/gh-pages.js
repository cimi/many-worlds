var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/many-worlds',
    {
        branch: 'gh-pages',
        repo: 'git@github.com:cimi/many-worlds.git',
        user: {
            name: 'Alex Ciminian',
            email: 'alex.ciminian@gmail.com'
        },
        history: false,
        message: "Auto-generated commit - deploy static site"
    },
    () => {
        console.log('Deploy Complete!')
    }
)
