import { Injectable } from "@angular/core";
import { BaseRouteReuseStrategy } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class DetailCategory {
    constructor(){ }
    ProductDetail=[
        {
            id_col:1,
            type:'computer hardware',
            nom:'Chemise',
            marque:'COS',
            couleur:'Blanc',
            taille:"XL,  Tour de Col 17.5",
            prix:'30 DT',
            imgurl:"../../assets/man/chemise_homme_blanc.jpg"
        },
        {
            id_col:2,
            type:'education',
            nom:'chemise',
            marque:'FIGARET',
            couleur:'Noir',
            taille:"M, Tour de col: 16",
            prix:'30 DT',
            imgurl:"../../assets/man/chemise_homme_noire.jpg"
        },
        {
            id_col:3,
            type:'home appliance',
                nom:'Veste ',
                marque:'BUZZ RICKSON',
                couleur:'Bleu',
                taille:"XS, Tour de poitrine en cm: 76",
                prix:'70 DT',
                imgurl:"../../assets/man/veste_homme_jean.jpg"
        },
        {
            id_col:4,
                type:'children clothes',
                nom:'Pantalon Jean',
                marque:'ROGUE TERRITORY',
                couleur:'Noir',
                taille:"XS UK/US : 27 68cm",
                prix:'60 DT',
                imgurl:"../../assets/man/jean_homme_noire.jpg"
        },
        {
            id_col:5,
                type:'woman fashion',
                nom:'Pantalon Jean',
                marque:'GUSTIN',
                couleur:'Bleu',
                taille:"M UK/US : 32 80cm",
                prix:'50 DT',
                imgurl:"../../assets/man/jean_homme.jpg"
        },
        {
            id_col:6,
                type:'man fashion',
                nom:'Pull col rond',
                marque:'ORSLOW',
                couleur:'vert',
                taille:"M, Tour de poitrine: 96-100 cm",
                prix:'50 DT',
                imgurl:"../../assets/man/pull_homme.jpg"
        },
        {
            id_col:7,
                type:'woman fashion',
                nom:'Robe court',
                marque:'H&M',
                couleur:'Noir',
                taille:"S, Tour de taille : 62-66 cm, Tour de bassin: 88-92",
                prix:'100 DT',
                imgurl:"../../assets/femme/robe-court-H&M.jpg"
        },
        {
            id_col:8,
                type:'woman fashion',
                nom:'Robe longue',
                marque:'Zara',
                couleur:'Rouge',
                taille:"M, Tour de taille: 66-70 cm, Tour de bassin:92-96",
                prix:'150 DT',
                imgurl:"../../assets/femme/robe-longue-rouge-Zara.jpg"
        },
        {
            id_col:9,
                type:'woman fashion',
                nom:'Pull avec col roulé',
                marque:'H&M',
                couleur:'Mauve',
                taille:"M, Tour de poitrine: 96-100 cm",
                prix:'70 DT',
                imgurl:"../../assets/femme/pull-femme-mauve-col-roulé.jpg"
        },
        {
            id_col:10,
                type:'woman fashion',
                nom:'Chemise',
                marque:'Zara',
                couleur:'Bleu',
                taille:"M, Tour de col: 16",
                prix:'97 DT',
                imgurl:"../../assets/femme/chemise-jean-femme.jpg"
        },
    ]

    /*categorieDetails = [
        {
            id_cat:1,
            nom:'Beauty',
            imagecat:"../../../assets/categories/beauty.jpg"
        },
        {
            id_cat:2,
            nom:'Computer hardware',
            imagecat:"../../../assets/categories/informatique.jpg"
        },
        {
            id_cat:3,
            nom:'kitchen',
            imagecat:"../../../assets/categories/cuisine.jpg"
        },
        {
            id_cat:4,
            nom:'woman fashion',
            imagecat:"../../../assets/categories/mode femme.jpg"
        },
        {
            id_cat:5,
            nom:"men's fashion",
            imagecat:"../../../assets/categories/mode homme.jpg"
        },
        {
            id_cat:6,
            nom:"children's clothes",
            imagecat:"../../../assets/categories/vetement-enfants.jpg"
        },
        {
            id_cat:7,
            nom:'home appliance',
            imagecat:"../../../assets/categories/electromenager.jpg"
        },
        {
            id_cat:8,
            nom:'Education',
            imagecat:"../../../assets/categories/education.jpg"
        }

    ]*/
}
