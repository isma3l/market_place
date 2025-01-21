import moment from 'moment';

export const formatTime = (milliseconds: number) => moment.utc(milliseconds).format('HH:mm');
