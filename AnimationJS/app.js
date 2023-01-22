new fullpage('#fullpage', {
    autoScrolling: true,
    //navigations, puedes agregar mas cosas
    navigation: true,
    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        const title = section.querySelector("h1");
        const tl = new TimelineMax({ delay: 0.5 });
        tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1});

        /*si queremos algo asi para la otra parte podemos hacer otro 
        if statement para la siguiente hoja*/

        if (destination.index === 1) {
            const chairs = document.querySelectorAll('.chair');
            const description = document.querySelector('.description');

            tl.fromTo(chairs, 0.5, {x: '100%'}, {x:'-10%'})
            .fromTo(description, 0.5, {y:"50", opacity: 0}, {y: 0, opacity: 1})
            .fromTo(chairs[0], 2, {opacity: 1}, {opacity: 1})
            .fromTo(chairs[1], 2, {opacity: 0}, {opacity: 1})
            .fromTo(chairs[2], 2, {opacity: 0}, {opacity: 1});
            
        }
    }
});
