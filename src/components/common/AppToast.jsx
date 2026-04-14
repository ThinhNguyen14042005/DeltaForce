function AppToast({ show, title, message, onClose }) {
  if (!show) return null;

  return (
    <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 3000 }}>
      <div className="toast show text-white bg-dark border border-secondary">
        <div className="toast-header bg-black text-white border-secondary">
          <strong className="me-auto">{title}</strong>
          <button
            type="button"
            className="btn-close btn-close-white"
            onClick={onClose}
          />
        </div>

        <div className="toast-body">{message}</div>
      </div>
    </div>
  );
}

export default AppToast;