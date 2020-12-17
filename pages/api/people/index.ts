import { people } from '../../../datas/people'
export default function handler(req, res) {
  res.status(200).json(people)
}