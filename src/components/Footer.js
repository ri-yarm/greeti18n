import './Footer.css'
import { DateTime } from 'luxon';

// функция привествует исходя от времени суток
const getGreetingTime = (d = DateTime.now()) => {
	const split_afternoon = 12; // 
	const split_evening = 17; // 
	const currentHour = parseFloat(d.toFormat('hh'));
	
	if (currentHour >= split_afternoon && currentHour <= split_evening) {
		return 'afternoon';
	} else if (currentHour >= split_evening) {
		return 'evening';
  }
	return 'morning';
}


const Footer = ({ translate }) => (
  <div className="Footer">
    <div>{translate('footer.date', { date: new Date(), context: getGreetingTime() })}</div>
  </div>
);

export default Footer;