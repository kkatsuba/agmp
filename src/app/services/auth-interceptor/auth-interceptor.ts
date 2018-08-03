import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { AuthorizationService } from '../authorization/authorization.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthorizationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url === '/api/auth/login') {
      return next.handle(req);
    }

    const newReq = req.clone({
      headers: req.headers.set('Authorization', this.authService.token())
    });

    return next.handle(newReq);
  }
}
