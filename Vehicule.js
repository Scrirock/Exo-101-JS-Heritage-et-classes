class Vehicule{
    constructor(couleur, roue, marque) {
        this.couleur = couleur;
        this.roue = roue;
        this.marque = marque;
    }

    demarrer(){
        console.log("Le véhicule démarre");
    }

    arreter(){
        console.log("Le véhicule s'arrete");
    }
}