exports.handler = async (event, context) => {
  const sdk = require('api')('@mabldocs/v1.0#1wbh2zkr2mb6cs');

  sdk.auth('key', 'HFZS3u6Ri3clMwr4TH8w3w')
  sdk.post('/events/deployment', {
    plan_overrides: {
      http_headers: [{name: 'Content-Type', value: 'application/json', log_header_value: true}],
      actions: {rebaseline_images: true, set_static_baseline: true},
      properties: {repository_url: 'git@github.com:daipresents/test-automation-sandbox.git'},
      uri: 'https://create-top-page--test-automation-sandbox.netlify.app/',
      credentials_required: false,
      http_auth_credentials_required: false,
      revision: '6da4dde'
    },
    environment_id: 'bIIfJiJ4lefJcKozgmNBPw-e',
    application_id: 'Kew3dKp0yhv4MDOPXGNu7w-a'
  })
    .then(res => console.log(res))
    .catch(err => console.error(err));
}
