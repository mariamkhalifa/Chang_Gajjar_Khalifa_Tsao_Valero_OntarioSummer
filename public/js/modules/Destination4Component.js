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
                {heroimg: "co_collage_1.jpg"},
                {heroimg: "co_collage_2.jpg"},
                {heroimg: "co_collage_3.jpg"},
                {heroimg: "co_collage_4.jpg"},
            ],
            intro : {
                title: "Explore Central Ontario",
                text: `Enjoy cities, towns and the great outdoors in Central Ontario including Muskoka, Algonquin,
                Georgian Bay, Collingwood, Bala, Barrie, Peterborough, Lake Simcoe, Kawarthas, Haliburton
                and the sandy beaches of Cobourg and Presqu'ile Provincial Park.`
            },
            attractdata : [
                { name: "Adventures", icon: "adventure.svg", desc:  `Much of the Central Ontarioregion is
                known as ‘Cottage Country’ and the
                reason people have cottages there is to
                take advantage of the gorgeous scenery.
                Go whitewater rafting, zip lining,
                parasailing & more.`},
                { name: "Festivals", icon: "festivals.svg", desc: `Central Ontario has events, festivals, &
                shows year round. Fill your belly at a rib
                or food fest, compare Elvis look-alikes in
                Collingwood, admire pristine antique
                cars in Barrie, or enjoy a music festival in
                Peterborough, Muskoka or Georgian Bay.`},
                { name: "Sightseeing", icon: "sightseeing.svg", desc: `Interested in visiting Muskoka, Algonquin,
                Georgian Bay, Collingwood, Barrie,
                Peterborough, Lake Simcoe, Kawarthas or
                Haliburton.`},
                { name: "Fishing & Hunting", icon: "fish.svg", desc: `Book a fly-in fishing charter for something
                a bit more adventurous. Wherever you
                are, you can cast your line for a big one in
                Central Ontario, including the Kawarthas,
                Lake Simcoe, Lake Couchiching and more!`},
            ]
        }
    }
}