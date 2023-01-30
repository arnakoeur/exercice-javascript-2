/*
--- OBJET AVION ---

--- Propriétés ---
model:          Le modèle de l'avion
passengers:     le nombre de passagers
altitude:       l'altitude, en mètres
speed:          la vitesse, en km/h
fuel:           le carburant, en litres

--- Méthodes ---
addPassengers(number):      ajouter des passagers (argument: nombre de passagers à ajouter)
removePassengers(number):   enlever des passagers (argument: nombre de passagers à enlever)
addFuel(liters):            ajouter du carburant (argument: nombre de litres à ajouter)
increaseSpeed(kmh):         augmenter la vitesse (argument: km/h à accélérer)
decreaseSpeed(kmh):         réduire la vitesse (argument: km/h à ralentir)
stop():                     arrêter l'avion (pas d'argument)
increaseAltitude(meters):   augmenter l'altitude (argument: mètres à monter)
decreaseAltitude(meters):   réduire l'altitude (argument: mètres à descendre)

--- Événements ---
takeoff:                    l'avion a décollé (l'avion décolle lorsque sa vitesse dépasse 200km/h)
landing:                    l'avion a atterri (l'avion atterri lorsque sa vitesse est inférieure à 200km/h)
fuelused:                   du carburant a été utilisé (du carburant est utilisé lorsque l'avion a une vitesse supérieure à 0km/h)
nofuel:                     il ne reste plus de carburant
crash:                      l'avion s'est écrasé (l'avion s'écrase lorsqu'il vole et qu'il n'a plus de carburant)
*/

var plane = document.querySelector('.plane');
