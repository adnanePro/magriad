import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpErrorResponse,
    HttpResponse
  } from '@angular/common/http';
  import { Injectable, Injector } from '@angular/core';
  import { Observable, throwError, of, Subscription } from 'rxjs';
  import { tap, catchError } from 'rxjs/operators';
  import { NavigationExtras, Router } from '@angular/router';

  @Injectable()
  export class AuthInterceptor implements HttpInterceptor {
    subscription: Subscription = new Subscription();

    constructor(private injector: Injector) {}
    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {

      const re = /upload/gi;
      const token = sessionStorage.getItem('token');
      if (req.url.search(re) === -1) {
        const headers: any = {
          'Content-Type': 'application/json; charset=utf-8',
          Accept: 'application/json'
        };

        if (token) {
          headers.Authorization = `Bearer ${token}`;
        }

        req = req.clone({
          setHeaders: headers
        });
      } else {

        const headers: any = {
          //'Content-Type': 'application/json; charset=utf-8',
          Accept: 'application/json'
        };

        if (token) {
          headers.Authorization = `Bearer ${token}`;
        }

        req = req.clone({
          setHeaders: headers
        });
      }

      return next.handle(req).pipe(
        tap(evt => {
          if (evt instanceof HttpResponse) {
          }
        }),
        catchError((err: any) => {
          if (err instanceof HttpErrorResponse) {
            localStorage.setItem('errorMessage',JSON.stringify(err));

            const router = this.injector.get(Router);
          //        router.navigate(['/error'],);
            //log error
          }
          return of(err);
        })
      );
    }
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
  }
