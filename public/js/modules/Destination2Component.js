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
            <div v-for="(item, index) in attractdata" class="attract"
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
                {heroimg: "niagara_collage.jpg"},
            ],
            intro : {
                title: "Explore Niagara Region",
                text: `Whatever your travel plans, the Niagara region is sure to please year-round. Be sure to check
                our Niagara events calendar for current events, and plan your next great adventure to
                Niagara.`
            },
            attractdata : [
                { name: "Advntures", icon: "adventure.svg", desc:  `If outdoor activities are your thing, you'll
                find loads of adventures in the Niagara
                Region. Try helicopter tours over
                Niagara Falls or boat rides under the
                Falls. There is a lot of outdoor fun in
                Niagara Region!`},
                { name: "Festivals", icon: "festivals.svg", desc: `This gorgeous region is known for award
                winning wines including the famous
                Icewine, as well as foods inspired by the
                grape. It has several food and wine
                festivals celebrating both.`},
                { name: "Sightseeing", icon: "sightseeing.svg", desc: `Niagara-on-the-Lake, Welland, St.
                Catharines, Vineland and Fort Erie.
                Choose wine and food tours, to
                Underground Railroad tours to ghost
                tours. Take a helicopter tour over Niagara
                Falls to make sure you don't miss a thing.`},
                { name: "Fishing & Hunting", icon: "fish.svg", desc: `Enjoy a day at a stocked fishing pond with
                the kids or a fishing charter for something
                a bit more adventurous in Niagara Region.
                Some consider the Niagara River the best
                steelhead river in North America!`},
            ]
        }
    }
}