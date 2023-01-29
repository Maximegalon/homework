import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule  } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { FilesService } from './files.service';
import { File, FileStatus } from '../interfaces/file';

describe('FilesService', () => {
  let service: FilesService;

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 5; // @NOTE: 5 seconds, just in case but not really needed

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FilesService]
    });
    service = TestBed.inject(FilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getFiles just once and return the files', (done: DoneFn) => {
    const expectedFiles: File[] =  [
      {"id": 1, "name": "smss.exe", "device": "Stark", "path": "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe", "status": FileStatus.Scheduled},
      {"id": 2, "name": "netsh.exe", "device": "Targaryen", "path": "\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe", "status": FileStatus.Available},
      {"id": 3, "name": "uxtheme.dll", "device": "Lannister", "path": "\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll", "status": FileStatus.Available},
      {"id": 4, "name": "cryptbase.dll", "device": "Martell", "path": "\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll", "status": FileStatus.Scheduled},
      {"id": 5, "name": "7za.exe", "device": "Baratheon", "path": "\\Device\\HarddiskVolume1\\temp\\7za.exe", "status": FileStatus.Scheduled}
      ];
    const spy = spyOn(service, "getFiles").and.returnValue(of(expectedFiles));

    service.getFiles().subscribe((res) => {
      expect(res).toEqual(expectedFiles);
      expect(res.length).toEqual(expectedFiles.length);

      done();
    });

    expect(spy.calls.count()).withContext('a single call').toBe(1);
  });
});
