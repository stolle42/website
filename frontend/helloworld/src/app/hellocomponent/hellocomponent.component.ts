import { Component } from '@angular/core';

@Component({
  selector: '[customtag]',
  standalone: true,
  imports: [],
  template: `<p>inline code<p>
            <p>next line of inline<p>`,
  styleUrl: './hellocomponent.component.css'
})
export class HellocomponentComponent {

}
