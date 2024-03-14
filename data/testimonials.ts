const testimonials = [
  "Hei❤️ Da var 4 uker over og jeg merker at kroppen og hode har det mye bedre. Det har vært en fantastisk og lærerik reise. Er veldig stolt over meg selv som har holdt meg unna fristelser som jeg før brukte å ta fram på kveldene foran tv. Har ikke hatt søtsug i det hele tatt. Blir til å fortsette denne reisen og føler jeg har fått en ny livsstilsendring. Tusen takk for at jeg fikk være med på laget og for alt det lærerike du har lært oss. Hadde ikke klart dette uten deg. Takk for alt❤️🥰",
  `Hei Mila️️️❤️❤️ <br />
  Først og fremst vil jeg bare si at dette har vært sikkelig gøy å være med på, og faktisk livsendrende❤️ <br /> Jeg har fått treningsgleden tilbake, har masse mer energi og føler meg bare rett og slett sikkelig bra på alle måter! Tusen takk for motivasjonen du har gitt meg, og at jeg har fått lære så mye❤️👏
  Jeg er stolt av resultatene, for jeg ser jo at det har skjedd mye mer enn jeg skulle tro for 1 mnd siden! Er nesten ikke til å kjenne igjen haha.! <br />
  Igjen, tusen takk❤️ Ønsker å fortsette!! Og gleder meg til trening i dag igjen
  Hvis jeg ønsker fortsette, men ikke gå så mye mer ned i vekt, kanskje bare et par kilo. Hvordan vil makronene mine se ut da? Skal jeg forsette med de samme? Skjønner at du ikke har mulighet til å svare på det kanskje.
  Uansett vil jeg bare igjen få understreket hvor bra dette har vært for meg engang
  <br /><br />
  Masse klemmer fra Helle
  tusen takk`,
  `Hei Mila❤️ <br />
  Vil vare si en siste gang tusen takk for dette opplegget!❤️ det har betydd mer en du tror. Jeg har kanskje ikke oppnådd alle målene jeg ville, men så tenkte jeg litt over det! Jeg har fått det bedre psykisk, bedre holdning, mer energi, og bedre tarmer! Så jeg tenkte at jeg har overhodet ikke noe å være misfornøyd med jeg er veldig motivert for å fortsette og gleder meg til å se nye resultater! Vil også bare takke deg for at du har vært så mye til hjelp! Du er en fantastisk person Mila og et godt menneske!❤️`,
  `Hei Mila,<br /><br />
  Her er siste mål og bilder fra meg. <br /><br />
  Jeg satte bildene ved siden av hverandre i et dokument for selv å kunne se resultatene bedre og OMG!!! - det var så mye mer forandringer enn jeg hadde trodd / følt! Jeg er så fornøyd! ❤️😊`,
  // `Vil bare si tusen takk for at jeg fikk sjansen til å være med, og for en fantastisk og trygg reise!! Har satt så pris på å kunne få lov å være en del av dette❤️ <br />
  // Du er virkelig gull verdt og så takknemlig for at du vil dele din erfaring og kunnskap med alle oss andre også. <br />
  // Jenter som heier på jenter er noe av det fineste ❤️`,
  // `Takk for heiarop og tusen takk, Mila - nå ble jeg virkelig glad! Skal forsøke stå stødig mot målet ❤️💪 Så takknemlig for at du vil gjøre dette for meg - du er så varm, raus og menneskelig, håper du tar vare på deg selv underveis og ikke tømmer deg helt i det flotte arbeidet du gjør og engasjementet ditt ❤️ Jeg skal passe på å sende underveis - og bildene står du selvfølgelig fritt til å bruke videre om du ønsker det 😊 <br /><br />
  // Spent på dagen! Vi høres uansett`,
  // `Å tusen takk, jeg fikk sjokk selv når jeg såg bildene, har latt være å se på første bildet mitt til vi var helt ferdige, og wow??? TAKK fine du, du hjelper veldig mange her og håper du fortsetter lenge lenge 🥺❤️`,
  // `Hei, <br /><br />
  // Tusen takk, Mila!❤️ Har vært en så lærerik og fin opplevelse så skal definitivt vedlikeholde dette. Og heller vurdere å lage en strammere plan om jeg ser det «<trengs>> etterhvert. <br /><br />
  // Det går fint å dele bildene😊 Har selv blitt superinspirert av å se andres resultater, så håper jeg kan inspirere andre også ❤️ <br /><br />
  // Masse ❤️❤️fra <br />Martine Holmberg`,
  // `Her kommer siste måling og bilder fra meg. <br /><br />
  // Tusen takk for alt du har lært meg,og at du tar deg tid til å lære bort❤️ Det har virkelig vært gull verdt. Du er virkelig et godt og sunt forbilde❤️ Forsett med det du gjør, og vit at det betyr masse for veldig mange❤️ <br /><br />
  // Stor klem fra Madelen 🥰`,
  // `Hei Mila! Vil starte med å takke deg for denne fine reisen. Jeg har lært masse av deg selv med mange år med pt. Jeg dro på sats idag, å første gang på veldig lenge følte jeg meg selvsikker og tilbake til meg selv etter fødsel. Å dette er bare starten!! Nå er fokus framover med å fortsette de gode rutinene, samt å bygge muskler. Jeg håper jeg får være med igjen på dine nye prosjekt. Tenk at jeg bare satt å så tv gvfb skulle senere føre til en strammere kropp og bedre psyke!? Wow. Tar av meg hatten for deg.
  // Jeg gleder med til å følge din reise også, å dine prosjekt! <br /><br />
  // Jeg tok bodyscan på sats før og etter maraton for jeg ville se hva som skjedde på innsiden også. Synes det ser bra ut jeg! Bare å bygge muskler nå! <br /><br />
  // Stor klem fra meg!`,
  // `Du er utrolig flink Mila, til å lage et opplegg vi kan følge, selv med full jobb, hus og hjem🥰 Her er det mat alle kan spise, og man slipper å tømme lommeboken for å lage maten eller bruke timesvis av tid på trening🤩 Jeg digger det!! <br /><br />
  // Tusen takk igjen for at du ordnet med denne plassen til meg, det satte jeg enormt stor pris på❤️❤️ <br /><br />
  // Lykke til med neste gruppe, de har mye å glede seg til!! <br /><br />
  // Klem fra Elin❤️`,
  // `Hei Mila 💕 <br /><br />
  // Vil bare starte med å si at du er en stor inspirasjon! Målingene mine er som nevnt vanskelig å følge grunnet graviditet, men har aldri hatt så fin hud som det jeg har nå. <br /><br />
  // Har tidligere slitt en del med akne og uren hud, det ble også noe forverret under graviditeten. Etter jeg har lagt om kostholdet under maraton merker jeg nå en stort forskjell på huden. Har per nå ikke en eneste kvise 🥺❤️ <br /><br />
  // Må også si at jeg elsker tøyeøvelsene!!`,
  // `Jeg har holdt med innenfor mine kcal og hatt god kontroll på tellingen🤩<br />
  // Jeg har logget alle måltider, det har gått helt greit🥰<br />
  // Jeg har det bra om dagen❤️ Syntes dette har vært helt knall så langt, og har endelig funnet noe som virker og fungerer for min kropp😅 Det har gått over all forventning, og
  // selvfølelsen er bra😍 Må bare få lov til å skryte av deg Mila, for et knallbra kurs du har laget, og det er noe man kan få til❤️ Her har jeg lært så mye om mat på to uker, og er så fornøyd med resultater og at jeg endelig klarer å få kroppen med på laget😅.`,
  // `Jeg har det veldig bra. Føler jeg endelig klaret å se hva jeg har gjort feil før i forhold til mat. At jeg har overspist myr før var jeg klar over, men nå innser jeg at jeg ikke trenger å spise så mye mat egentlig, bare jeg tar sunne valg som holder meg mett lengre. Synes appen har vært til veldig stor hjelp i forhold til å passe på inntaket av kalorier. Første uka var litt stress, men etterhvert gikk det automatisk å loggføre maten. <br />
  // Endelig har jeg begynt å føle meg komfortabel i tettsittende klær igjen. Og jeg er så glad får at jeg fikk mulighet til å være med på denne reisen og alt det jeg har lært så langt og kommer til å lære de neste to ukene🥰`,
  // `Jeg har lært så mye av å bli med på dette! Jeg tror jeg nå har nøkkelen til å klare dette selv fremover! Har testet masse før og gått ned men går alltid opp igjen fordi jeg bare følger en matplan og ikke regner ut noe selv 😩 nå skjønner jeg så mye mer av hvordan holde meg her uten å gå lei 😊`,
  // `God søndag 🍁 <br />
  // Håper du nyter dagen. Takk for tre fine uker. Det er vemodig å skulle starte på siste uka i morgen. Det har gått utrolig fort. Jeg har lært SÅ mye av deg 🤩 Du er dyktig og inspirerende! Jeg har allerede blitt klokere og en bedre versjon av meg selv. Dette vil jeg ta med meg videre og jeg føler jeg har funnet det som funker godt for både meg og familien min 🙌 Det er ikke her dag, men jeg føler i større og større grad at jeg tar bedre vare på meg selv også. Jeg har nådd målet mitt allerede 🌟 Alt som kommer i minus er en bonus. Takk, Mila  🫶`,
  // `Har også gjennomført trening før lunsj og det var skikkelig gøy 💪 Er en så herlig følelse etterpå 😍 Elsker dette opplegget ditt Mila ! Gir så mye motivasjon å ha en fast plan å forholde seg til . Og at vi er flere som jobber mot det samme 💕 <br /><br />`,
  // `Du er den beste!!! Eg ville aldri klare dette uten deg! ❤️ Eg er ekstremt takknemlig eg kan være med på denne reisen 🥰`,
  // `Helt enig! Hadde aldri klart dette uten denne gruppa 🥰 Er så motiverende at vi er flere som gjør dette sammen 👏😍 Da blir man forpliktet på en helt annen måte enn hvis man gjør det alene 😊 Håper alle får en super helg! 🌸`,
  // `Jeg er VELDIG fornøyd; og viktigst; jeg føler meg mye bedre og sterkere enn for 4 uker siden. Jeg er virkelig så takknemlig for at jeg fikk bli med ❤️ Og dette er bare starten, ja 🙏🤩`,
  // `Fy søren for en reise dette har vært! Jeg merker stor forskjell på meg selv, kommer til å fortsette og har fått en helt ny forståelse av mat og hvordan dette fungerer på kroppen. Har før ikke vært snill med kroppen min, denne uken har jeg vært i fyr å flamme og det merkes også på målet å tallene. Jeg har begynt med styretrening å det er digg.`,
  // `Takk for fantastiske 4 uker ❤️ Har funnet en viljestyrke i meg selv som jeg ikke visste jeg hadde . Både mentalt og fysisk. Noe som har gitt meg masse selvtillit. Jeg har også lært utrolig mye om mat, næringsinnhold og kcal. Jeg gleder meg til fortsettelsen, og gleder meg til å se forandringene nærmere jul 🥰`,
  // `Awwww, tusen takk skal du ha for fantastisk tilbake melding! Er sykt stolt av meg selv og å dette er gøy, å se så stor forandring på kort tid, skal virkelig stå på videre også! <br />
  // Takk for at jeg fikk bli med på reisen din å lykke til videre med ny gjeng jenter som skal begynne idag ❤️`,
  // `Hei Mila. <br />
  // Her er vi ferdig med siste veke. Ikkje noe stor Wow denne gangen, men fortsatt ganske bra vil eg tru😁
  // Tusen takk for fantastisk veiledning og hjelp. I disse 4 vekene har eg lært meg mykje om helse og kostholdet. Eg vil definitivt ikkje komme tilbake til dei gamle vaner,men skal fortsette med det eg har lært🥰.. <br />
  // Tusen takk for alt!`,
  // `Uansett, tusen takk for denne muligheten! <br />
  // Det har virkelig åpnet opp øyene mine for kosthold og trening. Dette er ikke slutten men begynnelsen for meg 😍Igjen, tusen takk! ❤️ <br /><br />
  // Benedikte`,
  // `Jeg er veldig fornøyd med fremgangen på disse 4 ukene. Fra å ha prøvd ulike måter å gå ned i vekt på, og å stramme opp kroppen, så har ditt kurs passet helt perfekt for meg og min kropp🥰 Ikke moe hokus pokus heller😅 <br /><br />
  // Jeg er veldig takknemlig for at jeg fikk plass på kurset ditt, og at jeg har lært hvordan jeg kan få orden på kroppen og få selvtillit og troen på at det lar seg gjøre tilbake. Du er så flink til å støtte og svare på spørsmål, og gruppechatten har vært motiverende og flott å ha som støtte og et sted for tips og gode råd😍🤩 <br /><br />
  // Trenger du noen gang referanse på kurset ditt, så stiller jeg opp🥰 <br /><br />
  // Håper du kommer med et oppfølgingskurs med nivå 2 på treningsøvelser, det hadde vært veldig nyttig🥰🤩 <br /><br />
  // Eller vil jeg si at jeg fortsetter på nye runder med trening og følger dette kurset så lenge jeg har tilgang🤗 <br /><br />
  // Stor klem fra Elin❤️`,
  // `Jeg er virkelig evig takknemlig for at jeg fikk ta del i dette. <br />
  // Det er uten tvil den BESTE investeringen jeg noensinne har gjort for meg selv. <br /><br />
  // Som sagt er reisen min langt fra over, men jeg er mer motivert enn noensinne for å fortsette. <br />
  // Du har gitt meg så mye mer enn du noen gang kan ane. <br /><br />
  // Du må gjerne dele bildene så lenge ikke ansiktet er med <br /><br />
  // TUSEN MILLIONER TAKK IGJEN FOR ALT`,
  // `Men du, du har vært upåklagelig 🙌 Vi har alle vært heldig med en så dyktig veileder som er vært PÅ hele veien. Fra morgen til kveld. Dette kler deg, det virker virkelig som om du har funnet din greie.
  // Dette anbefales på det sterkeste. <br />
  // Jeg kommer til å fortsette med dette mot jul og går for et smashing julebilde i år 💃🤭 <br /><br />
  // - Eirin`,
  // `Tusen takk for fine tilbakemeldinger❤️<br />
  // Ja ser stor forkjell på magen etter bare en uke😍<br />
  // Huden er så fin og hele kroppen føles lettere. <br />
  // Ingen behov for sjokolade, snacks eller brus lenger😄 Elsker dette! TAKK! <br /><br />
  // ❤️❤️`,
  // `Tusen takk for fine ord, Mila ❤️ <br />
  // Det her har gått over all forventning - og hele veien vært utrolig inspirerende! <br />
  // Stolt over meg selv som til nå ikke har sprukket på noe vis og klart å bruke appen aktivt hver dag. <br />
  // Takk for at du er du - du gjør en forskjell ❤️ <br /><br />
  // Ha en finfin kveld! <br />
  // Gleder meg til reisen videre <br />
  // Klem`,
  // `Tusen takk Mila ❤️ hadde ikke klart det uten deg og gjengen!❤️`,
  // `Jeg elsker at jeg har mye mer energi enn jeg har hatt tidligere, jeg føler meg fin og vell i kroppen min så jeg føler virkelig at dette marathonet har hjulpet meg ekstremt!! Jeg er 100% gira og skal prøve så godt jeg kan å komme i mål med all trening i løpet av kvelden <3`,
  // `Jeg synes treningen og kostholdet har gått veldig bra,Jeg og samboer har lagd mange av matrettene fra oppskriftene vi har fått og det smaker helt nydelig 😍 <br />
  // Jeg merker at huden min i ansiktet og kroppen er mykere og friskere, jeg er ikke oppblåst,våkner med magen flatere og holder seg sånn utover dagen. Jeg har ikke drukket noe alkohol på over 2 uker nå og det merkes veldig på kroppen også, jeg har mer energi og føler meg rett og slett bedre med kroppen og meg selv❤`,
  // `Ble litt sent svar herfra også! Takk for så utfyllende svar og oppriktig oppfølging - beundringsverdig hvor engasjert du er ❤️ Jaa, denne energien er fantastisk å kjenne på og motivasjon i seg selv.. samboeren sier også han opplever stor endring på flere hold 🥺 Lenge siden jeg har kjent på kontakt med egen kropp.. men nå er jeg på rett kurs og føler meg mer vel enn på lenge. Så ja, økt livsglede og velvære - det har du fått til, jeg kunne ikke vært din kunnskap og støtte foruten ❤️`,
];

export default testimonials;
