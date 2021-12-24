// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    //const subject = event.queryStringParameters.name || 'World'

    let response
    try {
      response = await fetch('https://api.mabl.com/events/deployment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.MABL_API_KEY,
        },
        body: JSON.stringify({ environment_id:bIIfJiJ4lefJcKozgmNBPw-e, application_id: Kew3dKp0yhv4MDOPXGNu7w-a})
      })
    } catch (err) {
      return {
        statusCode: err.statusCode || 500,
        body: JSON.stringify({
          error: err.message
        })
    }

    return {

      statusCode: 200,
      //body: JSON.stringify({ message: `Hello ${subject}` }),
      body: JSON.stringify({ message: `Called Deployment Event API.` }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
