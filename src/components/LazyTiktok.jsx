import React from "react";
import { TikTokEmbed } from "react-social-media-embed";
import { useInView } from "react-intersection-observer";

const LazyTiktok = ({ url }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className="min-h-[315px] w-full flex justify-center items-center">
      {inView && <TikTokEmbed url={url} width={325} />}
    </div>
  );
};

export default LazyTiktok;
