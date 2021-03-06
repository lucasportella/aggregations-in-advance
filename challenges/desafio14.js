db.trips.aggregate([
  { $group: { _id: "$bikeid", duracao_media: { $avg: { $subtract: ["$stopTime", "$startTime"] } } } },
  { $project: { _id: 0, bikeId: "$_id", duracaoMedia: { $ceil: { $divide: ["$duracao_media", 1000 * 60] } } } },
  { $sort: { duracaoMedia: -1 } },
  { $limit: 5 },
]);
