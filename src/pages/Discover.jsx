
import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const Discover = () => {
    const { data, isFetching, error } = useGetTopChartsQuery();
    console.log(data);
    if (isFetching) return <Loader title='Loading Songs...' />;
    if (error) return <Error />;

    return (
        <div className='flex flex-col'>
            <div className='w-full flex justify-between items-center  sm:flex-row mt-4 mb-10'>
                <h2 className='text-white font-bold text-3xl'>Discover Pop</h2>
                <select
                    onChange={() => { }}
                    value=''
                    className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-5'>
                    {genres.map((genre) => (
                        <option key={genre.value} value={genre.value}>
                            {genre.title}
                        </option>
                    ))}
                </select>
            </div>

            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {data?.map((song, i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        i={i} />
                ))}
            </div>


        </div>

    );

}



export default Discover;
