import moment from 'moment';
import 'moment/locale/fr';

const getFirstWeekOfMonth = () => {
  const weekdays = ['lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim'];
  const firstDayOfMonth =
    moment()
      .startOf('month')
      .isoWeekday() - 1;
  const remainingDays = [];
  const firstWeekOfMonth = weekdays.filter((day, index) => {
    if (index < firstDayOfMonth) {
      remainingDays.push(day);
      return false;
    }
    return true;
  });
  return firstWeekOfMonth.concat(remainingDays);
};

export default getFirstWeekOfMonth;
