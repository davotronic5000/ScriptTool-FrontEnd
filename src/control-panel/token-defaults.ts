const tokenDefaults = {
    page: {
        height: 297,
        width: 210,
        margin: 10,
    },
    tokens: {
        margin: 1,
        role: {
            size: 45,
            imageMarginX: 5,
            imageMarginY: 2.5,
        },
        reminder: {
            size: 25,
            imageMarginX: 4,
            imageMarginY: 1,
        },
    },
    styles: {
        fontColour: '#262626',
        setup: {
            icon: '&#10010;',
            colour: ' #d97f3f',
        },
        firstNight: {
            icon: '&#10038;',
            colour: '#262626',
        },
        otherNight: {
            icon: '&#10038;',
            colour: '#262626',
        },
        reminder: {
            icon: '&#10038;',
            colour: '#262626',
        },
        border: {
            colour: '#402f03',
            alpha: 0.4,
            circleBorder: true,
            squareBorder: false,
            thickness: 1,
        },
    },
};

export default tokenDefaults;
