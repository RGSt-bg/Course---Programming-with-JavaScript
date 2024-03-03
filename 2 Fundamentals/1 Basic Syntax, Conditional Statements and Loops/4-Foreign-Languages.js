function foreignLanguages(country)
{
	let lang = "";
	switch(country)
	{
		case "England":
		case "USA":
			lang = "English";
			break;
		case "Spain":
		case "Argentina":
		case "Mexico":
			lang = "Spanish";
			break;
		default:
			lang = "unknown";
			break;
	}
	console.log(lang);
}

foreignLanguages("USA");