function VideoModal({ open, onClose, videoUrl }) {
  if (!open) return null;

  return (
    <div className="video-modal-backdrop" onClick={onClose}>
      <div
        className="video-modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="video-close-btn" onClick={onClose}>
          <i className="bi bi-x-lg" />
        </button>

        <div className="ratio ratio-16x9">
          <iframe
            src={videoUrl}
            title="Trailer"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default VideoModal;