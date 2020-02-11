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
            <button>Plan Your Itenirary</button>
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
                {heroimg: "eo_collage_1.jpg"},
                {heroimg: "eo_collage_2.jpg"},
                {heroimg: "eo_collage_3.jpg"},
                {heroimg: "eo_collage_4.jpg"},
            ],
            intro : {
                title: "Explore Eastern Ontario",
                text: `Looking for a great place to visit? Eastern Ontario should be near the top of your list! It has a
                diverse ancestry including United Empire Loyalists, French Canadian, Irish & Scottish, so if you
                are a history buff, there are museums, historic sites and other heritage and pioneer locations
                galore.`
            },
            attractdata : [
                { name: "Advntures", icon: "adventure.svg", desc:  `Eastern Ontario is known for its white
                water rafting but you can also find ATVs,
                adventure parks, ropes challenges,
                canoeing & kayaking trips and
                fascinating 1000 Islands boat cruises. If
                you like adrenaline, Eastern Ontario has
                lots to offer.`},
                { name: "Festivals", icon: "festivals.svg", desc: `There are always events to enjoy in the
                Prince Edward County, 1000 Islands,
                Gananoque, Belleville, Brockville,
                Kingston & Cornwall areas. You can
                enjoy Dragon Boats,antique cars at the
                Odessa Car Show, or rock out at a music
                festival.`},
                { name: "Sightseeing", icon: "sightseeing.svg", desc: `Take a wine tour or sign up to learn
                about Kingston’s Ghosts or take a
                traditional city tour. From walking and
                trolley tours, to buses, planes and
                helicopter tours, you won’t miss a thing in
                Eastern Ontario.`},
                { name: "Fishing & Hunting", icon: "fish.svg", desc: `The Ottawa Valley & 1000 Islands have
                endless fishing opportunities. Tip: Check
                the OFAH site for family fishing weekends
                that are license free or to borrow fishing
                equipment.`},
            ]
        }
    }
}