var config = {
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    accessToken: 'pk.eyJ1IjoicmVjZnJlcSIsImEiOiJjamtoNXhvZTEwM3NwM3ZxcWszYTN3ZWl4In0.PVWzx-AiSNlZEYR1YZPrVw',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Deincarceration during COVID',
    subtitle: '',
    byline: 'for HackZ',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'COVID in prisons',
            image: './path/to/image/source.png',
            description: 'There are over 86,000 inmates in the US with COVID.',
            location: {
                center: [-95.81199, 38.84726],
                zoom: 3.78,
                pitch: 25.00,
                bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            title: 'Specific area',
            image: './path/to/image/source.png',
            description: 'Washington DC.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
