import { HttpInterceptorFn } from '@angular/common/http';
import { BusyService } from '../_services/busy.service';
import { inject } from '@angular/core';
import { delay, finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const busyservice = inject(BusyService);
  busyservice.busy();
  return next(req).pipe(
    delay(1000),
    finalize(()=>{
      busyservice.idle()
    })
  );
};
