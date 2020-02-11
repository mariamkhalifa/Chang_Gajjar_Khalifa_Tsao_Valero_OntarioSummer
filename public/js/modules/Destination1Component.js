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
                {heroimg: "gta_collage_1.jpg"},
                {heroimg: "gta_collage_2.jpg"},
                {heroimg: "gta_collage_3.jpg"},
                {heroimg: "gta_collage_4.jpg"},
            ],
            intro : {
                title: "Explore Greater Toronto",
                text: `With so much to do in Canada's biggest city, it’s almost impossible to decide what to do first
                when planning a trip to Toronto. Toronto offers so many great local attractions and activities,
                there's something for every traveller to enjoy!`
            },
            attractdata : [
                { name: "Advntures", icon: "adventure.svg", desc:  `If energetic outdoor activities are your
                summer fun, you'll find an adrenaline
                rush in Toronto, Mississauga, Markham,
                Oakville, Richmond Hill & Pickering.
                You'll certainly find a thrill here.`},
                { name: "Festivals", icon: "festivals.svg", desc: `On virtually every weekend all year long,
                there is a show or event in Toronto,
                Mississauga, Markham, Oakville,
                Richmond Hill or Pickering. You can be a
                chili tester at a chili fest, compare Elvis
                look-alikes, or enjoy a music festival.`},
                { name: "Sightseeing", icon: "sightseeing.svg", desc: `You will be surprised by the number of
                places to explore for sightseeing, eco
                tours & attractions across Toronto,
                Mississauga, Markham, Oakville,
                Richmond Hill & Pickering.`},
                { name: "Fishing & Hunting", icon: "fish.svg", desc: `It was THIS big! If reeling one in is your
                favourite thing to do, you don't have to
                leave Toronto for a fishing adventure. Try
                a fishing charter or fishing resort/lodge
                and cast your line for a big one!`},
            ]
        }
    }
}