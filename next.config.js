const ContentSecurityPolicy = `
  default-src https:;
  object-src 'none';
  img-src 'self';
  script-src 'self';
  style-src 'self';
  font-src 'self';
  frame-ancestors 'none'
`

const securityHeaders = [
  {key: 'X-XSS-Protection', value: '1; mode=block'},
  {key: 'X-DNS-Prefetch-Control', value: 'on'},
  {key: 'X-Frame-Options', value: 'SAMEORIGIN'},
  {key: 'Referrer-Policy', value: 'no-referrer'},
//  {key: 'Content-Security-Policy', value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()},
  {key: 'X-Content-Type-Options', value: 'nosniff'}
]

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}
