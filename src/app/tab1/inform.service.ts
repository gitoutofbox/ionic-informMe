import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class InformService {

  constructor(private apiService: ApiService) { }

  submitInformation(postData: Object) {
    return this.apiService.post(`${environment.apiBase}/report`,postData);
  }
}
