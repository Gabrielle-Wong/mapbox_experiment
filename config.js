var config = {
    // Setup here:
    // style: 'mapbox://styles/mapbox/standard',
    style: 'mapbox://styles/gabrielle-wong/clx9q7dvz00b501mwascmggrn',
    accessToken: 'pk.eyJ1IjoiZ2FicmllbGxlLXdvbmciLCJhIjoiY2x3c3ExbmZyMGR5bjJrcHd2azBmbzFvMiJ9.8-S_nj9d_ib2Z2Kf67xe1w',
    showMarkers: false,
    markerColor: '#FFFFFF',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,

    // Story Details
    title: 'TITLE STYLE 2 (config)',
    subtitle: 'Experiments with Mapbox Storytelling',
    byline: 'Projecto Juaricua: A Housing Justice Lab ',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    
    // Chapter Details
    chapters: [
        {
            // Template Chapter
            id: 'chapter_id',
            alignment: 'left',
            hidden: false,
            title: 'Standard Chapter',
            // image: './images/tulum_beach.jpg',
            description: 'Text for the chapter goes here. <br> <br> Use a br wrapped in <> for a second paragraph.',
            
            location: {
                center: [-99.17439, 19.42926],
                zoom: 14.25,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
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
            // Template Chapter
            id: 'chapter_id_2',
            alignment: 'left',
            hidden: false,
            title: 'Standard Chapter 2.0',
            // image: './images/tulum_beach.jpg',
            description: 'Text for the chapter goes here. <br> <br> Use a br wrapped in <> for a second paragraph.',
            
            location: {
                center: [-99.17439, 19.42926],
                zoom: 14.25,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
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
            // Template Center Chapter
            id: 'header_chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Chapter with Image',
            image: './images/tulum_beach.jpg',
            // description: 'Text for the chapter',
            location: {
                center: [-99.13895, 19.41032],
                zoom: 12.23,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
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
            // Map Only Chapter
            id: 'map_only_chapter',
            alignment: 'fully',
            hidden: true,
            title: 'Heading-Style Chapter',
            image: './images/tulum_beach.jpg',
            // description: 'Text for the chapter',
            location: {
                center: [-99.13895, 19.41032],
                zoom: 12.23,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
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
            
            id: 'cuaoct23_point',
            alignment: 'left',
            hidden: false,
            title: 'Airbnbs in Cuauhtémoc, Oct 2023',
            // image: './images/tulum_beach.jpg',
            description: 'This is what the distribution looks like as a dot  map. <br> TODO: add a border for the boundary.',
            
            location: {
                center: [-99.16667, 19.43398],
                zoom: 12.15,
                pitch: 7.00,
                bearing: 10
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'cua-oct23',
                     opacity: 1,
                     duration: 2000
                 }
            ],
            onChapterExit: [
                {
                    layer: 'cua-oct23',
                    opacity: 0,
                    duration: 2000
                }
            ]
        },

        {
            
            id: 'juaoct23_point',
            alignment: 'left',
            hidden: false,
            title: 'Airbnbs in Colonia Juárez, Oct 2023',
            // image: './images/tulum_beach.jpg',
            description: 'This is what this looks like as a dot distribution map, zoomed into Colonia Juárez. <br> TODO: add a border for the boundary.',
            
            location: {
                center: [-99.17099, 19.42835],
                zoom: 13.54,
                pitch: 7.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'cua-oct23',
                     opacity: 1,
                     duration: 2000
                 }
            ],
            onChapterExit: [
                {
                    layer: 'cua-oct23',
                    opacity: 0,
                    duration: 2000
                }
            ]
        },

        {
            
            id: 'napoles35_point',
            alignment: 'left',
            hidden: false,
            title: 'Pandora (Nápoles 35)',
            image: './images/pandora.png',
            // description: 'This is what this looks like as a dot distribution map, zoomed into Colonia Juárez. <br> TODO: add a border for the boundary.',
            
            location: {
                center: [-99.16086, 19.42733],
                zoom: 18.5,
                pitch: 70,
                bearing: -55.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'napoles35',
                     opacity: 0.8,
                     duration: 2000
                 }
            ],
            onChapterExit: [
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 2000
                }
            ]
        }
    ]
};
