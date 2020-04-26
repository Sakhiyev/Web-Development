import {User} from './user';
import {mockUser} from './mock-users';

export class LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = mockUser;
  private usersUrl = 'api/users';
  BASE_URL = 'http://127.0.0.1:8000';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }


  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    });
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUser(): Observable<User> {
    return of(this.user);
  }


  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions);
  }
  updateUser(user: User): Observable<User> {
    return;
  }
}