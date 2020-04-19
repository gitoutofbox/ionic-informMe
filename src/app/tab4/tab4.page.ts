import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {
  message: '';
  messages = [];
  apiInProgress: boolean = false;
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.apiInProgress = true;
    this.apiService.post('http://localhost:8081/chat/startSession',{} ).subscribe(data => {
      if(data['status'] === 'success') {
        this.apiInProgress = false;
      }
    }, error => {

    })
  }
  sendMessage(){
    if(this.apiInProgress || this.message === '') {
      return false;
    }
    console.log(this.message);
    this.apiInProgress = true;
    this.messages.push({"type": "query", "text": this.message});
    this.apiService.post('http://localhost:8081/chat/send',{"message": this.message} ).subscribe(data => {
      this.apiInProgress = false;
      this.message = '';
      this.messages.push({"type": "response", "text": data['message']});
    })
  }
}
