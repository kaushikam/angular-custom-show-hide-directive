import { ShowHideDirective } from '@angular/flex-layout';
import { Directive } from '@angular/core';

const selector = `[fxHide.xs.print]`;
const inputs = ['fxHide.xs.print'];

@Directive({selector, inputs})
export class CustomShowHideDirective extends ShowHideDirective {
  protected inputs = inputs;
}