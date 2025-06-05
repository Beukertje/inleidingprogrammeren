// --- Constanten ---


//Buttons om de rallylichten aan te passen
const rallyLightButtonVerder = document.querySelector('#rallylightsverder')
const rallyLightButtonTerug = document.querySelector('#rallylightsterug')

//Buttons om de kleur van het dak aan te passen
const kleurDakButtonVerder = document.querySelector('#kleurdakverder')
const kleurDakButtonTerug = document.querySelector('#kleurdakterug')


//Buttons om de velgen aan te passen
const velgenButtonVerder = document.querySelector('#velgenverder')
const velgenButtonTerug = document.querySelector('#velgenterug')


//Buttons om de bodykit aan te passen
const bodykitButtonVerder = document.querySelector('#bodykitverder')
const bodykitButtonTerug = document.querySelector('#bodykitterug')


//Buttons om de spoiler aan te passen
const spoilerButtonVerder = document.querySelector('#spoilerverder')
const spoilerButtonTerug = document.querySelector('#spoilerterug')


//Buttons om de kleur van de auto aan te passen
const kleurButtonVerder = document.querySelector('#kleurverder')
const kleurButtonTerug = document.querySelector('#kleurterug')


//Buttons om de upgrade en uitlaat aan te passen
const upgradeButtonVerder = document.querySelector('#upgradeverder')
const upgradeButtonTerug = document.querySelector('#upgradeterug')


//Buttons om de achtergrond aan te passen
const achtergrondButtonVerder = document.querySelector('#achtergrondverder')
const achtergrondButtonTerug = document.querySelector('#achtergrondterug')

const randomButton = document.querySelector('#random')


//Geluidseffecten

const backgroundAudio = new Audio('sfx/background.mp3')
const cachingAudio = new Audio('sfx/caching.mp3')
const kleurAudio = new Audio('sfx/kleur.mp3')
const krikAudio = new Audio('sfx/krik.mp3')
const wheelgunAudio = new Audio('sfx/wheelgun.mp3')



// --- Variabelen ---



//Variabelen voor de rallylichten
let rallyLights = document.querySelector('#rallylights')
let rallyLightsTekstVak = document.querySelector('#rallylightstekst')
let rallyLightsStatus = false


//Variabelen voor de kleur van het dak
let kleurDak = document.querySelector('#dakkleur')
let kleurDakTekstVak = document.querySelector('#kleurdaktekst')
let kleurDakStatus = false


//Variabelen voor de velgen

/*Foto's zijn bewerkt met Photoshop
Bron van de foto's:

Standaard: https://s3.wheelsage.org/picture/m/mini/cooper_s/mini_cooper_s_626.jpeg
Rota RB: https://www.rotawheels.com/product/rb-x/
Enkei RPF1: https://enkei.com/shop/wheels/racing/rpf1/
Oz Racing Leggenda: https://carwheels.nl/product/oz-leggenda-race-white/
Oz Racing Superturismo: https://www.ozracing.com/nl/velgen/oz-racing/sport/Superturismo%20Evoluzione%20WRC

*/

let velg = document.querySelector('#velgen')
let velgenTekstVak = document.querySelector('#velgentekst')
let velgenNamen = ['standaardcrop.png', 'rotarb.png', 'enkeirpf1.png', 'ozleggenda.png', 'ozsuperturismo.png']
let velgenTekst = ['Standaard', 'Rota RB', 'Enkei RPF1', 'OZ Racing Leggenda', 'Oz Racing Superturismo']
let velgenNummer = 0


//Variabelen voor de bodykit
let bodyKit = document.querySelector('#bumpers')
let bodyKitTekstVak = document.querySelector('#bodykittekst')
let bodyKitNamen = ['standaardbumpers.png', 'lipkitbumpers.png', 'jcwaerobumpers.png', 'gpkitbumpers.png']
let bodyKitTekst = ['Standaard', 'Lip Kit', 'JCW Aero Kit', 'JCW GP Kit']
let bodyKitNummer = 0


//Variabelen voor de spoiler
let spoiler = document.querySelector('#spoiler')
let spoilerTekstVak = document.querySelector('#spoilertekst')
let spoilerNamen = ['stockspoiler.png', 'geenspoiler.png', 'airtecspoiler.png']
let spoilerTekst = ['Standaard', 'Verwijderen', 'Airtec']
let spoilerNummer = 0


//Variabelen voor de kleur van de auto
let kleur = document.querySelector('#bodykleur')
let kleurTekstVak = document.querySelector('#kleurtekst')
let kleurNamen = ['grijs.png', 'zwart.png', 'wit.png', 'blauw.png', 'rood.png', 'geel.png']
let kleurTekst = ['Grijs', 'Zwart', 'Wit', 'Blauw', 'Rood', 'Geel']
let kleurNummer = 0


//Variabelen voor de upgrade en uitlaat

/*Bron van de MP3 bestanden:

Standaard uitlaat: https://youtu.be/tbh22Kz12QQ?si=U5weYRcBVFAtNYeL
Sport uitlaat: https://youtube.com/shorts/9oa5Tsn4RJI?si=q471BC0JXXBWr0Kf
Milltek uitlaat: https://youtu.be/_I41uVGaJ1U?si=np_lyDpNPEFPTvU9

*/

let upgrade = document.querySelector('#uitlaat')
let upgradeTekstVak = document.querySelector('#upgradetekst')
let upgradeNamen = ['stockuitlaat.png', 'sportuitlaat.png', 'milltekuitlaat.png']
let upgradeTekst = ['Standaard', 'Simmons + Intercooler', 'Milltek + 15% pulley']
let upgradeAudioNaam = ['standaarduitlaat.mp3', 'sportuitlaat.mp3', 'milltekuitlaat.mp3']
let upgradeNummer = 0 


//Variabelen voor de achtergrond

/*De achtergronden die ik gebruikt heb komen van de flash game Create-A-Ride door Erik Wolter.
http://createaride.com/
Ze zijn bewerkt met Adobe Photoshop generative AI om beter te passen binnen mijn site*/

let achtergrond = document.querySelector('#achtergrond')
let achtergrondTekstVak = document.querySelector('#achtergrondtekst')
let achtergrondNamen = ['garage.png', 'buitenparking.png', 'Dragstrip.png']
let achtergrondTekst = ['Garage', 'Parkeren aan strand', 'Dragstrip']
let achtergrondNummer = 0



// --- Functies ---



//Funtie die de rallylichten verandert (boolean)
function rallyLichtenVeranderen(){

    if (rallyLightsStatus){

        rallyLights.src = 'images/geenrallylights.png'
        rallyLightsTekstVak.textContent = 'Geen Rallylichten'
        rallyLightsStatus = false

    } 
    else {

        rallyLights.src = 'images/rallylights.png'
        rallyLightsTekstVak.textContent = 'Rallylichten'
        rallyLightsStatus = true

    }
        
    krikAudio.play()
  
}


//Funtie die de kleur van het dak verandert (boolean)
function kleurDakVeranderen(){

    if (kleurDakStatus){

        kleurDak.src = 'images/witdak.png'
        kleurDakTekstVak.textContent = 'Wit'
        kleurDakStatus = false

    } 
    else {

        kleurDak.src = 'images/zwartdak.png'
        kleurDakTekstVak.textContent = 'Zwart'
        kleurDakStatus = true

    }

    
    krikAudio.play()
    
}


//Funtie die de velgen verandert (array)
function velgenVeranderen(stap){

    velgenNummer = velgenNummer + 1

    if(velgenNummer > velgenNamen.length-1){
        velgenNummer = 0
    }

    else if(velgenNummer < 0){
        velgenNummer = velgenNamen.length-1
    }

    velg.src = 'images/' + velgenNamen[velgenNummer]

    velgenTekstVak.textContent = velgenTekst[velgenNummer]

    wheelgunAudio.play()
    
}



//Funtie die de bodykit verandert (array)
function bodyKitVeranderen(stap){

    bodyKitNummer = bodyKitNummer + stap

    if(bodyKitNummer > bodyKitNamen.length-1){
        bodyKitNummer = 0
    }

    else if(bodyKitNummer < 0){
        bodyKitNummer = bodyKitNamen.length-1
    }

    bodyKit.src = 'images/' + bodyKitNamen[bodyKitNummer]

    bodyKitTekstVak.textContent = bodyKitTekst[bodyKitNummer]  

    cachingAudio.play()

}



//Funtie die de spoiler verandert (array)
function spoilerVeranderen(stap){

    spoilerNummer = spoilerNummer + stap

    if(spoilerNummer > spoilerNamen.length-1){
        spoilerNummer = 0
    }

    else if(spoilerNummer < 0){
        spoilerNummer = spoilerNamen.length-1
    }

    spoiler.src = 'images/' + spoilerNamen[spoilerNummer]

    spoilerTekstVak.textContent = spoilerTekst[spoilerNummer]

    krikAudio.play()
    
}



//Funtie die de kleur verandert (array)
function kleurVeranderen(stap){

    kleurNummer = kleurNummer + stap

    if(kleurNummer > kleurNamen.length-1){
        kleurNummer = 0
    }

    else if(kleurNummer < 0){
        kleurNummer = kleurNamen.length-1
    }

    kleur.src = 'images/' + kleurNamen[kleurNummer]

    kleurTekstVak.textContent = kleurTekst[kleurNummer]

    kleurAudio.play()

}



//Funtie die de achtergrond verandert (array)
function achtergrondVeranderen(stap){

    achtergrondNummer = achtergrondNummer + stap

    if(achtergrondNummer > achtergrondNamen.length-1){
        achtergrondNummer = 0
    }

    else if(achtergrondNummer < 0){
        achtergrondNummer = achtergrondNamen.length-1
    }

    achtergrond.src = 'images/' + achtergrondNamen[achtergrondNummer]

    achtergrondTekstVak.textContent = achtergrondTekst[achtergrondNummer]

    backgroundAudio.play()

}


//Funtie die de upgrade en uitlaat verandert (array)

function upgradeVeranderen(stap){

    upgradeNummer = upgradeNummer + stap

    if(upgradeNummer < 0){
        upgradeNummer = upgradeNamen.length-1
    }
    else if(upgradeNummer > upgradeNamen.length-1){
        upgradeNummer = 0
    }

   /*Audio is gemaakt met een combinatie van code van Anne van Mill, 
   in combinatie met een aanpassing van ChatGPT om hem in mijn code te laten werken
   De gebruikte prompt:
   "Ik wil meerdere audiobestanden selecteren als ik door een array van namen van de mp3 bestanden scroll, hoe zou ik dan de code moeten neerzetten?"*/
   
    /*Audio is gemaakt van samples van het spel Create-a-Ride door Erik Wolter, en zijn bewerkt in Adobe Audition*/
    upgrade.src = 'images/' + upgradeNamen[upgradeNummer]

    upgradeTekstVak.textContent = upgradeTekst[upgradeNummer]

    let audio = new Audio('sfx/' + upgradeAudioNaam[upgradeNummer])

    audio.play()

}



//Functie om een random mini te genereren
function randomMini(){

    let randomVelgen = Math.ceil(Math.random()*velgenNamen.length-1)
    let randomBodyKit = Math.ceil(Math.random()*bodyKitNamen.length-1)
    let randomSpoiler = Math.ceil(Math.random()*spoilerNamen.length-1)
    let randomKleur = Math.ceil(Math.random()*kleurNamen.length-1)
    let randomAchtergrond = Math.ceil(Math.random()*achtergrondNamen.length-1)
    let randomUpgrade = Math.ceil(Math.random()*upgradeNamen.length-1)


    velgen.src = 'images/' + velgenNamen[randomVelgen]
    bodyKit.src = 'images/' + bodyKitNamen[randomBodyKit]
    spoiler.src = 'images/' + spoilerNamen[randomSpoiler]
    kleur.src = 'images/' + kleurNamen[randomKleur]
    achtergrond.src = 'images/' + achtergrondNamen[randomAchtergrond]
    upgrade.src = 'images/' + upgradeNamen[randomUpgrade]

    
    velgenTekstVak.textContent = velgenTekst[randomVelgen]
    bodyKitTekstVak.textContent = bodyKitTekst[randomBodyKit]
    spoilerTekstVak.textContent = spoilerTekst[randomSpoiler]
    kleurTekstVak.textContent = kleurTekst[randomKleur]
    achtergrondTekstVak.textContent = achtergrondTekst[randomAchtergrond]
    upgradeTekstVak.textContent = upgradeTekst[randomUpgrade]
    

}



// --- Event listeners ---



//koppeling van de constanten aan de functies koppelt

rallyLightButtonVerder.addEventListener('click', rallyLichtenVeranderen)
rallyLightButtonTerug.addEventListener('click', rallyLichtenVeranderen)


kleurDakButtonVerder.addEventListener('click', kleurDakVeranderen)
kleurDakButtonTerug.addEventListener('click', kleurDakVeranderen)


velgenButtonVerder.addEventListener('click', () => {velgenVeranderen(1)})
velgenButtonTerug.addEventListener('click', () => {velgenVeranderen(-1)})


bodykitButtonVerder.addEventListener('click', () => {bodyKitVeranderen(1)})
bodykitButtonTerug.addEventListener('click', () => {bodyKitVeranderen(-1)})

spoilerButtonVerder.addEventListener('click', () => {spoilerVeranderen(1)})
spoilerButtonTerug.addEventListener('click', () => {spoilerVeranderen(-1)})


kleurButtonVerder.addEventListener('click', () => {kleurVeranderen(1)})
kleurButtonTerug.addEventListener('click', () => {kleurVeranderen(-1)})


upgradeButtonVerder.addEventListener('click', () => {upgradeVeranderen(1)})
upgradeButtonTerug.addEventListener('click', () => {upgradeVeranderen(-1)})


achtergrondButtonVerder.addEventListener('click', () => {achtergrondVeranderen(1)})
achtergrondButtonTerug.addEventListener('click', () => {achtergrondVeranderen(-1)})

randomButton.addEventListener('click', randomMini)