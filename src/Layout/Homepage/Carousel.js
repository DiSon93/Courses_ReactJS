import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import BeenhereIcon from '@material-ui/icons/Beenhere';


export default function Carousel() {
    const [color, setColor] = useState('#f00')
    const handleChange =(evt) => {
        setColor(evt.target.value)
    }
    const useStyle = makeStyles((theme) => ({

        label: {
            color: color,

        },
        button: {
            margin: theme.spacing(1), 
        },
    }));


    const classes = useStyle();


    // render() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">

                <div className="carousel-item active">
                    <img className="d-block w-100" src="img/hero-bg.jpg" alt="First slide" />
                    <div className="carousel-info">
                        <h2>Unleash Your Learning Online</h2>
                        <p>Futureproof your business with sustainable, scalable online learning. More than just an authoring platform.</p>
                        <p>Book a Tailored Demo and start your Free Trial Today.</p>
                        <Button variant="outlined" color="primary" className={classes.label}>Take a course</Button>
                        <Button
                            variant="contained"

                            color="secondary"
                            className={classes.button}
                            startIcon={<KeyboardVoiceIcon />}
                        >
                            Talk
      </Button>
                        <BeenhereIcon color="primary" fontSize="large" />
                        <select name="" id="" onChange={handleChange}>
                            <option value="Red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="black">Black</option>
                        </select>

                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="img/cover.jpg" alt="Second slide" />
                    <div className="carousel-info">
                        <h2>Unleash Your Learning Online</h2>
                        <p>Futureproof your business with sustainable, scalable online learning. More than just an authoring platform.</p>
                        <p>Book a Tailored Demo and start your Free Trial Today.</p>
                        <Button variant="contained" color="primary">Take a course</Button>
                        <Button
                            variant="contained"

                            color="secondary"
                            className={classes.button}
                            startIcon={<KeyboardVoiceIcon />}
                        >
                            Talk
      </Button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="img/cathy-bg2.jpg" alt="Third slide" />
                    <div className="carousel-info">
                        <h2>Unleash Your Learning Online</h2>
                        <p>Futureproof your business with sustainable, scalable online learning. More than just an authoring platform.</p>
                        <p>Book a Tailored Demo and start your Free Trial Today.</p>
                        <Button variant="outlined" color="primary" className={classes.label}>Take a course</Button>
                        <Button
                            variant="contained"

                            color="secondary"
                            className={classes.button}
                            startIcon={<KeyboardVoiceIcon />}
                        >
                            Talk
      </Button>

                    </div>
                </div>

            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
        </div>



    )
    // }
}