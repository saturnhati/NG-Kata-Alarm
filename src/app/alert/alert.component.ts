import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AlarmService } from './alarm.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  @ViewChild('form') form!: FormGroup;
  message: string = '';

  constructor(private alarmService: AlarmService) {}

  ngOnInit(): void {}

  setAlarm() {
    this.message = `Timer for ${this.form.value.seconds} seconds started...`;
    console.log(this.form.value.seconds);
    let seconds: number = this.form.value.seconds * 1000;
    console.log(seconds);
    if (seconds > 60000) {
      alert("You can't insert more than 60 seconds");
    } else {
      this.alarmService.alarm(seconds).subscribe((data) => {
        console.log('End Timer');
        this.message = 'Time is up!';
      });
    }
    this.form.reset();
  }
}
