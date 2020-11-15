# Strona Samorządu XLII LO Kraków
Witam w repozytorium. Miłego dnia życzę.

# Dodawanie nowych postów
Aby dodać nowy post, należy wykonać poniższe czynności:

1. Plik w formacie Markdown należy przenieść do folderu `./content/blog/(odpowiednia kategoria)`. Wymagane jest, by nazwa pliku była unikalna oraz kończyła się `.md`.

1. Wszelkie obrazy, do których odwołuje się wcześniej przeniesiony plik, należy przenieść do folderu `./public/img/blog/(odpowiednia kategoria)`. Następnie edytuj wcześniej przeniesiony plik Markdown i zmień wszystkie ścieżki obrazów na `/img/blog/(odpowiednia kategoria)/(nazwa i rozszerzenie pliku)`.

1. Zamieść miniaturę artykułu w folderze `./public/img/blog/thumbnails`.

1. Znaleźć plik `data.json`, znajduje się on w folderze: `./content`. Jeśli plik nie istnieje, należy skopiować plik `data.json.example` i zmienić jego nazwę na `data.json`. **Nie ma potrzeby usuwać pliku `data.json.example`.** W pliku `data.json` należy wypełnić danymi odpowiednie pola:
	```json
	{
		"title": "",
		"author": "",
		"authorAvatar": "",
		"thumbnail": "",
		"filename": "",
		"tags": []
	}
	```
	- Pole `title` musi zawierać tytuł artykułu.
	- Pole `author` musi zawierać autora artykułu.
	- Pole `authorAvatar` musi zawierać nazwę pliku z awatarem autora. Plik ten należy umieścić w folderze `./public/blog/authors`. Nazwa musi zawierać rozszerzenie.
	- Pole `thumbnail` musi zawierać nazwę pliku zawierający miniaturę posta. Nazwa musi zawierać rozszerzenie.
	- Pole `filename` musi zawierać nazwę pliku markdown bez rozszerzenia.
	- Pole `tags` powinno zawierać wszystkie tagi związane z postem. Nie powinny one zawierać białych znaków i być ciągiem liter lub cyfr.

	**Przykład:**
	```json
	{
		"title": "Tytuł posta",
		"author": "Autor posta",
		"authorAvatar": "avatar.jpg",
		"thumbnail": "thumbnail.jpg",
		"filename": "post",
		"tags": ["poezja", "miłość", "partner", "partnerka"]
	}
	```
	Wartości między znakami `{}` muszą zostać oddzielone przecinkami.

	**Uwaga! Plik nie powinien zawierać żadnych pustych pól. Przykład poprawnego pliku:**
	```json
	{
		"articles": [
			{
				"title": "Tytuł artykułu",
				"author": "Autor artykułu",
				"authorAvatar": "avatar1.jpg",
				"thumbnail": "thumbnail1.jpg",
				"filename": "artykul1",
				"tags": ["miłość", "partner", "partnerka"]
			},
			{
				"title": "Tytuł artykułu2",
				"author": "Autor artykułu2",
				"authorAvatar": "avatar3.jpg",
				"thumbnail": "thumbnail3.jpg",
				"filename": "artykul2",
				"tags": ["życia", "piękny", "cud"]
			}
		],
		"interviews": [

		],
		"felietons": [

		],
		"reviews": [
			{
				"title": "Tytuł recenzji",
				"author": "Autor recenzji",
				"authorAvatar": "avatar2.png",
				"thumbnail": "thumbnail2.png",
				"filename": "recenzja1",
				"tags": ["Semper", "In", "Altum"]
			}
		],
		"stories": [

		],
		"reportages": [

		],
		"poetry": [

		]
	}
	```

	**Przykład niepoprawnego pliku:**
	```json
	{
		"articles": [
			{
				"title": "Tytuł artykułu",
				"author": "Autor artykułu",
				"authorAvatar": "avatar1.jpg",
				"thumbnail": "thumbnail1.jpg",
				"filename": "artykul1",
				"tags": ["miłość", "partner", "partnerka"]
			}
		],
		"interviews": [
			{ // Tutaj brakuje pewnych pól
				"title": "",
				"author": "",
				"authorAvatar": "",
				"tags": []
			}
		],
		// Tutaj brakuje wartości dla "felietons"
		"reviews": [
			{
				"title": "Tytuł recenzji",
				"author": "Autor recenzji",
				"authorAvatar": "avatar2.png",
				"thumbnail": "thumbnail2.png",
				"filename": "recenzja1",
				"tags": ["Semper", "In", "Altum"]
			}
		],
		"stories": [

		],
		"reportages": [

		],
		"poetry": [
			{ // Niewypełnione pola
				"title": "",
				"author": "",
				"authorAvatar": "",
				"thumbnail": "",
				"filename": "",
				"tags": []
			}
		]
	}
	```
1. Gotowe! Aby zmiany weszły w życie, wymagany jest *redeployment* strony.