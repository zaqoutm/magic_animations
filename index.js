/**/
/*ENTRY HERE*/
/**/

// import {greet} from './util';
import './src/main.scss';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min';

// TODO: another configurations
// http://scrollmagic.io/
// const controller = new ScrollMagic.Controller({addIndicators: true});
// const scene = new ScrollMagic.Scene({
//     duration: 100,
//     offset: 150
// })
//     .setPin(".secondSection")
//     .addTo(controller);

var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({triggerElement: ".x", duration: 140})
    .setClassToggle(".x", "red")
    .addIndicators({name: "1 - add a class red"})
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: ".y"})
    .setClassToggle(".y", "green")
    .addIndicators({name: "2 - add a class green"})
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: ".z"})
    .setClassToggle(".z", "blue")
    .addIndicators({name: "2 - add a class blue"})
    .addTo(controller);




    // animate color and top border in relation to scroll position
    // .setTween(".z", {borderTop: "30px solid white", backgroundColor: "blue", scale: 0.7})
    // .addIndicators({name: "2 (duration: 300)"})
