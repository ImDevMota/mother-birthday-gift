function PlayerSpotify() {
  return (
    <div className="flex absolute left-1/2 -translate-x-1/2 mt-[1.5rem] w-[85%]">
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/track/6FuJokk9FHx0E00SZ8ib8X?utm_source=generator"
        width="100%"
        height="132"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default PlayerSpotify;
