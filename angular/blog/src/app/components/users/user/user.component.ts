import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() data: any
  @Output() updateUserAgeEvent = new EventEmitter()

  age: number = 0


  constructor() { }

  ngOnInit(): void {
    this.age = this.data.age
  }

  update(value: any) {
    console.log(value)

    this.updateUserAgeEvent.emit({
      id: this.data.id,
      name: value
    })
  }


  // update(value: string) {
  //   this.updateUserAge.emit({
  //     id: this.data.id,
  //     name: value
  //   })
  // }

}
