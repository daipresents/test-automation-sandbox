exports.handler = async function(event, context) {
  console.log(process.env.BRANCH)
  console.log(process.env.COMMIT_REF)
  console.log(process.env.BUILD_ID)
  
  return {
      statusCode: 200,
      body: JSON.stringify({message: "Hello World"})
  };
}