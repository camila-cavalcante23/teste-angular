import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostCreateComponent } from './post-create.component';
import { FormsModule } from '@angular/forms';
import { PostService } from '../services/post.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PostCreateComponent', () => {
  let component: PostCreateComponent;
  let fixture: ComponentFixture<PostCreateComponent>;
  let postService: PostService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      providers: [PostService]
    }).compileComponents();

    fixture = TestBed.createComponent(PostCreateComponent);
    component = fixture.componentInstance;
    postService = TestBed.inject(PostService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
