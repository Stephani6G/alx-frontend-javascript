function getRepsonseFromAPI(){
	return new Promise ((resolve, reject) => {
		if (success){ resolve("Response received from API!"});
		reject(Error("API not currently working"));
	});

