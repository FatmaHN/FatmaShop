import { Injectable } from "@angular/core";
import { BaseRouteReuseStrategy } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class DetailCategory {
    constructor(){ }

    categorieDetails = [
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

    ]
}
