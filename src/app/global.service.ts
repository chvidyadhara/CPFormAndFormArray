import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {switchMap,shareReplay} from 'rxjs/operators';
export interface MasterDataInter {

  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  url ="https://api.github.com/users?per_page=5";
  constructor(private http:HttpClient) { }

  masterData$ = ajax.getJSON(this.url)
 
  userBasicData$:Observable<any[]> = this.masterData$.pipe(
    switchMap((data:MasterDataInter[])=>{
      const filterData = data.map(d=>{
        return {
          id:d.id,
          type:d.type
        };
      }) 
      return of(filterData)
      })
     )


}
