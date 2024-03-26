import { Book } from "src/app/core/models/book.model";

export const MOCK_BOOKS: Book[] = [
    {
      id: 1,
      book_title: 'The Great Gatsby',
      description: 'A portrait of the Jazz Age in all of its decadence and excess, Gatsby captured the spirit of the author’s generation and earned itself a permanent place in American mythology.',
      author: 'Francis Scott Fitzgerald',
      publish_date: '2018-01-01',
      isbn: '978-0-301-00000-0',
      available: true
    },
    {
      id: 2,
      book_title: '1984',
      description: 'A dystopian social science fiction novel and cautionary tale which is set in a totalitarian society controlled by Big Brother and the Party, written by the British author George Orwell.',
      author: 'George Orwell',
      publish_date: '2018-01-01',
      isbn: '978-0-301-00000-0',
      available: false
    },
    {
      id: 3,
      book_title: 'To Kill a Mockingbird',
      description: 'A novel by Harper Lee published in 1960. Instantly successful, widely read in high schools and middle schools in the USA. It has become a classic of modern American literature.',
      author: 'Harper Lee',
      publish_date: '2018-01-01',
      isbn: '978-0-301-00000-0',
      available: true
    },
  ];
  