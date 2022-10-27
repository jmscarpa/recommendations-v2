import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Recommendation } from 'src/app/models/recommendation';
import { ApiService } from 'src/app/services/api.service';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-recommendations-list',
  templateUrl: './recommendations-list.component.html',
  styleUrls: ['./recommendations-list.component.scss']
})
export class RecommendationsListComponent implements OnInit, AfterViewInit {

  public readonly ALL_RECOMMENDATIONS: number = 0;
  public recommendations: Recommendation[] = [];
  public categories: Category[] = [];
  public currentCategory: number = this.ALL_RECOMMENDATIONS;
  public showDialog: boolean = false;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.loadCategories();
    this.loadRecommendations(this.ALL_RECOMMENDATIONS)
  }

  public ngAfterViewInit() {
    feather.replace();
  }

  public filter(categoryId: number): void {
    this.currentCategory = categoryId;
    this.loadRecommendations(categoryId);
  }

  public showDetails(recommendation: Recommendation) {
    // this.router.navigateByUrl(`recomendacao/${recommendation.id}`)
    this.router.navigate(['recomendacao', recommendation.id])
  }

  public showAddDialog() {
    this.showDialog = true;
  }

  public onCloseDialog() {
    this.showDialog = false;
  }

  private async loadCategories(): Promise<void> {
    this.categories = await this.apiService.get<Category[]>('categories')
  }

  private async loadRecommendations(category: number): Promise<void> {
    let params: object = {}

    if (category != this.ALL_RECOMMENDATIONS) {
      params = { category }
    }

    this.recommendations = await this.apiService.get<Recommendation[]>('recommendations', params)
  }

}
