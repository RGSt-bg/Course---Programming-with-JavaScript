import { Component } from '@angular/core';

type User = {
  name: string;
  age: number;
  status?: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  isToggle = false;
  
  users = [{name: 'John', age: 30, status: "green"},
           {name: 'Jane', age: 25, status: "blue"},
           {name: 'Mark', age: 35},
           {name: 'Sarah', age: 28},
           {name: 'Mike', age: 32, status: "grey"}
  ] as User[];
}
