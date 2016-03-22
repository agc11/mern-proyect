import Article from './models/article';

export default function () {
  Article.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const content1 = `test1`;

    const content2 = `test2`;

    const article1 = new Article({ title: 'Hello Worl', slug: 'hello-worl', cuid: 'cikqgkv4q01ck7453ualdn3hd', content: content1 });
    const article2 = new Article({ title: 'By Worl', slug: 'by-worl', cuid: 'cikqgkv4q01ck7453ualdn3hf', content: content2 });

    Article.create([article1, article2], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
