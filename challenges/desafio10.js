db.trips.aggregate([
  { $group: { _id: "$usertype",
    duracao:
  { $avg: { $subtract: ["$stopTime", "$startTime"] } },
  } },
  { $project: { _id: 0,
    tipo: "$_id",
    duracaoMedia: { $round: [{ $divide: [{ $divide: [{ $divide: ["$duracao", 1000] }, 60] }, 60] }, 2] },

  } },
  { $sort: { duracaoMedia: 1 } },
]);
