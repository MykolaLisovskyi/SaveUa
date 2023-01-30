let tinySlider = tns({
  container: ".my_tiny_slider",
  "slideBy": "1",
  "speed": 700,
  "nav": true,
  autoplay: true,
  controls: false,
  autoplayButtonOutput: false,
  items: 4,
  responsive: {
    1300: {
      items: 4,
      gutter: 94,
    },
    1050: {
      items: 3,
      gutter: 94
    },
    650: {
      items: 2,
      gutter: 94
    },
    100: {
      items: 1,
      gutter: 94
    },
  }
})
