export default {
    template: `
    <div>
        <section class="hero">
            <h1>Visit Ontario</h1>
            <h1>Find Yourself At Home</h1>
            <ul class="social-media">
                <li><a href=# target="_blank"><i class="fab fa-instagram"></i></a></li>
                <li><a href=# target="_blank"><i class="fab fa-twitter"></i></a></li>
                <li><a href=# target="_blank"><i class="fab fa-facebook"></i></a></li>
            </ul>
            <i class="fa fa-angle-down fa-2x"></i>
        </section>
        <section id="about" class="about">
            <h1>About Summer in Ontario</h1>
            <ul class="about-p">
                <li>{{ p1 }}</li>
                <li>{{ p2 }}</li>
                <li>{{ p3 }}</li>
            </ul>
        </section>
        <section id="destinations" class="destin-wrapper">
            <video class="video" muted loop controls preload="metadata">
                <source src="public/video/video.mp4" type="video/mp4">
            </video>
            <h1>Where to Next?</h1>
            <h2>Ontario is Yours to Explore!</h2>
            <div class="destin-links">
                <router-link to="/destination1">
                    <img class="destin-img" src="public/images/tile_1.jpg" alt="GTA image">
                    <h3>Greater Toronto Area</h3>
                </router-link>
                <router-link to="/destination2">
                    <img class="destin-img" src="public/images/tile_2.jpg" alt="niagara image">
                    <h3>Niagara Region</h3>
                </router-link>
                <router-link to="/destination3">
                    <img class="destin-img" src="public/images/tile_3.jpg" alt="eastern ontrio image">
                    <h3>Eastern Ontario</h3>
                </router-link>
                <router-link to="/destination4">
                    <img class="destin-img" src="public/images/tile_4.jpg" alt="central ontario image">
                    <h3>Central Ontario</h3>
                </router-link>
                <router-link to="/destination5">
                    <img class="destin-img" src="public/images/tile_5.jpg" alt="northern ontario image">
                    <h3>Northern Ontario</h3>
                </router-link>
                <router-link to="/destination6">
                    <img class="destin-img" src="public/images/tile_6.jpg" alt="south western ontrio image">
                    <h3>South Western Ontario</h3>
                </router-link>
            </div>
        </section>
    </div>
    `,

    data: function() {
        return {
            p1: `Ontario is the second largest province in Canada, covering an area of more than one million
            square kilometers; it's bigger than the countries of Spain and France combined! From the wild
            and craggy beauty of the northern Canadian Shield to the lakes and forests of cottage country;
            from the rolling hills of the Ontario farm belt to the scenic wonders of the Niagara Escarpment
            - Ontario rivals any place on earth for diversity and natural wonders.`,
            p2: `Home to more than 13.5 million people, the province is a multicultural mosaic whose citizens
            hail from all corners of the globe. Although English and French are Ontario's official
            languages, there are over 100 other different dialects and languages also spoken.
            Ontario's food scene is just one of the major beneficiaries of multiculturalism, offering residents
            and visitors to the province an almost unlimited choice of international cuisines served at
            restaurants.`,
            p3: `Another bonus to the province is the countless festivals, fairs, parades, and exhibitions taking
            place throughout the year that celebrate many of the different cultures represented here, such
            as the Toronto Caribbean Carnival, Jambana One World Festival in Brampton, Italfest and
            MuslimFest in Mississauga, Oktoberfest in Kitchener-Waterloo, and the Orillia Highland
            Games, to name just a few.`
        }
    }

}