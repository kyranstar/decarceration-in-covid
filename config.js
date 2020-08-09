var config = {
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    accessToken: 'pk.eyJ1IjoicmVjZnJlcSIsImEiOiJjamtoNXhvZTEwM3NwM3ZxcWszYTN3ZWl4In0.PVWzx-AiSNlZEYR1YZPrVw',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Decarceration During COVID - A Novel Prisoner Reintegration Plan',
    subtitle: 'A Project for HackZ',
    byline: 'Kyran Adams, Kira Tran, Parth Patel, RAY LC; Special Thanks to Connor Rothschild',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'covid-in-prisons',
            title: 'COVID-19 in Prisons',
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
            id: 'covid-in-prisons',
            title: 'COVID-19 in Prisons',
            description: 'Visualized here is the number of cases per 10,000 prisoners by state. [2|https://www.themarshallproject.org/2020/05/01/a-state-by-state-look-at-coronavirus-in-prisons]',
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
            id: 'Decarceration-in-prisons',
            title: 'Solution: Releasing Low-Risk Prisoners',
            description: 'Many prisons have taken to decarcerating some prisoners. This has shown to have no effect on crime rate [3|https://github.com/aclu-national/covid-decarceration-and-crime] [4|https://www.prisonpolicy.org/blog/2020/04/09/large-scale-releases/].\n Decarceration will reduce prison costs to taxpayers per prisoner, especially when prison have to provide testing and care for infected patients.\n However, simply releasing inmates is not enough - a plan for reintegration must provide this unstable population resources in order to stem reoffending and keep relased people out of infectious situations, such as homelessness or group housing.',
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
            id: 'issues-with-reintegration',
            title: 'Issues with Reintegration in COVID',
            description: 'Current reintegration plans have found difficulty in many areas. For example, many prisons and reintegration non-profits report difficulty finding housing for the increasing demand [5|https://shelterforce.org/2020/05/11/pandemic-leads-to-early-prisoner-release-but-finding-housing-for-them-remains-difficult/].\n As well as that, an unprecedented unemployment rate makes finding jobs for decarcerated people difficult.',
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
            id: 'our-plan',
            title: 'Decarceration during COVID - A Novel Reintegration Plan',
            description: 'We propose a new reintegration plan for the pandemic that, rather than fighting the struggling economy, utilizes new gaps in the economy to provide opportunities for these people and benefits to struggling industries.\n Our solution is two-pronged: we will provide housing for decarcerated people in local hotels, and provide them jobs in industries hard-hit by COVID-19 on a prison payroll.',
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
            id: 'our-plan-housing',
            title: 'Decarceration During COVID: Housing in Hotels',
            description: 'Housing the decarcerated homeless population in local hotels provides two benefits.\n First, it augments lacking [5|https://shelterforce.org/2020/05/11/pandemic-leads-to-early-prisoner-release-but-finding-housing-for-them-remains-difficult/] existing housing. This keeps homeless out of unsafe situations such as homeless camps, shelters, or other group housing, which will reduce transmission rates.\n Second, this will protect the hard-hit hospitality industry which currently is at an unprecedented low occupancy rate [6|https://str.com/press-release/str-us-hotel-results-week-ending-1-august] leading to massive unemployment [7|https://www.statista.com/statistics/1105284/coronavirus-hotel-jobs-impact-us/].\nBy creating contracts between prisons and the hotel industry, we can protect this damaged industry while providing this vulnerable population vital housing.',
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
            id: 'our-plan-housing-viz',
            title: 'Decarceration During COVID: Housing in Hotels Visualized',
            description: 'How many hotels are available to house inmates?',
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
            id: 'our-plan-jobs',
            title: 'Decarceration During COVID: Jobs in Damaged Industries',
            description: 'The other facet of our plan is to employ decarcerated people in industries hardest hit by the pandemic. As these industries have little money to pay employees, we plan to redirect the massive amount of money saved by decarcerating these people into providing them a living wage. How much money is that? Glad you asked.',
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
            id: 'our-plan-jobs2',
            title: 'How Much Does a Single Prisoner Cost?',
            description: 'This visualization shows the average annual cost of keeping a person imprisoned (discounting novel costs in the pandemic such as testing and healthcare).',
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
            id: 'our-plan-jobs4',
            title: 'How many jobs are available in different industries?',
            description: 'This visualization shows how many jobs are available in different industries hardest hit by the pandemic.',
            is_graph: true,
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
            id: 'finance-breakdown',
            title: 'Finance Breakdown',
            description: 'How do savings by prisons compare with the cost to house and employee decarcerated people?',
            is_graph: true,
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
            id: 'conclusion',
            title: 'Conclusion',
            description: 'conclusion',
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
        }
    ]
};
