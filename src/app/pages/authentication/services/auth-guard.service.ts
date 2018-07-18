import { Injectable } from "@angular/core";
import {
    CanActivate,
    CanActivateChild,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

    constructor(
        private authService: AuthService,
        private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        let url: string = state.url;
        console.log('Url:' + url);
        if (this.authService.isUserLoggedIn()) {
            return true;
        }
        this.authService.setRedirectUrl(url);
        this.router.navigate([this.authService.getLoginUrl()]);
        return false;
    }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        let loggedInUser = this.authService.getLoggedInUser();
        if (loggedInUser) {
            return true;
        } else {
            console.log('Unauthorized to open link:' + state.url);
            return false;
        }
    }
}