var config = {
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    accessToken: 'pk.eyJ1IjoicmVjZnJlcSIsImEiOiJjamtoNXhvZTEwM3NwM3ZxcWszYTN3ZWl4In0.PVWzx-AiSNlZEYR1YZPrVw',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Decarceration During COVID - a Novel Prisoner Reintegration Plan',
    subtitle: '',
    byline: 'A Project for HackZ (Kyran Adams, Kira Tran, Parth Patel, RAY LC; Special Thanks to Connor Rothschild)',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'COVID-19 in prisons',
            image: './path/to/image/source.png',
            description: 'There are over 86,000 inmates in the US with COVID-19 and 8 out of 10 of the top case clusters are in US prisons [1|http://www.ref.com].\n As the pandemic has spread to every corner of the United States, the US prison system has become an dire situation due to close proximity, slow response, low testing, and low cleanliness standards.',
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
