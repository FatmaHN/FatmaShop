import { Component, OnInit,Input } from '@angular/core';
import { DetailCategory } from "src/app/services/detail-category";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(private services:DetailCategory){ }
  categorieData:any;
 // @Input()
  categorie!:any 
   /*beauty! : category;        modehomme!:category;
  modefemme! :category;      cuisine!:category;
  informatique!:category;    education!:category;
  vetementEnfants!:category; electroMenages!:category */
  

  ngOnInit(): void {
    this.categorieData=this.services.categorieDetails;
    /*this.beauty = new category(
      
    ),
    this.education = new category(
      2,
      'Education',
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.cuisineaddict.com%2Fimg%2Fconstructor%2Fmobile%2F128_1.jpg&imgrefurl=https%3A%2F%2Fwww.cuisineaddict.com%2Facheter-ustensiles-de-cuisine-16.htm&tbnid=mkkkntFrGKt2FM&vet=12ahUKEwipucyJ19r7AhUGTRoKHZzSD5YQMygIegUIARDwAQ..i&docid=TRFqW6fhNcu0YM&w=432&h=419&q=materiel%20de%20cuisine&ved=2ahUKEwipucyJ19r7AhUGTRoKHZzSD5YQMygIegUIARDwAQ"
    )
    this.categorie = [
      (
       id_cat: 1,
       nom :'Beauty',
       imagcat:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fs.alicdn.com%2F%40sc04%2Fkf%2FHaa98409f10774d39aaac882f63aaad47R.jpg&imgrefurl=https%3A%2F%2Fseller.alibaba.com%2Fbusinessblogs%2Fpx36rdx1-top-10-beauty-industry-trends-for-2021&tbnid=yWV3nw4h4D5R5M&vet=12ahUKEwiJhr7kqNn7AhVLlxoKHeKHDPQQMygmegUIARCuAg..i&docid=ZnUlGNYjkJYE2M&w=800&h=534&q=beauty&ved=2ahUKEwiJhr7kqNn7AhVLlxoKHeKHDPQQMygmegUIARCuAg"
      )*/
  }

}
