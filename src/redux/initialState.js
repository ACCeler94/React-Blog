const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title 1',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      author: 'John Doe',
      category: 'Sport'
    },
    {
      id: '2',
      title: 'Article title 2',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      author: 'John Doe',
      category: 'News'
    },
    {
      id: '3',
      title: 'Article title 3',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-04-2021'),
      author: 'John Doe',
      category: 'Sport'
    },
    {
      id: '4',
      title: 'Article title 4',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2023'),
      author: 'xyz',
      category: 'Movies'
    },
  ],
  categories: [
    { name: 'Sport' },
    { name: 'News' },
    { name: 'Movies' },
  ]
};

export default initialState;