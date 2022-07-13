export default interface Image {
  _id: string;
  title: string;
  description: string;
  tags: [string];
  originalname: string;
  path: string;
  filename: string;
}
