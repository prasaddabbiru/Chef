import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { ToastModule } from 'ng2-toastr'
import { Ng2DeviceDetector } from 'ng2-device-detector'
import { SiteDataService } from './services/site-data.service'
import { ErrorHandlerService } from './services/error-handler.service'
import { RouterModule, Routes } from '@angular/router'
import { Angular2TokenService, A2tUiModule } from 'angular2-token'
import { SegmentService } from './services/segment.service'
import { AppComponent } from './app.component'
import { LoginGithubDirective } from './directives/login-github/login-github.directive'
import { LoginGoogleDirective } from './directives/login-google/login-google.directive'
import { UserStartBtnDirective } from './directives/user-start-btn/user-start-btn.directive'
import { ModuleNextBtnDirective } from './directives/module-next-btn/module-next-btn.directive'
import { CheckBoxDirective } from './directives/check-box/check-box.directive'
import { TabsDirective } from './directives/tabs/tabs.directive'
import { UserProfileService } from './services/user-profile.service'
import { UserProgressBarComponent } from './components/user-progress-bar/user-progress-bar.component'
import { UserProgressStampComponent } from './components/user-progress-stamp/user-progress-stamp.component'
import { UserTrackProgressComponent } from './components/user-track-progress/user-track-progress.component'
import { UserProgressCountsComponent } from './components/user-progress-counts/user-progress-counts.component'
import { UserCoastersComponent } from './components/user-coasters/user-coasters.component'
import { QuizComponent } from './components/quiz/quiz.component'
import { SocialShareComponent} from './components/social-share/social-share.component'
import { LoginTwitterDirective } from './directives/login-twitter/login-twitter.directive'
import { LoginLinkedInDirective } from './directives/login-linkedin/login-linkedin.directive'
import { LoginChefDirective } from './directives/login-chef/login-chef.directive'
import { ProgressService } from './services/progress.service'
import { UserProfileComponent } from './components/user-profile/user-profile.component'
import { UserDisplayNameComponent } from './components/user-display-name/user-display-name.component'
import { UserProfileLinkComponent } from './components/user-profile-link/user-profile-link.component'
import { WelcomeRibbonComponent } from './components/welcome-ribbon/welcome-ribbon.component'
import { MaterialModule } from '@angular/material'
import { ModuleFilterService } from './services/module-filter.service'
import { ModuleDisplayDirective } from './directives/module-display/module-display.directive'
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect'
import { ModuleFilterComponent } from './components/module-filter/module-filter.component'
import { LoadModuleBtnDirective } from './directives/load-module-btn/load-module-btn.directive'
import { TrackDisplayService } from './services/track-display.service'
import { TrackDisplayDirective } from './directives/track-display/track-display.directive'
import { TrackStartTextDirective } from './directives/track-start-text/track-start-text.directive'
import { LoadTrackBtnDirective } from './directives/load-track-btn/load-track-btn.directive'
import { ChefLabProvisionerDirective } from './directives/chef-lab-provisioner/chef-lab-provisioner.directive'

import { Component } from '@angular/core'

const NoopComponent = Component({
  template: '<div></div>',
})(class {})

const routerConfig: Routes = [
  {
    path: '**',
    component: NoopComponent,
  },
]

export const routes = RouterModule.forRoot(routerConfig, { useHash: true })

@NgModule({
  declarations: [
    AppComponent,
    NoopComponent,
    LoginGithubDirective,
    LoginGoogleDirective,
    UserStartBtnDirective,
    ModuleNextBtnDirective,
    CheckBoxDirective,
    TabsDirective,
    UserProgressBarComponent,
    UserProgressStampComponent,
    UserTrackProgressComponent,
    UserProgressCountsComponent,
    UserCoastersComponent,
    QuizComponent,
    SocialShareComponent,
    LoginTwitterDirective,
    LoginLinkedInDirective,
    LoginChefDirective,
    UserProfileComponent,
    ModuleDisplayDirective,
    ModuleFilterComponent,
    LoadModuleBtnDirective,
    TrackDisplayDirective,
    TrackStartTextDirective,
    LoadTrackBtnDirective,
    ChefLabProvisionerDirective,
    UserDisplayNameComponent,
    UserProfileLinkComponent,
    WelcomeRibbonComponent,
  ],
  imports: [
    routes,
    BrowserModule,
    FormsModule,
    RouterModule,
    ToastModule.forRoot(),
    Ng2DeviceDetector,
    A2tUiModule,
    MaterialModule,
    MultiselectDropdownModule,
  ],
  providers: [
    SiteDataService,
    ErrorHandlerService,
    Angular2TokenService,
    UserProfileService,
    ProgressService,
    ModuleFilterService,
    TrackDisplayService,
    SegmentService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
  constructor () {
  }
}