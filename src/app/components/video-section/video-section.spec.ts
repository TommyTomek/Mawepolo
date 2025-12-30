import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoSectionComponent } from './video-section';

describe('VideoSectionComponent', () => {
  let component: VideoSectionComponent;
  let fixture: ComponentFixture<VideoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoSectionComponent] // because it's standalone
    }).compileComponents();

    fixture = TestBed.createComponent(VideoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default videoUrl', () => {
    expect(component.videoUrl).toBe('assets/videos/intro.mp4');
  });
});
