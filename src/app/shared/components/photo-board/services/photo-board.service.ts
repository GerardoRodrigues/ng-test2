import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Photo } from '../interfaces/photo';
import { delay, map} from 'rxjs/operators';

@Injectable()

export class PhotoBoardService {

    constructor(private http: HttpClient){}

    getPhotos(): Observable<Photo[]>{
        return this.http.get<Photo[]>('http://localhost:3000/photos').pipe(delay(2000)).pipe(map(photos => {
            return photos.map(photo => {
                return {...photo, description: photo.description.toLocaleUpperCase()};
            })
        }));
    }
}