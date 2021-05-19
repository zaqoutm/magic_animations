import ScrollMagic from "scrollmagic";

const greet = (name) => {
    return 'hello ' + name;
}

const counter = () => {
    let h1 = document.getElementsByTagName('h1')[0]
    let counter = document.getElementById("counter");

    let x = 0;
    let z = x;

    setInterval(() => {
        counter.innerText = ++x
        if (x % 100 === 0) {

            z += 100
            h1.innerText = z
        }
    }, 10)

    const controller = new ScrollMagic.Controller({addIndicators: true});
    const scene = new ScrollMagic.Scene({
        duration: 100,
        offset: 150
    })

        .setPin("#article")
        .addTo(controller);

    console.log(scene)
    console.log(greet('Mo'));

}

export {greet};
