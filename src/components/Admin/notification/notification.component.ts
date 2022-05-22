import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/adminService.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  word!:string;
  notif!: any;
  c!:any;

  constructor(private adminS:AdminService) { }

  ngOnInit() {
    this.getNotif();
  }
  getNotif(){
    this.adminS.getNotifications().subscribe(data=>{
      this.notif=data;  
      this.c=data

    });

  }
  listNotification(){
    if(this.word===""|| this.word===undefined){
      this.c=this.notif;
      return;
    }
    this.c=[];
    for(var i of this.notif){
      if (i.matricule.startsWith(this.word)){
        this.c.push(i)
      }
    }
  }
}
