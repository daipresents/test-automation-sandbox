package main

import (
	"fmt"
	base64 "encoding/base64"
	"os"
	"strings"
	"net/http"
	"io/ioutil"
)

func main() {
	fmt.Println("====")
	fmt.Println(os.Getenv("NETLIFY_COMMIT_REF"))
	fmt.Println(os.Getenv("NETLIFY_BUILD_ID"))
	fmt.Println("====")

	auth := "key:" + os.Getenv("MABL_API_KEY")
  token := base64.StdEncoding.EncodeToString([]byte(auth))

	url := "https://api.mabl.com/events/deployment"

	payload := strings.NewReader("{\"plan_overrides\":{\"http_headers\":[{\"name\":\"Content-Type\",\"value\":\"application/json\",\"log_header_value\":true}],\"actions\":{\"rebaseline_images\":true,\"set_static_baseline\":true},\"properties\":{\"repository_url\":\"git@github.com:daipresents/test-automation-sandbox.git\"},\"uri\":\"https://create-top-page--test-automation-sandbox.netlify.app/\",\"credentials_required\":false,\"http_auth_credentials_required\":false,\"revision\":\"6da4dde\"},\"environment_id\":\"bIIfJiJ4lefJcKozgmNBPw-e\",\"application_id\":\"Kew3dKp0yhv4MDOPXGNu7w-a\"}")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("Accept", "application/json")
	req.Header.Add("Content-Type", "application/json")
	req.Header.Add("Authorization", "Basic " + token)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
