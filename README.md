# stopikowo-api

## Instalacja lokalnie

### Wymagane środowisko
+ **Node**
+ **MongoDB**
+ **Yarn**
+ Opcjonalnie także **npm** (narzędzie równoległe do yarn)

### Zalecane dodatkowe oprogramowanie
+ Postman
+ Robo T3
+ Wtyczki do Visual Studio (luźne sugestie):
	* Colonize
	* ES Lint
	* GitLens
	* MongoDB for VS Code
	* ToDo Tree
	* Bracket Pair Color
	* Material Icon Theme

### Konfiguracja zmiennych środowiskowych
Należy utworzyć w głównym folderze plik `.env`  
Analogiczne pliki na potrzeby budowania można opcjonalnie utworzyć:  
Lokalnie z alternatywnymi ustawieniami: `development.env`  
Staging: `staging.env`  
Production: `production.env`  

```
  JWT_SECRET=[Losowy ciąg znaków]
  MONGO_CONNECTION=mongodb://localhost:27017
  MONGO_DATABASE=[Nazwa bazy danych]
```

### Uruchomienie projektu
`$ yarn install`<br />
`$ yarn start`

Aplikacja zostanie uruchomiona na pocie 5000: `localhost:5000`

## Zasady pracy z repozytorium

### Główne gałęzie

#### Development
Domyślny branch na potrzeby bieżącej pracy. Pull Requesty wymagają co najmniej jednej akceptacji po Code Review i poprawnego przejścia akcji `main.yml`, tj:  
+ Testy: `yarn test`
+ Eslint: `yarn lint`
+ Build produkcyjny: `yarn build:prod`

#### Staging
Branch dedykowany testom, na który po zakończeniu kolejnych etapów pracy będziemy przenosić kod z developmentu.  
Push na ten branch powoduje wywołanie akcji deployowania na staging. Aplikacja zostanie automatycznie wystawiona pod adresem:  
`stopikowo-staging.nero12.usermd.net`

#### Master
Finalny branch gdzie znajduje się docelowa aplikacja.
Push wystawi aplikację na:  
`stopikowo-production.nero12.usermd.net`

### Konwencja nazewnicza i proces pracy

Praca nad zadaniem:
1. Przejście na development: `git checkout development`
2. Pobranie aktualnej wersji: `git pull`
3. Utworzenie własnej gałęzi `git checkout -b nazwa_gałęzi`

Nazwa gałęzi: `[feature/fix/hotfix]/nazwa_zadania_w_trello`
Przykładowo nowe zadanie o numerze `Task-1` nazwiemy: `feature/Task-1`

Przed pushowaniem gałęzi należy puścić lokalnie i ewentualnie wprowadzić korekty do kodu:
+ `yarn lint` - sprawdzanie poprawności składni
+ `yarn test` - testy

Po skończonej pracy tworzymy na GitHubie Pull Request do `development`. 
Osoba pracująca nad zadaniem jest odpowiedzialna za pilnowanie aby zostało przeprowadzone na nim Code Review.
Po poprawnym przejściu Pipeline z m.in. testami gałąź może zostać scalona.

## Zasady pracy z Trello

Statusy zadań:
+ **Nazwa** - opis, *Osoba odpowiedzialna za przenoszenie*
+ **Backlog** - oczekujące do wybrania *Każdy może utworzyć bug, nowe zadania Ryczek lub Kuszi*
+ **Selected for development** - *Ryczek lub Kuszi*
+ **In progress** - w trakcie pracy, *autor*
+ **In review** - w trakcie code review, *autor*
+ **Testing** - zadanie wylądowało na gałęzi `staging`, *Kuszi*
+ **Rejected** - zadanie nie przeszło testów, *Tester*
+ **Approved** - zadanie przeszło testy, *Tester*
+ **Ready** - zadanie znalazło się na produkcji, *Kuszi*
