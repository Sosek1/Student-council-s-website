# Strona Samorządu XLII LO Kraków
Witam w repozytorium. Miłego dnia życzę.

# Ogólne postanowienia
 - Wspominany w ciągu tego dokumentu Dysk Google należy do konta `radiowezel42lo@gmail.com`.
 - Zapis typu `curl -L "(TU WKLEJ DIRECT-LINK)" > (TU WPISZ NAZWĘ I ROZSZERZENIE PLIKU)` jest równoznaczny z wpisaniem (dla direct-linku https://drive.google.com/uc?export=download&id=110etj4D2dNtVgC6X_h6SZusfav-zdORa i nazwy i rozszerzenia pliku `data.json`): `curl -L "https://drive.google.com/uc?export=download&id=110etj4D2dNtVgC6X_h6SZusfav-zdORa" > data.json`.
 - Aby połączyć się z serwerem, należy za każdym razem wygenerować nowe hasło. Należy to zrobić przez zalogowanie się do https://cp.homecloud.pl, wejście do zakładki VPS i wejście w **AKCJE -> ZMIEŃ HASŁO**.
 - Aby zalogować się na serwer, należy w terminal wpisać `ssh root@strona-samorzadu.su42lo.pl` i wprowadzić polecenie. Następnie należy wpisać hasło (litery nie pokażą się w trakcie wpisywania).
 - Aby zmienić aktualny katalog, należy użyć komendy `cd (ŚCIEŻKA DO FOLDERU)`.
 - Aby wypisać zawartość aktualnego folderu, należy użyć komendy `ls`.
 - Aby zobaczyć zawartość danego pliku, należy użyć komendy `cat (NAZWA I ROZSZERZENIE PLIKU)`.
 - Aby zakończyć połączenie z serwerem, należy użyć komendy `logout`.
# Wstawianie awatarów
Aby wstawić awatar na stronę należy:
1. Zalogować się na Dysk Google.
1. Zmienić folder na `/Images/Blog/Authors`.
1. Do folderu przesłać plik zawierający awatar. Należy go nazwać w sposób `imię_nazwisko.rozszerzenie`.
1. Skopiować link do udostępniania.
1. Wygenerować *direct-link* do awataru, na przykład używając [tego narzędzia](https://www.wonderplugin.com/online-tools/google-drive-direct-link-generator/).
1. Przechować wygenerowany link w schowku.
1. Połączyć się z serwerem przy użyciu SSH (hasło należy wygenerować z panelu administratora).
1. Zmienić folder na `~/website/public/img/blog/avatars`.
1. W terminal wpisać polecenie `curl -L "(TU WKLEJ DIRECT-LINK)" > "(TU WPISZ NAZWĘ I ROZSZERZENIE PLIKU)"`. Nazwa pliku powinna odpowiadać nazwie wpisanej na Dysku Google.
1. Wprowadzić polecenie do terminala.
# Dodawanie postów
## Dodawanie zdjęć zawartych w poście
Aby dodać zdjęcia zawarte w poście, należy:
1. Zalogować się na Dysk Google.
1. Zmienić folder na `/Images/Blog/(ODPOWIEDNIA KATEGORIA)`.
1. Do folderu przesłać zdjęcia, które mają zawrzeć się w poście. Ich nazwa nie ma większego znaczenia, ważne żeby nie występowała kolizja nazw.
1. Połączyć się z serwerem przy użyciu SSH i zmienić folder na `~/website/public/img/blog/(ODPOWIEDNIA KATEGORIA)`.
1. Do każdego przesłanego powyżej zdjęcia wykonać powyższe czynności:
	1. Skopiować link do udostępniania.
	1. Wygenerować *direct-link* do zdjęcia, na przykład używając [tego narzędzia](https://www.wonderplugin.com/online-tools/google-drive-direct-link-generator/).
	1. W terminal wpisać polecenie `curl -L "(TU WKLEJ DIRECT-LINK)" > "(TU WPISZ NAZWĘ I ROZSZERZENIE PLIKU)"`. Nazwa pliku powinna odpowiadać nazwie wpisanej na Dysku Google.
	1. Wprowadzić polecenie do terminala.
## Dodawanie miniatury posta
Aby dodać miniaturę posta, należy:
1. Zalogować się na Dysk Google.
1. Zmienić folder na `/Images/Blog/Thumbnails`.
1. Do folderu przesłać plik zawierający miniaturę. Rekomendowana nazwa to trzy pierwsze słowa tytułu, lecz w przypadku wystąpienia kolizji liczbę wyrazów można zwiększyć. Należy unikać białych znaków tj. spacji.
1. Skopiować link do udostępniania.
1. Wygenerować *direct-link* do zdjęcia, na przykład używając [tego narzędzia](https://www.wonderplugin.com/online-tools/google-drive-direct-link-generator/).
1. Przechować wygenerowany link w schowku.
1. Połączyć się z serwerem przy użyciu SSH (hasło należy wygenerować z panelu administratora).
1. Zmienić folder na `~/website/public/img/blog/thumbnails`.
1. W terminal wpisać polecenie `curl -L "(TU WKLEJ DIRECT-LINK)" > "(TU WPISZ NAZWĘ I ROZSZERZENIE PLIKU)"`. Nazwa pliku powinna odpowiadać nazwie wpisanej na Dysku Google.
1. Wprowadzić polecenie do terminala.
## Dodawanie zawartości posta
Aby dodać zawartość posta, należy:
1. Zalogować się na Dysk Google.
1. Zmienić folder na `/Content/Blog/(ODPOWIEDNIA KATEGORIA)`.
1. Przesłać plik Markdown z rozszerzeniem `.md`. Rekomendowana nazwa to trzy pierwsze słowa tytułu, lecz w przypadku wystąpienia kolizji liczbę wyrazów można zwiększyć. Należy unikać białych znaków tj. spacji.
1. Jeśli zawartość pliku zawiera odwołania do plików zawierających zdjęcia, należy otworzyć plik w edytorze tekstu, dla przykładu sugerowany przez Google *Text Editor*. W nim należy edytować ścieżki zdjęć na ścieżki do plików w formie `(ODPOWIEDNIA KATEGORIA)/(NAZWA I ROZSZERZENIE PLIKU ZAWIERAJĄCEGO ZDJĘCIE)`. Przykład: `articles/RickAstley.jpg`.
1. Skopiować link do udostępniania.
1. Wygenerować *direct-link* do zawartości, na przykład używając [tego narzędzia](https://www.wonderplugin.com/online-tools/google-drive-direct-link-generator/).
1. Przechować wygenerowany link w schowku.
1. Połączyć się z serwerem przy użyciu SSH (hasło należy wygenerować z panelu administratora).
1. Zmienić folder na `~/website/content/blog/(ODPOWIEDNIA KATEGORIA)`.
1. W terminal wpisać polecenie `curl -L "(TU WKLEJ DIRECT-LINK)" > (TU WPISZ NAZWĘ I ROZSZERZENIE PLIKU)`. Nazwa pliku powinna odpowiadać nazwie wpisanej na Dysku Google.
1. Wprowadzić polecenie do terminala.
## Edycja pliku `blog.json`
Aby wprowadzony post pojawił się na stronie, należy:
1. Zalogować się na Dysk Google.
1. Zmienić folder na `/Content`.
1. Otworzyć plik `blog.json` w edytorze tekstu, dla przykładu sugerowany przez Google *Text Editor*.
1. Wprowadzić odpowiednie zmiany:
	1. Skopiować poniższy tekst:
		```json
		{
			"title": "",
			"authors": [
				{
					"name": "",
					"avatar": ""
				}
			],
			"thumbnail": "",
			"filename": ""
		}
		```
	1. Wkleić skopiowany tekst na koniec tablicy o odpowiednim kluczu. Jeśli wystąpiły wcześniejsze rekordy, należy oddzielić nowo wklejony obiekt przecinkiem.
	1. Uzupełnić odpowiednio pola obiektu. Przykłady poprawnie wypełnionych obiektów:
		```json
		{
			"title": "Tytuł posta",
			"authors": [
				{
					"name": "Autor posta",
					"avatar": "autor_posta.jpg"
				}
			],
			"thumbnail": "tytul_posta.jpg",
			"filename": "tytul_posta"
		}
		```
		Każde pole musi być uzupełnione poprawnie, tzn:
		- Pole `title` musi być ciągiem znaków.
		- Pole `authors` musi być arrayem obiektów, które zawierają pola:
			- `name` - autor posta.
			- `avatar` -  nazwa i rozszerzenie pliku zawierającego awatar autora.
		- Pole `thumbnail` musi być ciągiem znaków zawierającym nazwę i rozszerzenie pliku zawierającego miniaturę artykułu.
		- Pole `filename` musi być ciągiem znaków zawierającym **tylko nazwę** pliku `.md` zawierającego treść posta.

		Niepoprawne ustawienie danych w pliku będzie skutkowało niemożliwością otworzenia jednego lub w najgorszym przypadku każdego posta.
1. Po uzupełnieniu pliku należy zapisać go przy użyciu przycisku **Save to Drive**, znajdującego się na górze ekranu.
1. Skopiować link do udostępniania.
1. Wygenerować *direct-link* do pliku, na przykład używając [tego narzędzia](https://www.wonderplugin.com/online-tools/google-drive-direct-link-generator/).
1. Przechować wygenerowany link w schowku.
1. Połączyć się z serwerem przy użyciu SSH i zmienić folder na `~/website/content`.
1. W terminal wpisać polecenie `curl -L "(TU WKLEJ DIRECT-LINK)" > blog.json`.
1. Wprowadzić polecenie do terminala.
1. W terminal wpisać polecenie `pm2 restart index`. Może to spowodwać chwilowy brak dostępu do strony. W ciągu kilku minut wszystko powinno wrócić do normy.
# Wprowadzenie zmian w oprogramowaniu
Aby wprowadzić zmiany w plikach strony, należy wykonać *commit* i *push* do repozytorium, w którym znajduje się strona. Następnie należy przy użyciu SSH połączyć się z serwerem i zmienić ścieżkę na `~/website`. Potem w terminal należy wpisać polecenie `git pull` i wprowadzić je w terminal. Po zakończeniu wykonywania polecenia, należy wpisać i wprowadzić polecenie `pm2 restart index`.

# Autorzy:
- Sosek1 (Frontend i design)
[GitHub](https://github.com/Sosek1)
- RCRalph (Backend, frontend i deployment)
[GitHub](https://github.com/RCRalph)
