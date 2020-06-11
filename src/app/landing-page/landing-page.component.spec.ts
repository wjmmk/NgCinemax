import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingPageComponent } from './landing-page.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesFilterComponent } from './movies-filter/movies-filter.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { NavbarSocialComponent } from './navbar-social/navbar-social.component';
import { PremieresComponent } from './premieres/premieres.component';
import { SlidesComponent } from './slides/slides.component';
import { WeeklyBilboardsComponent } from './weekly-bilboards/weekly-bilboards.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LandingPageComponent,
        CarrouselComponent,
        FooterComponent,
        MoviesFilterComponent,
        NavbarMenuComponent,
        NavbarSocialComponent,
        PremieresComponent,
        SlidesComponent,
        WeeklyBilboardsComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
