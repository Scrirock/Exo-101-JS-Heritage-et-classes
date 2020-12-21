class velo extends Vehicule{
    constructor(couleur, roue, marque, rayonRoue, typePeinture) {
        super(couleur, roue, marque);
        this.rayonRoue = rayonRoue;
        this.typePeinture = typePeinture;
    }

    monter (){
        console.log("je monte sur le velo")
    }
}
