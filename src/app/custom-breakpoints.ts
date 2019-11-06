import {BREAKPOINT} from '@angular/flex-layout';

const PRINT_BREAKPOINTS = [{
  alias: 'xs.print',
  suffix: 'XsPrint',
  mediaQuery: 'print',
  overlapping: false,
  priority: 10000
}];

export const CustomBreakPointsProvider = { 
  provide: BREAKPOINT,
  useValue: PRINT_BREAKPOINTS,
  multi: true
};