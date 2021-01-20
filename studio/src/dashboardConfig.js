export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6008b571e5c7e71ad7f6c545',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-m8tjm7ek',
                  apiId: '7ab84f18-b016-4302-aa23-e92c651f7ba1'
                },
                {
                  buildHookId: '6008b571e98a5b239fe1138b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-yqfis9gj',
                  apiId: '8d20ddbc-7a3b-459b-8a4e-d3d957667c19'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nikolaimorck/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-yqfis9gj.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
