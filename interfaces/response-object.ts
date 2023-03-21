export default interface ResponseOutput<T> {
  statusCode: number;
  success: boolean;
  error?: any;
  data?: T;
}
