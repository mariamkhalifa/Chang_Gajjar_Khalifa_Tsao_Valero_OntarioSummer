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
            <video class="video">
                <source src="video/video.mp4" type="video/mp4">
            </video>
            <h1>Where to next?</h1>
            <h2>Ontario is Yours to Explore!</h2>
            <router-link to="/destinations">
                <img src="public/images/1.jpg" alt="">
                <p>Greater Toronto Area</p>
            </router-link>
            <router-link to="/destinations">
                <img src="public/images/2.jpg" alt="">
                <p>Niagara Region</p>
            </router-link>
            <router-link to="/destinations">
                <img src="public/images/3.jpg" alt="">
                <p>Eastern Ontario</p>
            </router-link>
            <router-link to="/destinations">
                <img src="public/images/4.jpg" alt="">
                <p>Central Ontario</p>
            </router-link>
            <router-link to="/destinations">
                <img src="public/images/5.jpg" alt="">
                <p>Northern Ontario</p>
            </router-link>
            <router-link to="/destinations">
                <img src="public/images/6.jpg" alt="">
                <p>South Western Ontario</p>
            </router-link>
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