package main

import (
    "fmt"
    "os"
    "github.com/lukakerr/hkn"
)

func _main() int {
	username := os.Getenv("INPUT_HN_USERNAME")
	password := os.Getenv("INPUT_HN_PASSWORD")
	title := os.Getenv("INPUT_POST_TITLE")
	url := os.Getenv("INPUT_POST_URL")

	if (len(username) == 0 || len(password) == 0) {
		fmt.Println("No supplied credentials. Provide `username` & `password`");
		return 1
	}

	if (len(title) == 0 || len(url) == 0) {
		fmt.Println("No supplied post. Provide `title` & `url` to post");
		return 1
	}

	client := hkn.NewClient()
	cookie, err := client.Login(username, password)

	if (err != nil) {
		fmt.Println(err)
		return 1
	}

	created, err := client.CreateStoryWithURL(title, url, cookie)

	if (err != nil) {
		fmt.Println(err)
		return 1
	} else if (created == false) {
		fmt.Println("Unknown error posting to HN")
		return 1
	}

	fmt.Println("Successfully submitted to HN")

	return 0
}

func main() {
	os.Exit(_main())
}
