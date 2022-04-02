const ContentSecurityPolicy =`
  default-src 'none';
  base-uri 'none';
  form-action 'self';
  object-src 'none';
  img-src 'self' www.gstatic.com/recaptcha;
  style-src 'self'
    'sha256-GHgVb5EEAUPhVeTfwEFuX9+WADcCrePlK6CwdXznIhY='
    'sha256-xd6kVmsB5qDY47QB4x7Ys+1t88OSTa40q/98d9NyF8Q='
    'sha256-8BNxsIsc6VHj8/elC63fqbrGsnTOvhNTf17uhaIdUI4=',
    'sha256-d72pVhmRTNXT2Gr2OHFRLnVaHBfiBI5EvDCF6tA924Y=';
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
