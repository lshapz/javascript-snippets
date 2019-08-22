(function reFuse(){
	var bar = document.location.href.split('/')
	var foo = bar[6].split('.')
	bar[5] = foo[1]
	bar[6] = foo[1] + "." + foo[0] + "." + foo[2]
	document.location.href = bar.join('/')
})()

// switches the pokemon numbers of a given PokeFusion so you can see what the other combo might look like 
// example input url https://images.alexonsager.net/pokemon/fused/1/1.5.png
// example output url https://images.alexonsager.net/pokemon/fused/5/5.1.png