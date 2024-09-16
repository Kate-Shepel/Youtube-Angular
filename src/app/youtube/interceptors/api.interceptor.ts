import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { API_KEY, BASE } from "../../core/keys/api-keys";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const keyedParams = new HttpParams({ fromString: request.params.toString() }).set("key", API_KEY);
    const apiRequestWithBase = request.clone({
      url: `${BASE}${request.url}`,
      params: keyedParams
    });
    return next.handle(apiRequestWithBase);
  }
}
