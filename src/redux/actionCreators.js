export setImgSize = (imgSize) => {
	return {
		type: 'imgSize/set',
		imgSize
	}
}

export setCanvas = (canvas) => {
	return {
		type: 'canvas/set',
		canvas
	}
}

export setContextStyle = (fillColor, lineWidth, strokeColor) => {
	return {
		type: 'contextStyle/set',
		fillColor,
		lineWidth,
		strokeColor
	}
}