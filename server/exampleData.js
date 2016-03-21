import List from './models/list';

export default function () {
  List.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const content1 = `test1`;

    const content2 = `test2`;

    const list1 = new List({ title: 'Hello Worl', slug: 'hello-worl', cuid: 'cikqgkv4q01ck7453ualdn3hd', content: content1 });
    const list2 = new List({ title: 'By Worl', slug: 'by-worl', cuid: 'cikqgkv4q01ck7453ualdn3hf', content: content2 });

    List.create([list1, list2], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
