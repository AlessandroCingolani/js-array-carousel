# Carosello Mono Array

Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

1. Creo markup con contenitori e file css per vedere aread di lavoro come si comportano elementi.
2. Inizio a lavorare su JS prima di tutto svuotando elementi nel DOM , poi li genero automanticamente con JS 
3. Creo array con le immagini dentro
4. Genero con un loop elementi da aggiungere con hide tutti tranne la prima immagine
5. Creo un contatore per avanzamento dell indice array
6. Creo listnerEvent per i bottoni su e giù per cambiare da un immagine all altra
7. Al click cambio l immagine corrente con un hide e quella dell' indice successivo remove hide
8. Creo un array con getElementsByClassName
per poi togliere a indice [0]  il primo hide
9. ad ogni click aggiungo all attuale elemento l hide aumento il counter e tolgo hide all indice corrispondente al counter
10. con un if di controllo imposto che quando sono all indice [0] e clicclo up arrow passa all ultimo indice con lenght -1, invece se sono all ultimo indice il counter diventa 0 portando all indice iniziale
