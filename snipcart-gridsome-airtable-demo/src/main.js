import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { head, router, isServer }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css'
  });

  head.script.push({
    type: 'text/javascript',
    src: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js',
    body: true,
  });

  head.script.push({
    type: 'text/javascript',
    src: 'https://cdn.snipcart.com/scripts/2.0/snipcart.js',
    body: true,

    // snipcart scripts' attributes
    id: 'snipcart',
    'data-api-key': 'MzMxN2Y0ODMtOWNhMy00YzUzLWFiNTYtZjMwZTRkZDcxYzM4',
  });

  head.titleTemplate = "%s – Snipcart's Furniture Store";
}
