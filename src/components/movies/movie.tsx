import { TypeMovie } from '@/types/alltypes';
import Image from 'next/image';
export default function Movie({ movie }: { movie: TypeMovie }) {
  return (
    <div className="card w-[260px] pt-2.5 pr-2.5 pb-5 pl-2.5  rounded-[10px]">
      <div className="card-top w-full">
        <Image
          src="https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/6/7/675wx1000h_1.jpg"
          alt="Poster"
          width={190}
          height={260}
          className="w-full h-auto rounded-[10px] object-cover"
        />
      </div>
      <div className="card-bottom">
        <div className="card-title">
          <h3 className="text-[20px] font-bold">{movie.name}</h3>
        </div>
        <div className="card-content">
          <div className="movie-genre">
            <span className="font-bold">Thể loại: </span>
            <span>{movie.category}</span>
          </div>
          <div className="movie-duration">
            <span className="font-bold">Thời lượng: </span>
            <span>{movie.duration} phút</span>
          </div>
          <div className="movie-premiere">
            <span className="font-bold">Khởi chiếu: </span>
            <span>{movie.releaseDate}</span>
          </div>
        </div>
      </div>
      <div>
        <span className="rounded-[10px] bg-[#0e53e7] pt-2 pb-2 pr-5 pl-5 mt-4 text-white font-bold inline-block cursor-pointer">
          MUA VÉ
        </span>
      </div>
    </div>
  );
}
