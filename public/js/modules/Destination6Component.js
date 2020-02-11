export default {
    props: {
        icon: String,
        heroimg: String
    },

    template: `
    <section class="destin-comp">
        <img v-for="(img, index) in herodata" 
        class="destin-hero"
        :key="index"
        :src="'public/images/' + img.heroimg" alt="hero image">
        <div class="intro">
            <h1>{{ intro.title }}</h1>
            <p>{{ intro.text }}</p>
            <a href="https://www.inspirock.com/canada/ontario-trip-planner">Plan Your Itinerary</a>
        </div>
        <div class="attract">
            <div v-for="(item, index) in attractdata" class="attract-wrapper"
            :key="index">
                <div class="attract-item">
                    <img :src="'public/images/' + item.icon" alt="icon">
                    <h3>{{ item.name }}</h3>
                </div>
                <p>{{ item.desc }}</p>
            </div>
        </div>
    </section>
    `,

    data: function() {
        return {
            herodata: [
                {heroimg: "swo_collage_1.jpg"},
                {heroimg: "swo_collage_2.jpg"},
                {heroimg: "swo_collage_3.jpg"},
                {heroimg: "swo_collage_4.jpg"},
            ],
            intro : {
                title: "Explore South Western Ontario",
                text: `View the stunning late summer migration of monarch butterflies, or track waterfowl in the
                region's wetlands. Head to St. Jacobs to see traditional Mennonite horse-drawn buggies, or
                plan your visit to coincide with one of the SW region's many Festivals, Fairs & Shows.`
            },
            attractdata : [
                { name: "Adventures", icon: "adventure.svg", desc:  `While we say 'adventures', not all of
                these are full-on adrenaline rush
                experience. But they are outdoor and
                Southwestern Ontario has lots to choose
                from. So get outdoors and have fun!`},
                { name: "Festivals", icon: "festivals.svg", desc: `St. Jacob's, Stratford, Waterloo, Perth,
                Guelph, Elora-Fergus, Burlington,
                Hamilton, Sarnia and London are the
                main destinations for festivals & events in
                Southwestern Ontario but you'll find
                smaller events everywhere.`},
                { name: "Sightseeing", icon: "sightseeing.svg", desc: `Choose a walking or bus tour to see it all.
                From Shakespeare tours to Mennonite
                horse-drawn buggy tours to traditional
                sightseeing tours, and even plane and
                helicopter tours, you’ll make sure you
                don't miss a thing.`},
                { name: "Fishing & Hunting", icon: "fish.svg", desc: `If reeling one in is your favourite thing to
                do, Southwestern Ontario has plenty of
                suggestions for fishing adventures. Bring
                the kids to a well-stocked public fishing
                pond or take some friends on a fly-in
                fishing adventure.`},
            ]
        }
    }
}