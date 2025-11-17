import ListMovie from "@/components/movies/list_movie";

export default function MovieShowing() {
  const url = 'https://6900a8ddff8d792314bade49.mockapi.io/api/movie'
  return (
    <div className=" mt-8">
      <div className="max-w-[1050px] m-0 mx-auto">
        <h1 className="text-2xl font-bold  pb-[15px] border-b-4 border-b-black">
          Phim Đang Chiếu
        </h1>
        <ListMovie url={url}/>
      </div>
    </div>
  );
}
