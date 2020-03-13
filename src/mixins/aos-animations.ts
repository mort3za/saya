// using version 3 beta
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  mounted() {
    // @ts-ignore
    this.aos('init');
    setTimeout(() => {
      // @ts-ignore
      this.aos('refresh');
    }, 4000);
  },
  methods: {
    aos(method) {
      // documentation: https://github.com/michalsnik/aos
      // demo: https://michalsnik.github.io/aos/
      AOS[method]({
        once: false,
        delay: 0,
        easing: 'fade-up',
        anchorPlacement: 'top-bottom',
        duration: 700
        // startEvent: 'DOMContentLoaded'
      });
    }
  }
};
