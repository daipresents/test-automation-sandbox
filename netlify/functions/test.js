exports.handler = async (event, context) => {
  const sdk = require('api')('@mabldocs/v1.0#1wbh2zkr2mb6cs');
  
  console.log(process.env.COMMIT_REF)
  
  sdk.auth('key', process.env.MABL_API_KEY)
  sdk.post('/events/deployment', {
    plan_overrides: {
      http_headers: [{name: 'string', value: 'string', log_header_value: true}],
      actions: {rebaseline_images: true, set_static_baseline: true},
      plan_labels: ['string'],
      uri: 'string',
      credentials_id: 'string',
      credentials_required: true,
      http_auth_credentials_id: 'string',
      http_auth_credentials_required: true,
      revision: process.env.COMMIT_REF
    },
    environment_id: 'bIIfJiJ4lefJcKozgmNBPw-e',
    application_id: 'Kew3dKp0yhv4MDOPXGNu7w-a'
  })
    .then(res => console.log(res))
    .catch(err => console.error(err));
}
