import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoutingComponent } from './routing.component';
import {Observable} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";

class RouterStub {
  navigate(path: string[]) {

  }
}

class ActivatedRouteStub {
  params!: Observable<Params>
}

describe('RoutingComponent', () => {
  let component: RoutingComponent;
  let fixture: ComponentFixture<RoutingComponent>;

  beforeEach(() => {
     TestBed.configureTestingModule({
       declarations: [ RoutingComponent ],
       providers: [
         {
           provide: Router, useClass: RouterStub
         },
         {
           provide: ActivatedRoute, useClass: ActivatedRouteStub
         }
       ]
    })
    fixture = TestBed.createComponent(RoutingComponent);
    component = fixture.componentInstance;
  });


  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should navigate to posts if go back ',  () => {
    let router = TestBed.inject(Router)
    let spy = spyOn(router, 'navigate')

    component.goBack()

    expect(spy).toHaveBeenCalledWith(['/posts'])
  });
});
