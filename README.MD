# OOP

Avancerad frontendutveckling och Typescript

# Om uppgiften

Denna uppgift prövar färdigheter hur objekt-orienterad programmering kan användas i Javascript.

# Del 1.

I del 1 ska du med en liten uppgift visa att du förstår grundsättet för objekt-orienterad programmering i Javascript på det prototypbaserade sättet
I del 2 ska de används det moderna sättet med klasser som kom i ES6 genom att skapa grundlogiken för ett enklare pokerspel

Vad du ska göra
Del 1 - En klass Color (prototypbaserad)
Gör en konstruktorfunktion för en färg, Color, som initieras med argumenten r, g och b (d.v.s varje värde tar in värdet 0-255).

Skapa metoder som konverterar mellan olika färgen genom att lägga till var och en av dessa på Colors "prototype". Dessa är:

rgb() - returnerar färgen "rgb(x,y,z)"
hex() - returnerar färgens hexkod "#XXYYZZ" - googla efter lämplig omvandling, rgb till hex
rgba() - användaren anger även alpha-värdet som argument och returnerar "rgba(x,y,z,a)
frivilligt med fler omvandlingar ex hsl(), etc
Testa genom att skapa en färg (Color) och anropa respektive metod, exempelvis genom att byta bakgrundsfärgen på en sida.

# Del 2. OOP Poker (ES6 klasser)

I denna del ska du använda E56 klasser för grundlogiken i ett pokerspel Gå till https://github.com/chasacademy-sandra-larsson/js--oop-pokerLinks to an external site. och följ instruktionerna.

Pokerspelet är endast tänkt att köras i konsolen, det är alltså frivilligt att bygga vidare med ett UI.
c
Skapa lämpliga klasser för Card, Player och Deck. Använd dig av ES6 Classes

- Del 1
  Skapa en datastruktur med en “normal/poker” kortlek med 52 kort, inga jokrar. Skriv ut kortleken i konsollen, varje kort ska innehålla sin färg, sitt namn och sitt värde (så att det går att räkna med korten). Blanda kortleken, skriv ut den blandade kortleken i konsollen.

- Del 2
  Skapa två spelare “Slim” och “Luke”, de ska kunna hålla varsin hand med kort. Skriv ut spelarna i konsollen. Dela ut 5 kort vardera till spelarna. Skriv ut kortleken (nu med 42 kort kvar) och spelarna (nu med 5 kort var) i konsollen. Skriv också ut spelarnas händers sammanlagda numeriska värde.

- Del 3
  Låt spelarna lägga slänga 2 kort var i en kasthög. Låt spelarna dra 2 nya kort var ur kortleken. Skriv ut kortleken (nu med 38 kort kvar) och spelarna (med 5 kort var) i konsollen. Skriv också ut spelarnas händers sammanlagda numeriska värde.

- Del 4
  Låt spelarna slänga alla sina kort i kasthögen. Flytta alla kort från kasthögen till kortleken. Nu ska spelarna och kasthögen ha 0 kort och kortleken ska ha 52 kort. Blanda kortleken igen och skriv ut den i konsollen.

VG - nivå
Steg 5 - 8. Skapa lämpliga klasser Dealer, Game etc

- Del 5
  Skapa en ny klass som heter Dealer som hanterar allt som har med kortleken att göra. Dealern ska bland annat kunna: …”äga” en instans av klassen Deck. …blanda kortleken …dela ut kort ifrån kortleken till spelarna. Låt delarn blanda kortleken och dela ut en varsin hand till de två spelarna “Slim” och “Luke” via dealern. Skriv ut spelarnas händer.

- Del 6
  Skapa en ny klass som hanterar valideringen av spelarnas händer. Klassen ska ha “statiska” metoder, alltså de anropas genom klassnamnet, inte genom en instans. Skapa en metod som tar in en lista med spelare och utvärdera deras händer utifrån kortens numeriska värde, och returnerar resultaten på ett snyggt sätt. Dela ut händer till de två spelarna och låt den nya klassen validera deras händer.

- Del 7
  Skapa en Game-klass som sköter hela pokerspelet. Det enda main ska gör är att skapa en instans av klassen Game och anropa dess metod startGame. Game-klassen ska ha en lista med spelare och en instans av Dealer. Kom ihåg att dealern äger instansen av Deck. Skapa en metod som heter addPlayers som uppmanar användaren att skriva in antalet spelare (minst två) och sen respektive namn på de spelarna. Utifrån det så ska så många instanser av klassen Player skapas och läggas in listan med spelare. Skapa metoden startGame och skriv in logik där ett par spelare skapas, de får varsin hand, korten valideras och skriv ut vinnaren på ett snygg sätt.

- Del 8
  Skapa en game-loop i startGame-metoden som kan hantera att man kör flera rundor. Spelare skapas, de får varsin hand. Man har en slängningsrunda, man får nya kort och sen valideras det och en vinnare utses. Det är en runda. Man kan utöka till fler rundor genom att öka antalet iterationer som loopen går. I varje runda ska de olika spelare kunna välja vilka kort de ska slänga. Alltså bör de få se sin hand varje runda, och en metod för att slänga ett kort på en specifik indexplats bör skapas i spelarens klass eller något liknande.

- Frivilligt
  Försök att skapa en mer verklig validering av korten. Par, tvåpar, triss och så vidare istället för kortens numeriska värden.
  Lägg till betting inför varje runda
  Skapa ett UI som följer ett MVC-mönster, d.v.s Model, View, Controller

# VG-krav

Även steg 5 - 8 i OOP Poker
VG-fråga:

Denna del behöver du bara göra om du satsar på VG.

I din readme-fil på github ska du ha med ett resonemang kring din kod. I denna ska du nyanserat resonera kring styrkor och brister i ditt genomförandet, alltså i den kod du utvecklat.

VG-nivån bedöms genom kvalitén på koden i kombination med din förmåga att se just styrkor och brister i den. Detta betyder att om din kod har allt för låg kvalité räcker det inte med resonemang kring det för att rädda upp, men det betyder också att ingen kod behöver vara helt perfekt men det är bra att du själv kan peka på de brister du då ser.

Din inlämning
En länk till ditt repository som ska vara publikt, innehållandes all kod + en README.me
