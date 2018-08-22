import React from 'react'
import { withRouteData, Link } from 'react-static'
import Image from './inc/Image'
import Brand from './inc/Brand'

export default withRouteData(({ product }) => {
  return (
    <div>
      <Link to="/products/">{'<'} Back</Link>
      <br />
      {product.image ? product.image.map(({ fields: image }) => (
        <Image key={image.file.fileName} src={image.file.url} image={image}/>
      )) : null}
      <h3>{product.productName}</h3>
      <p>{product.productDescription}</p>
      <Brand brand={product.brand} />
    </div>
  )
})

// Object reference:
const objectRef = {
  productName: 'Hudson Wall Cup',
  slug: 'hudson-wall-cup',
  productDescription: 'Wall Hanging Glass Flower Vase and Terrarium',
  sizetypecolor: '3 x 3 x 5 inches; 5.3 ounces',
  image: [
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'nela1jpzogio'
          }
        },
        id: 'Xc0ny7GWsMEMCeASWO2um',
        type: 'Asset',
        createdAt: '2018-08-21T08:35:20.905Z',
        updatedAt: '2018-08-21T08:35:20.905Z',
        environment: {
          sys: {
            id: 'master',
            type: 'Link',
            linkType: 'Environment'
          }
        },
        revision: 1,
        locale: 'en-US'
      },
      fields: {
        title: 'Hudson Wall Cup ',
        description: 'Merchandise image',
        file: {
          url: '//images.ctfassets.net/nela1jpzogio/Xc0ny7GWsMEMCeASWO2um/51b9ce17172afadc4a002a94d9239f19/jqvtazcyfwseah9fmysz.jpg',
          details: {
            size: 48751,
            image: {
              width: 600,
              height: 600
            }
          },
          fileName: 'jqvtazcyfwseah9fmysz.jpg',
          contentType: 'image/jpeg'
        }
      }
    }
  ],
  tags: [
    'vase',
    'flowers',
    'accessories'
  ],
  categories: [
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'nela1jpzogio'
          }
        },
        id: '7LAnCobuuWYSqks6wAwY2a',
        type: 'Entry',
        createdAt: '2018-08-21T08:35:19.677Z',
        updatedAt: '2018-08-21T08:35:19.677Z',
        environment: {
          sys: {
            id: 'master',
            type: 'Link',
            linkType: 'Environment'
          }
        },
        revision: 1,
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: '6XwpTaSiiI2Ak2Ww0oi6qa'
          }
        },
        locale: 'en-US'
      },
      fields: {
        title: 'Home & Kitchen',
        icon: {
          sys: {
            space: {
              sys: {
                type: 'Link',
                linkType: 'Space',
                id: 'nela1jpzogio'
              }
            },
            id: '6m5AJ9vMPKc8OUoQeoCS4o',
            type: 'Asset',
            createdAt: '2018-08-21T08:35:21.612Z',
            updatedAt: '2018-08-21T08:35:21.612Z',
            environment: {
              sys: {
                id: 'master',
                type: 'Link',
                linkType: 'Environment'
              }
            },
            revision: 1,
            locale: 'en-US'
          },
          fields: {
            title: 'Home and Kitchen',
            description: 'category icon',
            file: {
              url: '//images.ctfassets.net/nela1jpzogio/6m5AJ9vMPKc8OUoQeoCS4o/ba9699f1a4bb958d65b46bae299769e1/1418244847_Streamline-18-256.png',
              details: {
                size: 2977,
                image: {
                  width: 256,
                  height: 256
                }
              },
              fileName: '1418244847_Streamline-18-256.png',
              contentType: 'image/png'
            }
          }
        },
        categoryDescription: 'Shop for furniture, bedding, bath, vacuums, kitchen products, and more'
      }
    }
  ],
  price: 11,
  brand: {
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'nela1jpzogio'
        }
      },
      id: '651CQ8rLoIYCeY6G0QG22q',
      type: 'Entry',
      createdAt: '2018-08-21T08:35:19.649Z',
      updatedAt: '2018-08-21T08:35:19.649Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment'
        }
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'sFzTZbSuM8coEwygeUYes'
        }
      },
      locale: 'en-US'
    },
    fields: {
      companyName: 'Normann Copenhagen',
      logo: {
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'nela1jpzogio'
            }
          },
          id: '3wtvPBbBjiMKqKKga8I2Cu',
          type: 'Asset',
          createdAt: '2018-08-21T08:35:21.630Z',
          updatedAt: '2018-08-21T08:35:21.630Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment'
            }
          },
          revision: 1,
          locale: 'en-US'
        },
        fields: {
          title: 'Normann Copenhagen',
          description: 'Brand logo',
          file: {
            url: '//images.ctfassets.net/nela1jpzogio/3wtvPBbBjiMKqKKga8I2Cu/d48452e73363969785c4bdffece0452a/zJYzDlGk.jpeg',
            details: {
              size: 12302,
              image: {
                width: 353,
                height: 353
              }
            },
            fileName: 'zJYzDlGk.jpeg',
            contentType: 'image/jpeg'
          }
        }
      },
      companyDescription: 'Normann Copenhagen is a way of living - a mindset. We love to challenge the conventional design rules. This is why you will find traditional materials put into untraditional use such as a Stone Hook made of Icelandic stones, a vase made out of silicon and last but not least a dog made out of plastic.',
      website: 'http://www.normann-copenhagen.com/',
      twitter: 'https://twitter.com/NormannCPH',
      email: 'normann@normann-copenhagen.com',
      phone: [
        '+45 35 55 44 59'
      ]
    }
  },
  quantity: 101,
  sku: 'B00E82D7I8',
  website: 'http://www.amazon.com/dp/B00E82D7I8/'
}

