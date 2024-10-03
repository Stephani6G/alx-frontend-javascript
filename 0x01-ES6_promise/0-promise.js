function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        const success = true;

        if (success) {
            resolve("Response received from API!");
	} else {
            reject(new Error("API not currently working"));
        }
    });
}
