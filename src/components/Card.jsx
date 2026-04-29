function Card({ title, description, image }) {
  return (
    <div className="card shadow-lg border-0 rounded-4 overflow-hidden hover:scale-105 transition duration-300">

      <img
        src={image}
        alt={title}
        className="card-img-top h-48 object-cover"
      />

      <div className="card-body text-center">

        <h5 className="card-title fw-bold text-primary">
          {title}
        </h5>

        <p className="card-text text-muted">
          {description}
        </p>

        <button className="btn btn-primary rounded-pill px-4">
          Learn More
        </button>

      </div>
    </div>
  );
}

export default Card;