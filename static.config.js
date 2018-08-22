import _ from './env'

import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'
import { createClient } from 'contentful'

const config = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
}
const ctfClient = createClient(config)

export default {
  siteRoot: 'https://hungry-franklin-89e766.netlify.com/',
  getSiteData: () => ({
    title: 'Netlify Test',
  }),
  getRoutes: async () => {
    const { items: products } = await ctfClient.getEntries({
      content_type: '2PqfXUJwE8qSYKuM0U6w8M',
    })

    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/products',
        component: 'src/containers/Products',
        getData: () => ({
          products,
        }),
        children: products.map(({ fields: product }) => ({
          path: `/${product.slug}`,
          component: 'src/containers/Product',
          getData: () => ({
            product,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render () {
      const {
        Html, Head, Body, children, renderMeta,
      } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
