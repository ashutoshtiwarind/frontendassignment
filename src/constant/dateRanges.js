import moment from 'moment';

export const TODAY = moment();
export const BEFORE_30_DAYS = moment().subtract(29, 'days');

export const ALL_RANGES = {
  'Today': [moment(TODAY).startOf('day'), moment(TODAY).endOf('day')],
}