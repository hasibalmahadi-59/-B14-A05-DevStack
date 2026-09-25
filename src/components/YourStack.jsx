function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="your-stack">
      <div className="stack-header">
        <h2>Your Stack</h2>

        <p>
          {stack.length}{" "}
          {stack.length === 1 ? "Technology" : "Technologies"} Selected
        </p>
      </div>

      {stack.length === 0 ? (
        <div className="empty-stack">
          <p>No technologies selected yet.</p>

          <div className="empty-stack-box">
            Your stack is empty.
          </div>
        </div>
      ) : (
        <>
          <div className="stack-items">
            {stack.map((technology) => (
              <div className="stack-item" key={technology.id}>
                <img
                  src={technology.icon}
                  alt={`${technology.name} logo`}
                />

                <div className="stack-item-info">
                  <h3>{technology.name}</h3>
                  <p>{technology.category}</p>
                </div>

                <button
                  className="remove-stack-btn"
                  onClick={() => onRemove(technology.id)}
                  aria-label={`Remove ${technology.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <button
            className="remove-all-btn"
            onClick={onRemoveAll}
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}

export default YourStack;