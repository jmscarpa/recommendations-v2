import { ApiService } from 'src/app/services/api.service';
import { Recommendation } from 'src/app/models/recommendation';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../../models/comment'

@Component({
  selector: 'app-recommendation-details',
  templateUrl: './recommendation-details.component.html',
  styleUrls: ['./recommendation-details.component.scss']
})
export class RecommendationDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  public recommendation!: Recommendation;
  public newComment: string = '';

  public ngOnInit(): void {
    let id:number = this.route.snapshot.params['id'];
    this.apiService.get<Recommendation>(`recommendations/${id}`).then( data => {
      this.recommendation = data;
    })
  }

  public sendComment(): void {
    let url: string = `recommendations/${this.recommendation.id}/comments`
    this.apiService.post<Comment>(url, { content: this.newComment }).then( data =>{
      this.recommendation.comments.push(data)
      this.newComment = ''
    })
  }

}

