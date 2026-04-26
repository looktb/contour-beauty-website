const PLACE_ID = "ChIJv90Q6dWIsUcRUQ0lnG3bew8";

export default async function handler(req, res) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "Missing API configuration" });
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&language=de&key=${apiKey}`
    );
    const data = await response.json();

    if (data.status !== "OK") {
      return res.status(500).json({ error: data.status });
    }

    const { reviews = [], rating, user_ratings_total } = data.result;
    const fiveStarReviews = reviews.filter((r) => r.rating === 5).slice(0, 6);

    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
    res.status(200).json({ reviews: fiveStarReviews, rating, total: user_ratings_total });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
}
