// Though this file is optional, there are SO MANY COOL THINGS you can do here.
// Read the docs at https://github.com/nozzle/react-static/blob/master/README.md to learn more!
export default {
  siteRoot: 'https://agitated-kare-512d04.netlify.com',
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/Components/Home/Home.js'
      },
      {
        path: '/about',
        component: 'src/Components/About/About.js'
      },
      {
        path: '/blog',
        component: 'src/Components/Blog/Blog.js'
      },
      {
        path: '/adjustable',
        component: 'src/Components/Adjustable/Adjustable.js',
      },
      {
        path: '/accessories',
        component: 'src/Components/Accessories/Accessories.js'
      },
      {
        path: '/brands',
        component: 'src/Components/Brands/Brands.js'
      },
      {
        path: '/financing',
        component: 'src/Components/Financing/Financing.js'
      },
      {
        is404: true,
        component: 'src/Components/Panda404/Panda404.js'
      }
    ]
  }
}
