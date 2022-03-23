import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../AuthService/auth.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private authservice:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tokenReq = request.clone({
      setHeaders:{
        Authorization:`Bearer ${this.authservice.getToken()}`
      }
    })
  
  
    return next.handle(tokenReq).pipe(
    catchError((error: HttpErrorResponse) => {
      console.log(error);
      return throwError(error.error);
    })
  )
  }
}  

