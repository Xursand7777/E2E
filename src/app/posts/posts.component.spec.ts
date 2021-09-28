import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostsComponent } from './posts.component';
import {PostsService} from "./posts.service";
import {HttpClientModule} from "@angular/common/http";
import {of} from "rxjs";

describe('PostsComponent', () => {
  let fixture: ComponentFixture<PostsComponent>
  let component: PostsComponent;
  let service: PostsService

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [PostsComponent],
      providers: [PostsService],
      imports: [HttpClientModule]
    })
    fixture = TestBed.createComponent(PostsComponent)
    // service = TestBed.get(PostsService)
    service = fixture.debugElement.injector.get(PostsService)
    component = fixture.componentInstance
  })

  it('should fetch posts on ngOnInit ',  () => {
      const posts = [1,2,3]
      spyOn(service, 'fetch').and.returnValue(of(posts))
      fixture.detectChanges()
      // @ts-ignore
    expect(component.posts).toEqual(posts)
  });

})


