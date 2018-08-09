import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export class Helper {
  static handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else if (error instanceof HttpErrorResponse){
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    } else {
      console.error('Unexpected error');
    }

    return throwError('Something bad happened; please try again later.');
  }
}
