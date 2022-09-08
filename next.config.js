let ContentSecurityPolicy;
if (process.env.NODE_ENV === 'production') {
  ContentSecurityPolicy =`
    default-src 'self' https://vitals.vercel-insights.com/v1/vitals https://www.google.com *.christianwegman.com;
    base-uri 'none';
    form-action 'self';
    object-src 'none';
    img-src 'self' https://placeimg.com/400/225/arch www.gstatic.com/recaptcha data: w3.org/svg/2000;
    style-src 'self' 'unsafe-inline' https://christianwegman.com https://www.christianwegman.com;
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
    prefetch-src https://christianwegman.com/ https://www.christianwegman.com;
    worker-src www.recaptcha.net;
  `
} else {
  ContentSecurityPolicy =`
    default-src 'self' ws://localhost:3000/_next/webpack-hmr https://vitals.vercel-insights.com/v1/vitals https://www.google.com *.christianwegman.com;
    base-uri 'none';
    form-action 'self';
    object-src 'none';
    img-src 'self' https://images.unsplash.com https://placeimg.com/400/225/arch www.gstatic.com/recaptcha data: w3.org/svg/2000;
    style-src 'self' 'unsafe-inline' https://christianwegman.com https://www.christianwegman.com;
    script-src 'self'
      https://www.recaptcha.net
      https://recaptcha.net
      https://www.gstatic.com/recaptcha/
      https://www.gstatic.cn/recaptcha/
      https://www.google.com/recaptcha/
      'unsafe-eval'
      'unsafe-inline';
    font-src 'self'
      *.recaptcha.net
      recaptcha.net
      https://www.google.com/recaptcha/
      https://recaptcha.google.com;
    frame-ancestors 'none';
    prefetch-src https://christianwegman.com/ https://www.christianwegman.com;
    worker-src www.recaptcha.net;
  `
}

const securityHeaders = [
  {key: 'X-XSS-Protection', value: '1; mode=block'},
  {key: 'X-Robots-Tag', value: 'noindex, nofollow'},
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
