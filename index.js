/**
    entry here
    http://scrollmagic.io/

    
**/

import ScrollMagic from "scrollmagic";
import "scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min";
import "./src/main.scss";

// 1. create controller
var controller = new ScrollMagic.Controller({ addIndicators: false });

// 2.  creat scenes
new ScrollMagic.Scene({
  triggerElement: ".red-section",
  duration: "100",
  offset: 100,
  //   reverse: false,
})
  .setClassToggle(".red-section", "red")
  .addIndicators({ name: "1. (add class red)" })
  .addTo(controller);

new ScrollMagic.Scene({ triggerElement: ".green-section" })
  .setClassToggle(".green-section", "green")
  .addIndicators({ name: "2. (add class green)" })
  .addTo(controller);

new ScrollMagic.Scene({ triggerElement: ".blue-section" })
  .setClassToggle(".blue-section", "blue")
  .addIndicators({ name: "3. (add class blue)" })
  .addTo(controller);
