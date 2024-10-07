
export default function Home() {
  return (
    <div className="h-screen">
      <video
        className="h-full object-cover"
        src="./NikkaWhisky.mp4"
        autoPlay
        muted
        loop
        playsInline
        ></video>
    </div>
  );
}
