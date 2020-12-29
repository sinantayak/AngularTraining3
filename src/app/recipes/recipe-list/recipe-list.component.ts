import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]= [
    new Recipe('A test Recipe','This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/a/a8/Grapefruit%2C_half.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
