import mongoose from 'mongoose';
import cuid from 'cuid';

const Schema = mongoose.Schema;

const listSchema = new Schema({
  title: { type: 'String', required: true },
  content: { type: 'String', required: true },
  theme: { type: 'String', enum: [ "Politics", "Science", "Technology", "Funny", "Poetry", "Travel" ], required: true },
  likes: { type: 'Number', default: 0 },
  dislikes: { type: 'Number', default: 0  },
  author: { type: 'String', default: 'My' },
  slug: { type: 'String', required: true },
  cuid: { type: 'String', default: cuid(), required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true }
});

export default mongoose.model('List', listSchema);
