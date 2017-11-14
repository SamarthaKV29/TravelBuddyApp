import { Injectable } from '@angular/core';
import { User } from '../users/user';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class UserService {
  private usersUrl = 'http://travel-buddy-app.herokuapp.com/api/v1/users';
  private usersUrl2 = 'http://localhost:4500/api/v1/users';
  
      constructor (private http: Http) {}
  
      // get("/api/Users")
      getUsers(): Promise<void | User[]> {
        return this.http.get(this.usersUrl)
                   .toPromise()
                   .then(response => response.json() as User[])
                   .catch(this.handleError);
      }
  
      // post("/api/Users")
      createUser(newUser: User): Promise<void | User> {
        return this.http.post(this.usersUrl, newUser)
                   .toPromise()
                   .then(response => response.json() as User)
                   .catch(this.handleError);
      }
  
      // get("/api/Users/:id") endpoint not used by Angular app
      // delete("/api/Users/:id")
      deleteUser(delUserId: String): Promise<void | String> {
        return this.http.delete(this.usersUrl + '/' + delUserId)
                   .toPromise()
                   .then(response => response.json() as String)
                   .catch(this.handleError);
      }
  
      // put("/api/Users/:id")
      updateUser(putUser: User): Promise<void | User> {
        var putUrl = this.usersUrl2 + '/' + putUser._id;
        console.log(putUrl);
        return this.http.put(putUrl, putUser)
                   .toPromise()
                   .then(response => response.json() as User)
                   .catch(this.handleError);
      }
  
      private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.log(errMsg, error);
      }
}
