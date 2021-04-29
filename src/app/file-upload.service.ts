import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('files', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/uploadMultipleFiles`, formData, {
      reportProgress: true,
      responseType: 'json',
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/list`);
  }

  downloadFile(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/downloadFile/${id}`);
  }

  // getAccountTypes(): Observable<any> {
  //   return this.http.get(`https://unhonoured-fountain.000webhostapp.com/php_scripts/account_type.php`);
  // }
}
