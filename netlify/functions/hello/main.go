package main

import (
	"fmt"
	"strings"
	"net/http"
	"io/ioutil"
)

func handler(request events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {

	url := "https://api.mabl.com/events/deployment"

	payload := strings.NewReader("{\"plan_overrides\":{\"http_headers\":[{\"name\":\"Content-Type\",\"value\":\"application/json\",\"log_header_value\":true}],\"actions\":{\"rebaseline_images\":true,\"set_static_baseline\":true},\"properties\":{\"repository_url\":\"git@github.com:daipresents/test-automation-sandbox.git\"},\"uri\":\"https://create-top-page--test-automation-sandbox.netlify.app/\",\"credentials_required\":false,\"http_auth_credentials_required\":false,\"revision\":\"6da4dde\"},\"environment_id\":\"bIIfJiJ4lefJcKozgmNBPw-e\",\"application_id\":\"Kew3dKp0yhv4MDOPXGNu7w-a\"}")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("Accept", "application/json")
	req.Header.Add("Content-Type", "application/json")
	req.Header.Add("Authorization", "Basic a2V5OkhGWlMzdTZSaTNjbE13cjRUSDh3M3c=")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

	return &events.APIGatewayProxyResponse{
		StatusCode:        200,
		Headers:           map[string]string{"Content-Type": "text/plain"},
		Body:              "Called Development Event API.",
	}, nil
}

func main() {
	lambda.Start(handler)
}
