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
                {heroimg: "no_collage.jpg"}
            ],
            intro : {
                title: "Explore Northern Ontario",
                text: `Northern Ontario is filled with untamed wilderness, opportunities for Outdoor Adventure and
                discovering our heritage. Experience a Pow wow or mine your own amethysts near Thunder
                Bay or learn about the fur trade at an authentic site of the Hudson Bay Company.`
            },
            attractdata : [
                { name: "Advntures", icon: "adventure.svg", desc:  `Northern Ontario is a vast wilderness,
                interspersed with populated cities. Take
                advantage of all nature has to offer,
                from whitewater rafting to zip lining at
                Canada's longest zipline, to treetop
                treks, to salmon fishing.`},
                { name: "Festivals", icon: "festivals.svg", desc: `You can participate in a pow wow near
                Thunder Bay or Manitoulin Island, watch
                lumberjacks compete in Kapuskasing, go
                to a music festival in Whitestone, cheer
                dragon boats in North Bay, take a polar
                bear swim in Sault Ste Marie or enjoy a
                film festival in Sudbury.`},
                { name: "Sightseeing", icon: "sightseeing.svg", desc: `In Northern Ontario, the best way to see
                the vast spaces is by air. In Cochrane, Red
                Lake, North Bay, Sault Ste Marie, Sudbury
                & Thunder Bay, you can also find tours by
                water, and by foot. Plane and helicopter
                tours will make sure you don't miss a
                thing.`},
                { name: "Fishing & Hunting", icon: "fish.svg", desc: `Whether you’re with a group of friends,
                family, kids or simply enjoying a day on
                your own, fishing is peaceful, fun and the
                results can be delicious!`},
            ]
        }
    }
}