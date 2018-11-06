import {
    trigger,
    animate,
    transition,
    style,
    query
} from '@angular/animations';

// import {position } from '@angular/core'

export const fadeAnimation = trigger('fadeAnimation', [
    // The '* => *' will trigger the animation to change between any two states
    transition('*=>*', [
        query(
            ':enter',
            [style({ opacity: 0})],
            { optional: true }
        ),
        query(
            ':leave',
            [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
            { optional: true }
        ),
        query(
            ':enter',
            [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
            { optional: true }
        )
    ])
]);