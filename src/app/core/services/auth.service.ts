import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  expiresIn: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly EXPIRES_IN_KEY = 'auth_expires_in';
  private readonly API_URL = '/api/auth';

  isAuthenticated = signal<boolean>(false);
  isLoading = signal<boolean>(false);
  error = signal<string | null>(null);

  constructor(private http: HttpClient, private router: Router) {
    this.checkAuthStatus();
  }

  login(credentials: LoginCredentials): Observable<AuthResponse> {
    this.isLoading.set(true);
    this.error.set(null);

    return this.http.post<AuthResponse>(`${this.API_URL}/login`, credentials).pipe(
      tap(response => {
        this.handleAuthSuccess(response);
      })
    );
  }

  logout(): void {
    // Implementar lógica de logout
  }

  getToken(): string | null {
    // Implementar recuperación del token
    return null;
  }

  private handleAuthSuccess(response: AuthResponse): void {
    // Implementar manejo de respuesta exitosa
  }

  private checkAuthStatus(): void {
    // Implementar verificación de estado de autenticación
  }

  private clearAuthData(): void {
    // Implementar limpieza de datos de autenticación
  }
}