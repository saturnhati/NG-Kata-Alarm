import { Injectable } from '@angular/core';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlarmService {
  constructor() {}

  alarm(seconds: number) {
    let obs$ = timer(seconds);
    return obs$;
  }
}
