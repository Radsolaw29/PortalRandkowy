import { Injectable } from '@angular/core';
declare let alertyfi: any;

@Injectable({
  providedIn: 'root'
})
export class AlertyfiService {

constructor() { }

success(message: string) {
  alertyfi.success(message);
}

error(message: string) {
  alertyfi.error(message);
}

warning(message: string) {
  alertyfi.warning(message);
}

message(message: string) {
  alertyfi.message(message);
}

}
