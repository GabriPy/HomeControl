function stufaOn(){
	fetch("https://www.virtualsmarthome.xyz/url_routine_trigger/activate.php?trigger=25326321-2d51-49ad-b705-1c3309df170c&token=209a0916-3f21-4c8a-b2c1-e455f40a26af&response=html", { mode: 'no-cors'}),
	console.log("luceOn eseguito")
}

function stufaOff(){
	fetch("https://www.virtualsmarthome.xyz/url_routine_trigger/activate.php?trigger=c74ef037-74dd-4c83-a93f-a7ee1d17662c&token=82876a9f-08cd-40ba-a6f2-3104617a4396&response=html", { mode: 'no-cors'}),
	console.log("luceOff eseguito")
}