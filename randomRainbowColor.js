		var randomColor = () => {
			let colorsArray = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violets']
			let index = Math.floor(Math.random() * (colorsArray.length - 1))
			return colorsArray[index]
		}
