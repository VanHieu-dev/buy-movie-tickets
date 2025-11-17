import { TypeMovie } from '@/types/alltypes';
import Movie from './movie';

export default async function ListMovie({ url }: { url: string }) {
  let data = [];
  try {
    const res = await fetch(url);
    data = await res.json();
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="movie flex flex-wrap">
      {data.map((movie: TypeMovie) => (
        <Movie key={movie.id} movie={movie}></Movie>
      ))}
    </div>
  );
}
