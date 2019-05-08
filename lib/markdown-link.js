function getLinksFromMd(myText) {
	return getLinks(myText);
}

function getLinks(myText) {
	const matches = [];
	const myRegex = RegExp(/\[(.*?)\]\((.*?)\)/g);
	let result = "";
	while (result = myRegex.exec(myText)) {
		matches.push({
			href: result[2],
			title: result[1]
		});
	}
	return matches;
}

module.exports = getLinksFromMd;