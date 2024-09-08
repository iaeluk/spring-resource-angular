import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGoogleService } from '../services/auth-google.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const MODULES = [CommonModule];

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MODULES],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  private authService = inject(AuthGoogleService);
  private router = inject(Router);
  private http = inject(HttpClient);
  profile: any;
  privateMessage: any;

  private apiUrl = 'http://localhost:8080/private';

  ngOnInit(): void {
    this.showData();
    this.getPrivateMessage();
  }

  showData() {
    this.profile = this.authService.getProfile();
    console.log(this.profile);
  }

  getPrivateMessage() {
    let token = this.authService.getToken();
    console.log(token);

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    this.http.get<any>(this.apiUrl, { headers }).subscribe((data) => {
      this.privateMessage = data.message;
      console.log(data);
    });
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
