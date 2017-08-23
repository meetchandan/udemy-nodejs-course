console.log("Starting")

setTimeout(()=> {
 	console.log("timeout 2 secs");
}, 2000)

setTimeout(()=> {
 	console.log("timeout 0 secs");
}, 0)

console.log("Finished")
