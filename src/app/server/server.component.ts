import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {

  serverID = 10;
  serverStatus= 'offline';

  getServerStatus(){
    return this.serverStatus;
  }


  constructor() { }

  ngOnInit(): void {
  }

}

