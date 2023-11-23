function luceOn(){
	fetch("https://www.virtualsmarthome.xyz/url_routine_trigger/activate.php?trigger=a5e33adf-e70d-4c08-8e79-78a6aa7a81a5&token=997ee3be-79d9-4772-86d1-979ebe70beae&response=html", { mode: 'no-cors'}),
	console.log("luceOn eseguito")
}

function luceOff(){
	fetch("https://www.virtualsmarthome.xyz/url_routine_trigger/activate.php?trigger=1d41f322-8b21-41d6-aac7-ce273fe3fb08&token=adf9348f-9b7b-457b-9156-04679650a64c&response=html", { mode: 'no-cors'}),
	console.log("luceOff eseguito")
}