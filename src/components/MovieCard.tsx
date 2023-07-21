import Image from "next/image"

export default function MovieCard({ movie }) {
  return (
    <div className="card col-span-12 md:col-span-6 lg:col-span-4 flex gap-2">
      {movie.poster && (
        <Image
          src={movie.poster}
          alt={"Movie Poster"}
          width={100}
          height={100}
          style={{ width: "auto", height: "auto" }}
        />
      )}
      <div>
        <h3 className="font-bold text-gray-900">{movie.title}</h3>
        <p className="text-sm text-gray-600">{movie.plot}</p>
      </div>
    </div>
  )
}
