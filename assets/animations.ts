import { animation, trigger, transition, style, animate } from '@angular/animations';

export const FadeInAnimation = animation([
    style({opacity: 0}),
    animate('{{ duration }}', style({opacity: 1}))
]);

export const FadeOutAnimation = animation([
    animate('{{ duration }}', style({opacity: 0}))
]);
