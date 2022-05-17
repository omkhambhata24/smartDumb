import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Files } from 'src/app/file-upload/model/file.model';
import { Button } from 'src/app/shared/model/button.model';

@Component({
  selector: 'app-file-overlay',
  templateUrl: './file-overlay.component.html',
  styleUrls: ['./file-overlay.component.scss']
})
export class FileOverlayComponent implements OnInit {
  @Input() buttons!: Button[];
	@Output() buttonClick: EventEmitter<string>;

	private _file!: Files;
	@Input() public set file(v: Files | null) {
		if (v) {
			console.log(v);
			this._file = v;
		}
	}

	public get file(): Files {
		return this._file;
	}

	public safeUrl!: SafeResourceUrl;

	constructor(private sanitizer: DomSanitizer) {
		this.buttonClick = new EventEmitter();
	}

	ngOnInit(): void {
		const byteCharacters = atob(this._file.content.split(",")[1]);
		const byteNumbers = new Array(byteCharacters.length);
		for (let i = 0; i < byteCharacters.length; i++) {
			byteNumbers[i] = byteCharacters.charCodeAt(i);
		}
		const byteArray = new Uint8Array(byteNumbers);
		this.safeUrl =
			this.sanitizer.bypassSecurityTrustResourceUrl(
				URL.createObjectURL(new Blob([byteArray], { type: this._file.type })),
			);
	}

	onLoad(iframe: EventTarget | null) {
		(<HTMLIFrameElement>iframe).contentWindow!.document.head.innerHTML +=
			`<style>img{width: 100%;height: 100%}</style>`;
	}

	onButtonClick(name: string) {
		this.buttonClick.emit(name);
	}
}
