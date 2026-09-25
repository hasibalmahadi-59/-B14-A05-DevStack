function TechnologyCard({ technology, isAdded, onAdd }) {
  const {
    name,
    category,
    description,
    icon,
    rating,
    difficulty,
    badge,
  } = technology;

  return (
    <article className="technology-card">
      <div className="technology-card-top">
        <img
          src={icon}
          alt={`${name} logo`}
          className="technology-icon"
        />

        <span className="technology-badge">
          {badge}
        </span>
      </div>

      <h3>{name}</h3>

      <p className="technology-description">
        {description}
      </p>

      <div className="technology-meta">
        <span className="category-chip">
          {category}
        </span>

        <span className="difficulty">
          {difficulty}
        </span>

        <span className="rating">
          <span className="star">★</span>
          {rating}
        </span>
      </div>

      <button
        className={`add-stack-btn ${isAdded ? "added" : ""}`}
        onClick={() => onAdd(technology)}
        disabled={isAdded}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}

export default TechnologyCard;