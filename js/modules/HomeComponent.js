export default {
    template: `
    <div>
        <section class="hero">
            <h1>Find Yourself At Home</h1>
            <ul class="social-media">
                <li><a href=# target="_blank"><i class="fab fa-instagram"></i></a></li>
                <li><a href=# target="_blank"><i class="fab fa-twitter"></i></a></li>
                <li><a href=# target="_blank"><i class="fab fa-facebook"></i></a></li>
            </ul>
            <i class="fa fa-angle-down"></i>
        </section>
        <section class="about">
            <h1>About Summer in Ontario</h1>
            <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
        </section>
        <section class="destinations-wrapper">
            <h1>Where to next?</h1>
            <h2>Ontario is Yours to Explore!</h2>
            <router-link to="/destinations">
                <img src="images/1.jpg" alt="">
                <p>Greater Toronto Area</p>
            </router-link>
            <router-link to="/destinations">
                <img src="images/2.jpg" alt="">
                <p>Niagara Region</p>
            </router-link>
            <router-link to="/destinations">
                <img src="images/3.jpg" alt="">
                <p>Eastern Ontario</p>
            </router-link>
            <router-link to="/destinations">
                <img src="images/4.jpg" alt="">
                <p>Central Ontario</p>
            </router-link>
            <router-link to="/destinations">
                <img src="images/5.jpg" alt="">
                <p>Northern Ontario</p>
            </router-link>
            <router-link to="/destinations">
                <img src="images/6.jpg" alt="">
                <p>South Western Ontario</p>
            </router-link>
        </section>
    </div>
    `,

    created: {
        
    },

    data: {
        
    }
}
