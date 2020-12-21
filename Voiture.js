class Voiture extends Vehicule {
    constructor(couleur, roue, marque, assurance, proprietaire){
        super(couleur, roue, marque);
        this.assurance = assurance;
        this.proprietaire = proprietaire;
    }

    passerAuCarWash () {
        console.log("la voiture passe au carWash")
    }
}

let truc = new Voiture("rouge", 4, "Ford", true, "Matthias");
console.log(truc.roue);
truc.passerAuCarWash();