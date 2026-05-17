import { use } from "react";
import Card from "../UI/Card";

const booksPromise = fetch("/data/booksData.json").then((res) => res.json());

export default function AllBooks() {
  const books = use(booksPromise);

  console.log(books);

  return (
    <div className="my-12 flex justify-center items-center">
      <h2 className="text-center text-2xl font-bold">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <Card key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
}
