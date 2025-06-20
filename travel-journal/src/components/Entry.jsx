import cover from '../assets/mount-fuji.png'
import mark from '../assets/location-mark.svg'

function Entry() {
    return (
        <section className='card'>
            <img src={cover} alt="Picture of the location" />
            <div className='card-wrapper'>
                <img src={mark} alt="location marker icon" />
                <span className='card-location'>Japan</span>
                <a className='card-link' href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" target="_blank">View on Google Maps</a>
                <h2 className='card-title'>Mount Fuji</h2>
                <h4 className='card-date'>12 Jan, 2021 - 24 Jan, 2021</h4>
                <p className='card-text'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </section>
    )
}

export default Entry