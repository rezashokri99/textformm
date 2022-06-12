
const MainVideo = () => {
    return (
        <div className="overflow-auto mt-20 mx-[14px] border-[5px] border-dashed rounded-[10px] w-11/12 lg:w-[1000px] ">
            <video controls className="w-full">
                <source src={"https://app.tiklearnedu.ir/video2.mp4"} type="video/mp4" />
            </video>
        </div>
    );
}
 
export default MainVideo;