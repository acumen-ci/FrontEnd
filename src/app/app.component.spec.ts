import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let fixture: AppComponent;

  let httpClientMock;

  beforeEach(() => {

    httpClientMock = {
      get: jest.fn(),
    };

    fixture = new AppComponent(
      httpClientMock,
    );
  });

  it('should exist', () => {
    expect( fixture).not.toBeUndefined();
  });
});
