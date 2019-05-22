import React from "react"
import Particles from "react-particles-js"


const style = ({
  particle: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: '-2'
  }
})
const Particle = () => (
  <Particles style={style.particle} params={{
                "particles": {
                    "number": {
                        "value": 60,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                    },
                    "circle": {
                        "nb_sides":5
                    },
                    "move": {
                        "enable": true,
                        "direction": "top",
                        "straight": false,
                        "bounce": false,
                        "speed": .9,
                        "out_mode": "out"
                    },
                    "size": {
                        "value": 1
                    },
                    "opacity": {
                        "value": 4,
                        "anim": {
                            "enable": true
                        }
                    }
                },
                fps_limit: 60,
                retina_detect: 3
            }}/>
)

export default Particle;
