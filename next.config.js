/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    async headers() {
        return [
            // To test if Fastly cache is cleared and the new data is instantly displayed.
            {
                source: '/',
                headers: [
                    {
                        key: 'Surrogate-Control',
                        value: 'max-age=31557600',
                    },
                    {
                        key: 'Cache-Control',
                        value: 'no-store, max-age=0',
                    },
                ],
            },
            // 1 hour cache in fastly and 5 minutes cache in browser.
            // To test that after Fastly clear the content is displayed after 5 minutes.
            {
                source: '/about',
                headers: [
                    {
                        key: 'Surrogate-Control',
                        value: 'max-age=3600',
                    },
                    {
                        key: 'Cache-Control',
                        value: 'max-age=300',
                    },
                ],
            },
            // No cache in Fastly but 5 minutes cache in browser.
            {
                source: '/article/:id',
                headers: [
                    {
                        key: 'Surrogate-Control',
                        value: 'no-store, max-age=0',
                    },
                    {
                        key: 'Cache-Control',
                        value: 'max-age=300',
                    },
                ],
            },
        ]
    },
}

module.exports = nextConfig