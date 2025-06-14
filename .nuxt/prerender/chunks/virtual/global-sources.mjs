const sources = [
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "@nuxt/content@v2:urls",
            "description": "Generated from your markdown files.",
            "tips": [
                "You can provide a `sitemap` key in your markdown frontmatter to configure specific URLs. Make sure you include a `loc`."
            ]
        },
        "fetch": "/__sitemap__/nuxt-content-urls.json",
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/404"
            },
            {
                "loc": "/"
            },
            {
                "loc": "/muzik"
            },
            {
                "loc": "/contact"
            },
            {
                "loc": "/gallery"
            },
            {
                "loc": "/projects"
            },
            {
                "loc": "/bookmarks"
            },
            {
                "loc": "/resources"
            },
            {
                "loc": "/blog"
            },
            {
                "loc": "/repositories"
            },
            {
                "loc": "/daily-songs"
            }
        ],
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:prerender",
            "description": "Generated at build time when prerendering.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:prerender'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/resources"
            },
            {
                "loc": "/404"
            },
            {
                "loc": "/contact"
            },
            {
                "loc": "/daily-songs"
            },
            {
                "loc": "/bookmarks"
            },
            {
                "loc": "/projects",
                "images": [
                    {
                        "loc": "/images/projects/ibidi.png"
                    },
                    {
                        "loc": "/images/projects/igu_telegram_bot.png"
                    },
                    {
                        "loc": "/images/projects/website.png"
                    }
                ]
            },
            {
                "loc": "/repositories"
            },
            {
                "loc": "/gallery",
                "images": [
                    {
                        "loc": "https://source.unsplash.com/random/400x400?nature,water"
                    },
                    {
                        "loc": "https://source.unsplash.com/random/400x400?city,night"
                    },
                    {
                        "loc": "https://source.unsplash.com/random/400x400?technology,abstract"
                    },
                    {
                        "loc": "https://source.unsplash.com/random/400x400?food,colorful"
                    }
                ]
            },
            {
                "loc": "/blog"
            },
            {
                "loc": "/muzik"
            },
            {
                "loc": "/",
                "images": [
                    {
                        "loc": "/images/experience/demirayak.png"
                    },
                    {
                        "loc": "/images/experience/hayatikodla.png"
                    },
                    {
                        "loc": "/images/experience/aksis.jpeg"
                    },
                    {
                        "loc": "/images/experience/asede.PNG"
                    },
                    {
                        "loc": "/images/experience/not-bilgi.png"
                    },
                    {
                        "loc": "/images/experience/oguzkaan.png"
                    },
                    {
                        "loc": "/images/education/gelisim.png"
                    },
                    {
                        "loc": "/images/education/anadolu.png"
                    },
                    {
                        "loc": "/images/education/istanbul.png"
                    }
                ]
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
