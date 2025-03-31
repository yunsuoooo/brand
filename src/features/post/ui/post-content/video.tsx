import { VideoContentType } from "../../model/post-types";

export default function Video({ url, title, description }: VideoContentType) {
  return (
    <div className="my-8">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <iframe
          src={url}
          title={title || "Embedded video"}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {title && (
        <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
      )}
      {description && <p className="mt-2 text-gray-600">{description}</p>}
    </div>
  );
}
