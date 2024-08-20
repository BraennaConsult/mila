import { Header } from "../components/Header";

export default function VideoPage() {

    return(
        <>
            <Header black />
            <main className="bg-[#F7F6F6] flex flex-col items-center justify-center min-h-screen pt-[80px] px-8 pb-12">
                <div className="w-full aspect-w-16 aspect-h-9">
                    <iframe
                        src="https://player.vimeo.com/video/1000365906"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title="Vimeo Video"
                        className="w-full h-full rounded-lg shadow-lg"
                    ></iframe>
                </div>
            </main>
        </>
    )
}