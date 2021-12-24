exports.handler = async (event, context) => {
  let response
  try {
    response = await fetch('https://api.mabl.com/events/deployment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.MABL_API_KEY,
      },
      body: JSON.stringify({ environment_id:bIIfJiJ4lefJcKozgmNBPw-e, application_id: Kew3dKp0yhv4MDOPXGNu7w-a })
    })
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message
      })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: response
    })
  }
}
