import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BetaInputService {
  private _inputFocus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  $inputFocus = this._inputFocus.asObservable();

  constructor() {}

  focus(): void {
    this._inputFocus.next(true);
  }
}
