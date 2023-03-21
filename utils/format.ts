import moment from "moment";

export const formatDate = (date: Date | number, format:string): string => {
  return moment(date).format(format);
};
