const ContentSecurityPolicy =`
  default-src 'self' https://vitals.vercel-insights.com/v1/vitals https://www.google.com *.christianwegman.com;
  base-uri 'none';
  form-action 'self';
  object-src 'none';
  img-src 'self' www.gstatic.com/recaptcha;
  style-src 'self' 'unsafe-inline' *.christianwegman.com;
  script-src 'self'
    https://www.recaptcha.net
    https://recaptcha.net
    https://www.gstatic.com/recaptcha/
    https://www.gstatic.cn/recaptcha/
    https://www.google.com/recaptcha/;
  font-src 'self'
    *.recaptcha.net
    recaptcha.net
    https://www.google.com/recaptcha/
    https://recaptcha.google.com;
  frame-ancestors 'none';
  prefetch-src https://christianwegman.com/;
  worker-src www.recaptcha.net;
`

const securityHeaders = [
  {key: 'X-XSS-Protection', value: '1; mode=block'},
  {key: 'X-DNS-Prefetch-Control', value: 'on'},
  {key: 'X-Frame-Options', value: 'SAMEORIGIN'},
  {key: 'Referrer-Policy', value: 'no-referrer'},
  {key: 'Content-Security-Policy', value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()},
  {key: 'X-Content-Type-Options', value: 'nosniff'},
  {key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload'}
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
