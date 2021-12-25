package main

import (
	"fmt"
	"log"
	"os"
	"os/exec"
)

func main() {
	err := os.Chdir("./../../../../")
	if err != nil {
		log.Fatal(err)
	}

	python()

	f1, err := os.OpenFile(".babelrc", os.O_WRONLY|os.O_CREATE, 0666)
	if err != nil {
		log.Fatal(err)
	}
	defer f1.Close()
	fmt.Fprintln(f1, "{\n  \"presets\": [\"php\"]\n}")

	node()

	err = os.Remove(".babelrc")
	if err != nil {
		log.Fatal(err)
	}
}

func python() {

	err := exec.Command("python3", "src/libs/Makyo/Python/index.py").Run()
	if err != nil {
		log.Fatal(err)
	}
}

func node() {
	nodeError := exec.Command("npx", "babel", "src/libs/Makyo/PHP/Code.php", "-o", "src/libs/Makyo/JavaScript/compiled.js").Run()
	if nodeError != nil {
		log.Fatal(nodeError)
	}

	f, err := os.OpenFile("src/libs/Makyo/JavaScript/compiled.js", os.O_WRONLY|os.O_APPEND, 0666)
	if err != nil {
		log.Fatal(err)
	}
	defer f.Close()
	fmt.Fprintln(f, "module.exports.goodEngineer = goodEngineer;")
}